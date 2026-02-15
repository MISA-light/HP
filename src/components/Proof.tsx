import { BRANDS } from '../data/constants'

export default function Proof() {
  return (
    <section className="px-4 py-16 md:py-20 bg-white" aria-labelledby="proof-heading">
      <div className="max-w-4xl mx-auto">
        <h2 id="proof-heading" className="text-xl md:text-2xl font-semibold text-stone-800 mb-4 text-center">
          PR/提供実績（一部）
        </h2>
        <p className="text-sm text-stone-500 text-center mb-8">
          掲載許諾のある範囲で記載しています。詳細はお問い合わせください。
        </p>
        <ul className="flex flex-wrap justify-center gap-2 md:gap-3">
          {BRANDS.map((name) => (
            <li key={name}>
              <span className="inline-block px-4 py-2 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-sm font-medium shadow-sm">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
