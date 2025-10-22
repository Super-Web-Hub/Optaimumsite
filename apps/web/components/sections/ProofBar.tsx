import homeContent from '@/content/home.json'

export function ProofBar() {
  const { logos } = homeContent

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-600">
            Trusted by innovative companies
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
            {logos.map((logo, index) => (
              <div key={index} className="flex h-12 w-32 items-center justify-center">
                <div className="h-8 w-full rounded bg-gray-200" />
                {/* Replace with actual logo images */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}