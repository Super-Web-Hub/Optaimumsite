import Link from 'next/link'
import homeContent from '@/content/home.json'

export function Hero() {
  const { hero } = homeContent

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-24 text-center lg:py-32">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">{hero.headline}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
            {hero.sub}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/book"
              className="rounded-md bg-optaimum-blue px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-optaimum-blue-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-optaimum-blue"
            >
              {hero.primaryCta}
            </Link>
            <Link
              href="/case-studies"
              className="text-base font-semibold leading-6 text-gray-900 hover:text-optaimum-blue transition-colors"
            >
              {hero.secondaryCta} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
      {/* Background decoration */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-optaimum-blue to-blue-400 opacity-10 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </section>
  )
}