import { BRANDS } from '../data/constants'

export default function BrandMarquee() {
  return (
    <section id="proof" className="max-w-6xl mx-auto px-4 md:px-6 py-14 md:py-16 bg-white" aria-labelledby="proof-heading">
      <h2 id="proof-heading" className="text-xl md:text-2xl lg:text-3xl font-semibold text-stone-800 tracking-tight">
        PR/提供実績（一部）
      </h2>
      <p className="mt-2 text-stone-500 text-sm">
        掲載許諾のある範囲で記載しています。詳細はDMでご相談ください。
      </p>

      <ul className="mt-8 flex flex-wrap justify-center gap-2 md:gap-3">
        {BRANDS.map((name) => (
          <li key={name}>
            <span className="inline-block rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-medium text-stone-700 shadow-sm">
              {name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
