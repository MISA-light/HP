import { LINKS, METRICS } from '../data/constants'

export default function Metrics() {
  return (
    <section className="px-4 py-16 md:py-20 bg-stone-50" aria-labelledby="metrics-heading">
      <div className="max-w-2xl mx-auto text-center">
        <h2 id="metrics-heading" className="text-xl md:text-2xl font-semibold text-stone-800 mb-8">
          SNSデータ
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <a
            href={LINKS.X_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-misa-pink focus:ring-offset-2 rounded-misa"
          >
            <p className="text-2xl md:text-3xl font-semibold text-misa-pink-dark">
              {METRICS.xFollowers.toLocaleString()}
            </p>
            <p className="text-stone-600 text-sm mt-1">X</p>
          </a>
          <a
            href={LINKS.INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-misa-pink focus:ring-offset-2 rounded-misa"
          >
            <p className="text-2xl md:text-3xl font-semibold text-misa-pink-dark">
              {METRICS.igFollowers.toLocaleString()}
            </p>
            <p className="text-stone-600 text-sm mt-1">Instagram</p>
          </a>
          <div>
            <p className="text-2xl md:text-3xl font-semibold text-misa-pink-dark">
              {METRICS.totalFollowers.toLocaleString()}
            </p>
            <p className="text-stone-600 text-sm mt-1">合計</p>
          </div>
        </div>
      </div>
    </section>
  )
}
