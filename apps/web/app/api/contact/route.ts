import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { LeadNotificationEmail } from '@/emails/lead-notification'
import { LeadConfirmationEmail } from '@/emails/lead-confirmation'

// Initialize Resend with API key (will use environment variable in production)
const resend = new Resend(process.env.RESEND_API_KEY || 'demo-key')

// Simple in-memory storage for demo (replace with database in production)
const leads: any[] = []

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Basic validation
    if (!data.name || !data.email || !data.company || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Add metadata
    const lead = {
      ...data,
      id: Date.now().toString(),
      created_at: new Date().toISOString(),
      source: 'contact_form',
      status: 'new',
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      user_agent: request.headers.get('user-agent') || 'unknown',
    }

    // Store lead (in production, save to database)
    leads.push(lead)
    console.log('New lead received:', lead)

    // Send emails only if API key is configured
    if (process.env.RESEND_API_KEY) {
      try {
        // Send notification email to team
        const notificationEmail = await resend.emails.send({
          from: 'OptAImum <notifications@optaimum.com>',
          to: process.env.NOTIFICATION_EMAIL || 'sales@optaimum.com',
          subject: `New Lead: ${data.name} from ${data.company}`,
          react: LeadNotificationEmail({
            name: data.name,
            email: data.email,
            company: data.company,
            phone: data.phone,
            message: data.message,
            projectDetails: data.projectDetails,
            budget: data.budget,
            timeline: data.timeline,
            source: 'Contact Form',
            timestamp: lead.created_at,
          }),
        })

        console.log('Notification email sent:', notificationEmail)

        // Send confirmation email to the lead
        const confirmationEmail = await resend.emails.send({
          from: 'OptAImum <hello@optaimum.com>',
          to: data.email,
          subject: 'Thank you for contacting OptAImum Consulting',
          react: LeadConfirmationEmail({
            name: data.name,
            firstName: data.name.split(' ')[0],
          }),
        })

        console.log('Confirmation email sent:', confirmationEmail)
      } catch (emailError) {
        // Log email error but don't fail the request
        console.error('Email send error:', emailError)
        // In production, you might want to queue this for retry
      }
    } else {
      console.log('Email skipped: RESEND_API_KEY not configured')
    }

    // In production, you would also:
    // 1. Save to database (PostgreSQL/Supabase)
    // 2. Push to CRM (HubSpot/Salesforce)
    // 3. Trigger n8n workflow for further automation

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your inquiry. We will contact you within 2 business hours.',
        lead_id: lead.id
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve leads (for testing/admin)
export async function GET(request: NextRequest) {
  // In production, add authentication here
  const authHeader = request.headers.get('authorization')

  // Simple auth check for demo
  if (authHeader !== 'Bearer demo-token-123') {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  return NextResponse.json({
    total: leads.length,
    leads: leads.slice(-10), // Return last 10 leads
  })
}