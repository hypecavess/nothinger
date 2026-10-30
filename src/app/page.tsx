import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-neutral-950 flex flex-col items-center justify-center p-6 text-neutral-100">
      <div className="w-full max-w-md p-8 rounded-2xl bg-neutral-900 border border-neutral-800 text-center shadow-2xl">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 text-black font-black text-2xl flex items-center justify-center shadow-lg shadow-amber-500/20">
          G
        </div>
        <h1 className="text-2xl font-bold tracking-tight mb-2">GARAGE</h1>
        <p className="text-sm text-neutral-400 mb-6">
          Hoş geldiniz! Dijital menümüze aşağıdaki butondan ulaşabilirsiniz.
        </p>

        <Link
          href="/garage-qrmenu"
          className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm transition-all shadow-lg shadow-amber-500/20 active:scale-98"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Garage QR Menüyü Aç
        </Link>
      </div>
    </main>
  );
}
