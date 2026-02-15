export default function Footer() {
  return (
    <footer className="px-4 py-8 bg-stone-100 border-t border-stone-200 text-center text-sm text-stone-600">
      <p className="mb-2">
        運営：<span className="font-medium text-stone-700">Filis Creation</span>
      </p>
      <p>
        <a
          href="/privacy"
          className="underline hover:text-stone-800 focus:outline-none focus:ring-2 focus:ring-misa-pink rounded"
        >
          プライバシーポリシー
        </a>
      </p>
    </footer>
  )
}
