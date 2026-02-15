import { LINKS, METRICS } from '../data/constants'
import { useCountUpOnView } from '../hooks/useCountUpOnView'

export default function Hero() {
  const total = useCountUpOnView(METRICS.totalFollowers, 900)

  return (
    <section
      className="relative min-h-[480px] md:min-h-[560px]"
      aria-label="メイン"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[480px] md:min-h-[560px]">
        {/* Left: copy（背景はstone-50でセクションと同化） */}
        <div className="relative flex flex-col justify-center bg-stone-50 px-4 py-14 md:px-8 md:py-16 lg:px-12">
          {/* Logo: 左上固定 */}
          <div className="absolute left-4 top-4 md:left-6 md:top-6">
            <img
              src="/images/logo.webp"
              alt="MISA"
              className="h-20 w-auto md:h-28 drop-shadow-md"
              loading="eager"
            />
          </div>

          <div className="text-center md:text-left pt-20 md:pt-28">
            <p className="text-base md:text-lg lg:text-xl text-stone-600 leading-relaxed">
              褒め上手な美容レビューで、ブランドの魅力を
              <span className="font-semibold text-stone-800">自然に届く言葉</span>に。
            </p>

            <div className="mt-8">
              <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-stone-800 tracking-tight">
                SNS総フォロワー <span ref={total.ref} className="font-bold text-misa-pink-dark">{total.text}</span>
              </div>
              <div className="mt-2 text-sm md:text-base text-stone-500">
                <a href={LINKS.X_URL} target="_blank" rel="noopener noreferrer" className="text-misa-pink-dark hover:underline">X {METRICS.xFollowers.toLocaleString()}</a>
                {' / '}
                <a href={LINKS.INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-misa-pink-dark hover:underline">Instagram {METRICS.igFollowers.toLocaleString()}</a>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <a
                href={LINKS.X_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold bg-misa-pink text-white shadow-misa hover:bg-misa-pink-dark transition focus:outline-none focus:ring-2 focus:ring-misa-pink focus:ring-offset-2 min-h-[44px]"
              >
                DMで相談する
              </a>
              <span className="text-sm text-stone-500">
                原則48時間以内に返信します
              </span>
            </div>
            <p className="mt-3 text-xs text-stone-400">
              対応メニュー：PR投稿 / リール / ストーリーズ
            </p>
          </div>
        </div>

        {/* Right: hero image（背景として同化・枠なし） */}
        <div className="relative min-h-[360px] md:min-h-[560px]">
          <img
            src="/images/hero.webp"
            alt="MISA Media Kit - 褒め上手な美容レビュー"
            className="absolute inset-0 h-full w-full object-cover object-[50%_35%]"
            loading="eager"
            fetchPriority="high"
          />
          {/* 左端をstone-50にグラデーション（境界を自然に） */}
          <div
            className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-stone-50 to-transparent md:w-32"
            aria-hidden
          />
        </div>
      </div>
    </section>
  )
}
