import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components';

interface LeadConfirmationEmailProps {
  name: string;
  firstName?: string;
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

const logo = {
  margin: '0 auto 32px',
  display: 'block',
};

const h1 = {
  color: '#1a1a1a',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '30px',
  margin: '0 0 24px',
  textAlign: 'center' as const,
};

const text = {
  color: '#444444',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px',
};

const section = {
  margin: '32px 0',
};

const button = {
  backgroundColor: '#0066FF',
  borderRadius: '5px',
  color: '#fff',
  display: 'inline-block',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '44px',
  padding: '0 24px',
  textAlign: 'center' as const,
  textDecoration: 'none',
};

const buttonSecondary = {
  backgroundColor: '#ffffff',
  border: '2px solid #0066FF',
  borderRadius: '5px',
  color: '#0066FF',
  display: 'inline-block',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '40px',
  padding: '0 20px',
  textAlign: 'center' as const,
  textDecoration: 'none',
  marginLeft: '12px',
};

const hr = {
  border: 'none',
  borderTop: '1px solid #eaeaea',
  margin: '32px 0',
};

const footer = {
  color: '#999999',
  fontSize: '12px',
  lineHeight: '16px',
  margin: '32px 0 0',
  textAlign: 'center' as const,
};

const resourceBox = {
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  padding: '20px',
  margin: '16px 0',
};

const resourceTitle = {
  color: '#1a1a1a',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0 0 8px',
};

const resourceDescription = {
  color: '#666666',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0',
};

export function LeadConfirmationEmail({
  name,
  firstName,
}: LeadConfirmationEmailProps) {
  const displayName = firstName || name.split(' ')[0] || 'there';

  return (
    <Html>
      <Head />
      <Preview>Thank you for contacting OptAImum Consulting</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://optaimum.com/logo.png"
            width="150"
            height="40"
            alt="OptAImum Consulting"
            style={logo}
          />

          <Heading style={h1}>Thank You for Reaching Out!</Heading>

          <Text style={text}>Hi {displayName},</Text>

          <Text style={text}>
            We've received your inquiry and appreciate your interest in OptAImum Consulting.
            Our team is reviewing your message and will get back to you within 24 hours.
          </Text>

          <Text style={text}>
            In the meantime, here are some resources you might find valuable:
          </Text>

          <Section style={section}>
            <div style={resourceBox}>
              <Text style={resourceTitle}>📊 Browse Our Case Studies</Text>
              <Text style={resourceDescription}>
                See how we've helped companies achieve 3-5x ROI with AI automation
              </Text>
              <Link href="https://optaimum.com/case-studies" style={{ color: '#0066FF', fontSize: '14px' }}>
                View case studies →
              </Link>
            </div>

            <div style={resourceBox}>
              <Text style={resourceTitle}>🚀 Explore Our Solutions</Text>
              <Text style={resourceDescription}>
                Discover our AI-powered solutions for workflow automation, data pipelines, and more
              </Text>
              <Link href="https://optaimum.com/solutions" style={{ color: '#0066FF', fontSize: '14px' }}>
                Explore solutions →
              </Link>
            </div>

            <div style={resourceBox}>
              <Text style={resourceTitle}>📅 Book a Discovery Call</Text>
              <Text style={resourceDescription}>
                Want to discuss your project sooner? Schedule a 30-minute consultation
              </Text>
              <Link href="https://optaimum.com/book" style={{ color: '#0066FF', fontSize: '14px' }}>
                Schedule now →
              </Link>
            </div>
          </Section>

          <Hr style={hr} />

          <Section style={{ textAlign: 'center' }}>
            <Text style={{ ...text, fontWeight: '600', fontSize: '18px', marginBottom: '24px' }}>
              Ready to Transform Your Operations with AI?
            </Text>

            <Button
              href="https://optaimum.com/book"
              style={button}
            >
              Schedule Your Assessment
            </Button>

            <Link
              href="https://optaimum.com/solutions"
              style={buttonSecondary}
            >
              View Solutions
            </Link>
          </Section>

          <Hr style={hr} />

          <Section>
            <Text style={text}>
              <strong>What happens next?</strong>
            </Text>
            <Text style={text}>
              1. Our team will review your requirements<br />
              2. We'll prepare insights specific to your use case<br />
              3. You'll receive a follow-up within 24 hours<br />
              4. We'll schedule a consultation at your convenience
            </Text>
          </Section>

          <Text style={footer}>
            OptAImum Consulting | AI Systems That Move the P&L<br />
            <Link href="https://optaimum.com" style={{ color: '#999999' }}>
              optaimum.com
            </Link>{' '}
            |{' '}
            <Link href="mailto:hello@optaimum.com" style={{ color: '#999999' }}>
              hello@optaimum.com
            </Link>
            <br /><br />
            You received this email because you submitted an inquiry on our website.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default LeadConfirmationEmail;