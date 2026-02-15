export default function LifestyleBand() {
  return (
    <section className="relative overflow-hidden bg-stone-100" aria-label="空気感">
      <img
        src="/images/lifestyle.webp"
        alt=""
        className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-[0.08]"
        loading="lazy"
      />
      <div className="relative h-32 md:h-40" aria-hidden />
    </section>
  )
}
