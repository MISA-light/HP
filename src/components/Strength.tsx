import PhoneMock from './PhoneMock'

export default function Strength() {
  return (
    <section
      id="strength"
      className="relative overflow-hidden bg-white"
      aria-labelledby="strength-heading"
    >
      <img
        src="/images/flatlay.webp"
        alt=""
        className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-[0.08]"
        loading="lazy"
      />
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="text-center md:text-left">
            <p className="text-sm text-misa-pink-dark font-medium tracking-wider">@cosme認定 ビューティーパートナー</p>
            <h2 id="strength-heading" className="mt-2 text-xl md:text-2xl lg:text-3xl font-semibold text-stone-800 tracking-tight">
              「褒めレビュー」で、前向きな気持ちをつくる
            </h2>
            <p className="mt-4 text-stone-600 leading-relaxed">
              良いところを丁寧に言語化し、購入前の不安をやわらげます。
              清潔感・好感度の高いトーンで、ブランドの世界観を崩さずに訴求できます。
            </p>
          </div>
          <div className="flex justify-center">
            <PhoneMock />
          </div>
        </div>
      </div>
    </section>
  )
}
