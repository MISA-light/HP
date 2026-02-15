export default function PhoneMock() {
  const hashtags = ['#スキンケア', '#レビュー', '#使い心地', '#朝のルーティン', '#保湿']

  return (
    <div className="mx-auto w-[290px] md:w-[340px] shrink-0">
      <div className="relative rounded-[44px] border border-stone-300 bg-stone-900 p-[10px] shadow-[0_25px_70px_rgba(0,0,0,0.18)]">
        <div className="absolute left-1/2 top-[10px] h-6 w-24 -translate-x-1/2 rounded-full bg-stone-800" />
        <div className="overflow-hidden rounded-[34px] bg-white">
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="text-xs text-stone-500">PR投稿イメージ</div>
              <div className="text-[11px] text-stone-400">MISA</div>
            </div>

            {/* 投稿カード */}
            <div className="mt-3 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
              {/* メディア（投稿画像） */}
              <div className="relative h-44">
                <img
                  src="/images/sp.webp"
                  alt="PR投稿サンプル"
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-white/5" aria-hidden />
              </div>

              {/* コンテンツ */}
              <div className="p-3">
                <div className="flex items-center gap-2">
                  <img
                    src="/images/sp-misa.webp"
                    alt="MISA"
                    className="h-7 w-7 shrink-0 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div className="text-sm font-semibold text-stone-700">MISA</div>
                  <div className="ml-auto text-[11px] text-stone-400">#PR</div>
                </div>

                <p className="mt-3 text-xs text-stone-600 leading-relaxed">
                  まず驚いたのが、なじみの早さ。ベタつかないのに、肌がふわっと整う感じが好き…！
                  仕上がりが軽いから、朝のメイク前にも使いやすかったです。
                </p>

                <p className="mt-2 text-[11px] text-stone-500 leading-relaxed">
                  使い方／使用感／おすすめポイントを"褒めレビュー"で分かりやすくまとめます。
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {hashtags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-stone-100 px-2 py-1 text-[10px] text-stone-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-3 text-[10px] text-stone-400">
              ※文章・表現はイメージです（案件ごとに調整します）
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
