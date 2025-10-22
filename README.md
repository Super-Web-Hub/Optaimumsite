# OptAImum Consulting Website

> High-performance consulting website built with Next.js 15, optimized for conversion and sub-200ms TTFB on Vercel Edge.

## Project Overview

OptAImum Consulting specializes in designing, automating, and integrating AI workflows that cut costs and lift revenue—without breaking your stack. This website serves as the primary conversion funnel for qualified leads and consultation bookings.

### Key Features

- **Performance**: <200ms TTFB, Core Web Vitals green
- **Accessibility**: WCAG 2.2 AA compliant
- **Security**: HIPAA/PHI-free forms, GDPR/CCPA compliant
- **Analytics**: Full funnel tracking with GA4 & PostHog
- **CMS**: Headless architecture with Sanity
- **Conversion**: Optimized CTAs, social proof, and booking flow

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: TailwindCSS + shadcn/ui
- **CMS**: Sanity (or Contentlayer for MDX)
- **Database**: Neon PostgreSQL
- **Cache**: Upstash Redis
- **Forms**: React Hook Form + Zod
- **Email**: Resend
- **Analytics**: PostHog + GA4
- **Hosting**: Vercel
- **CRM**: HubSpot
- **Calendar**: Calendly

## Project Structure

```
optaimum-consulting/
├── app/                      # Next.js App Router
│   ├── (site)/              # Public site routes
│   │   ├── solutions/       # Solution pages
│   │   ├── industries/      # Industry pages
│   │   ├── case-studies/    # Case studies
│   │   ├── blog/           # Blog posts
│   │   ├── pricing/        # Pricing tiers
│   │   └── book/           # Booking flow
│   ├── (legal)/            # Legal pages
│   └── api/                # API routes
│       ├── forms/          # Form handlers
│       ├── webhooks/       # Webhook endpoints
│       └── analytics/      # Analytics endpoints
├── components/              # React components
│   ├── ui/                 # Base UI components
│   ├── sections/           # Page sections
│   ├── forms/              # Form components
│   └── layouts/            # Layout components
├── lib/                     # Utilities & services
│   ├── api/                # External API clients
│   ├── cms/                # CMS integration
│   ├── db/                 # Database layer
│   ├── analytics/          # Analytics tracking
│   ├── seo/                # SEO utilities
│   └── email/              # Email services
├── content/                 # Content files (if using MDX)
├── public/                  # Static assets
├── packages/                # Monorepo packages
│   ├── cms/                # CMS schemas
│   ├── config/             # Shared configs
│   └── email-templates/    # Email templates
├── scripts/                 # Build & automation scripts
├── tests/                   # Test suites
└── docs/                    # Documentation
```

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm or npm
- PostgreSQL (via Neon)
- Redis (via Upstash)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/optaimum/consulting-website.git
cd optaimum-consulting
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Run database migrations:
```bash
npm run db:migrate
```

5. Start the development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to see the site.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - TypeScript type checking
- `npm run test` - Run tests
- `npm run test:e2e` - Run E2E tests
- `npm run analyze` - Analyze bundle size

### Code Style

- **TypeScript**: Strict mode enabled
- **Formatting**: Prettier with Tailwind plugin
- **Linting**: ESLint with Next.js config
- **Commits**: Conventional commits

### Component Development

Components follow a consistent structure:

```tsx
// components/sections/Hero.tsx
import { cn } from '@/lib/utils'

interface HeroProps {
  title: string
  subtitle?: string
  className?: string
}

export function Hero({ title, subtitle, className }: HeroProps) {
  return (
    <section className={cn('relative py-24', className)}>
      {/* Component implementation */}
    </section>
  )
}
```

## Performance

### Targets

- **TTFB**: <200ms (p95)
- **LCP**: <2.5s
- **FID**: <100ms
- **CLS**: <0.1
- **Lighthouse**: 95+ score

### Optimization Techniques

- Image optimization with Next/Image
- Font subsetting and preloading
- Route prefetching
- Edge caching on Vercel
- Lazy loading below the fold
- Bundle splitting per route

## SEO

### On-Page

- Semantic HTML structure
- Dynamic meta tags
- Schema.org markup
- XML sitemap generation
- Robots.txt configuration

### Content Strategy

**Pillar Topics:**
- AI customer support automation
- SMB operations automation
- AI data pipelines
- n8n workflow automation
- RevOps automation

## Security

- CSP headers configured
- Rate limiting on forms
- Input validation with Zod
- SQL injection prevention
- XSS protection
- CSRF tokens
- Secure cookies

## Analytics & Tracking

### Events

- `lead_submit` - Form submission
- `book_call` - Calendar booking
- `download_resource` - Resource download
- `watch_demo` - Demo video view
- `case_study_view` - Case study pageview

### Attribution

- UTM parameter capture
- First-touch/last-touch tracking
- Multi-touch attribution
- Conversion path analysis

## Deployment

### Vercel

1. Connect GitHub repository
2. Configure environment variables
3. Deploy with one click

### Environment Variables

Required variables are listed in `.env.example`

## Testing

### Unit Tests

```bash
npm run test
```

### E2E Tests

```bash
npm run test:e2e
```

### Performance Testing

```bash
npm run build
npm run analyze
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Write/update tests
4. Submit a pull request

## Roadmap

- [ ] Phase 1 (Days 0-30): Core site, CMS, analytics
- [ ] Phase 2 (Days 31-60): Industry pages, blog, A/B testing
- [ ] Phase 3 (Days 61-90): Resource hub, ROI calculator, client portal

## License

Private and confidential. All rights reserved.

## Support

For questions or issues:
- Email: dev@optaimum.com
- Slack: #website-dev

---

Built with precision for OptAImum Consulting