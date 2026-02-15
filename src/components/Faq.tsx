import { useState } from 'react'
import { FAQ } from '../data/constants'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="px-4 py-16 md:py-20 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-2xl mx-auto">
        <h2 id="faq-heading" className="text-xl md:text-2xl font-semibold text-stone-800 mb-8 text-center">
          よくある質問
        </h2>
        <ul className="space-y-2">
          {FAQ.map((item, i) => (
            <li
              key={i}
              className="rounded-misa border border-stone-200 bg-stone-50/50 overflow-hidden shadow-misa"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-5 py-4 text-left font-medium text-stone-800 flex justify-between items-center gap-4 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-misa-pink focus:ring-inset"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span>{item.q}</span>
                <span
                  className={`shrink-0 text-misa-pink-dark transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  aria-hidden
                >
                  ▼
                </span>
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className={`overflow-hidden transition-[max-height] duration-200 ${
                  openIndex === i ? 'max-h-[500px]' : 'max-h-0'
                }`}
              >
                <div className="px-5 pb-4 pt-0 text-stone-600 text-sm leading-relaxed border-t border-stone-200">
                  {item.a}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
