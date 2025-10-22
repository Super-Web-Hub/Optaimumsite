import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components';

interface LeadNotificationEmailProps {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message?: string;
  projectDetails?: string;
  budget?: string;
  timeline?: string;
  source: string;
  timestamp: string;
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #f0f0f0',
  borderRadius: '8px',
  margin: '40px auto',
  padding: '40px',
  width: '600px',
};

const h1 = {
  color: '#1a1a1a',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '30px',
  margin: '0 0 24px',
};

const section = {
  margin: '24px 0',
};

const label = {
  color: '#666666',
  fontSize: '12px',
  fontWeight: '600',
  letterSpacing: '0.5px',
  lineHeight: '16px',
  margin: '0 0 4px',
  textTransform: 'uppercase' as const,
};

const value = {
  color: '#1a1a1a',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0 0 16px',
};

const button = {
  backgroundColor: '#0066FF',
  borderRadius: '5px',
  color: '#fff',
  display: 'inline-block',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '40px',
  padding: '0 20px',
  textAlign: 'center' as const,
  textDecoration: 'none',
};

const hr = {
  border: 'none',
  borderTop: '1px solid #eaeaea',
  margin: '24px 0',
};

const footer = {
  color: '#999999',
  fontSize: '12px',
  lineHeight: '16px',
  margin: '32px 0 0',
};

export function LeadNotificationEmail({
  name,
  email,
  company,
  phone,
  message,
  projectDetails,
  budget,
  timeline,
  source,
  timestamp,
}: LeadNotificationEmailProps) {
  const formattedTimestamp = new Date(timestamp).toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  });

  return (
    <Html>
      <Head />
      <Preview>New lead from {company || name} - OptAImum Consulting</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>🎯 New Lead Received</Heading>

          <Section style={section}>
            <Text style={label}>Contact Information</Text>
            <Hr style={hr} />

            <Text style={label}>Name</Text>
            <Text style={value}>{name}</Text>

            <Text style={label}>Email</Text>
            <Text style={value}>
              <Link href={`mailto:${email}`} style={{ color: '#0066FF' }}>
                {email}
              </Link>
            </Text>

            {company && (
              <>
                <Text style={label}>Company</Text>
                <Text style={value}>{company}</Text>
              </>
            )}

            {phone && (
              <>
                <Text style={label}>Phone</Text>
                <Text style={value}>
                  <Link href={`tel:${phone}`} style={{ color: '#0066FF' }}>
                    {phone}
                  </Link>
                </Text>
              </>
            )}
          </Section>

          {(projectDetails || message) && (
            <Section style={section}>
              <Text style={label}>Project Information</Text>
              <Hr style={hr} />

              {projectDetails && (
                <>
                  <Text style={label}>Project Details</Text>
                  <Text style={value}>{projectDetails}</Text>
                </>
              )}

              {message && (
                <>
                  <Text style={label}>Message</Text>
                  <Text style={value}>{message}</Text>
                </>
              )}

              {budget && (
                <>
                  <Text style={label}>Budget Range</Text>
                  <Text style={value}>{budget}</Text>
                </>
              )}

              {timeline && (
                <>
                  <Text style={label}>Timeline</Text>
                  <Text style={value}>{timeline}</Text>
                </>
              )}
            </Section>
          )}

          <Section style={section}>
            <Text style={label}>Submission Details</Text>
            <Hr style={hr} />

            <Text style={label}>Source</Text>
            <Text style={value}>{source}</Text>

            <Text style={label}>Submitted At</Text>
            <Text style={value}>{formattedTimestamp}</Text>
          </Section>

          <Section style={{ textAlign: 'center', marginTop: '32px' }}>
            <Button
              href={`mailto:${email}?subject=Re: Your OptAImum Consulting Inquiry`}
              style={button}
            >
              Reply to Lead
            </Button>
          </Section>

          <Text style={footer}>
            This is an automated notification from OptAImum Consulting's lead capture system.
            Please respond within 24 hours for best conversion rates.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default LeadNotificationEmail;