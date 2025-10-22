import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    // Get dynamic title and description from query params
    const title = searchParams.get('title') || 'OptAImum — Practical AI, Real-World Results'
    const description = searchParams.get('description') || 'We design small, high-leverage automations that pay for themselves in weeks—not months.'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: '90%',
            }}
          >
            {/* Logo/Brand Mark */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 40,
              }}
            >
              <div
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 60,
                  background: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 60,
                  fontWeight: 'bold',
                  color: '#667eea',
                }}
              >
                OA
              </div>
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: 60,
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
                marginBottom: 20,
                lineHeight: 1.2,
                maxWidth: '80%',
              }}
            >
              {title}
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: 28,
                color: 'rgba(255, 255, 255, 0.95)',
                textAlign: 'center',
                maxWidth: '70%',
                lineHeight: 1.4,
              }}
            >
              {description}
            </p>

            {/* Bottom Brand */}
            <div
              style={{
                position: 'absolute',
                bottom: 40,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <span
                style={{
                  fontSize: 24,
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 600,
                }}
              >
                OptAImum
              </span>
              <span
                style={{
                  fontSize: 20,
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                |
              </span>
              <span
                style={{
                  fontSize: 20,
                  color: 'rgba(255, 255, 255, 0.8)',
                }}
              >
                AI Automation for SMBs
              </span>
            </div>
          </div>
        </div>
      ),
      {
        ...size,
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}