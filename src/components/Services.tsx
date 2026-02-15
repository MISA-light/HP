const services = [
  { title: 'Instagram投稿', desc: 'フィード投稿／画像・キャプション作成' },
  { title: 'リール（短尺動画）', desc: '企画・構成／編集方針のすり合わせ' },
  { title: 'ストーリーズ', desc: '複数枚での訴求／導線設計' },
  { title: 'UGC素材制作（要相談）', desc: '広告・公式転載向けの素材納品も条件により対応' },
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-stone-50"
      aria-labelledby="services-heading"
    >
      <img
        src="/images/texture.webp"
        alt=""
        className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-[0.06]"
        loading="lazy"
      />
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <h2 id="services-heading" className="text-xl md:text-2xl lg:text-3xl font-semibold text-stone-800 tracking-tight">
          サービス群
        </h2>

        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <li key={s.title} className="py-4 border-b border-stone-200/80 last:border-b-0 md:last:border-b md:border-b-0">
              <h3 className="text-lg font-semibold text-stone-800">{s.title}</h3>
              <p className="mt-2 text-stone-600">{s.desc}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-stone-600 text-sm md:text-base">
          素材支給ベースの投稿制作も対応しています。来店・体験レビューは応相談ください。
        </p>
      </div>
    </section>
  )
}
