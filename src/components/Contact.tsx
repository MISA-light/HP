import { LINKS } from '../data/constants'

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-4 py-16 md:py-20 bg-gradient-to-b from-misa-pink-light/40 to-stone-50"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 id="contact-heading" className="text-xl md:text-2xl font-semibold text-stone-800 mb-4">
          お問い合わせ
        </h2>
        <p className="text-stone-600 text-sm md:text-base mb-8">
          ご相談内容をDMにご入力ください。原則48時間以内にご連絡します。
        </p>
        <a
          href={LINKS.X_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-misa-lg bg-misa-pink text-white font-medium shadow-misa-md hover:bg-misa-pink-dark focus:outline-none focus:ring-2 focus:ring-misa-pink focus:ring-offset-2 min-h-[48px] min-w-[240px] text-center"
        >
          DMで相談する
        </a>
        <p className="mt-6 text-xs text-stone-500">
          料金は非公開です。内容・期間・二次利用の有無により個別にご提案します。
        </p>
      </div>
    </section>
  )
}
