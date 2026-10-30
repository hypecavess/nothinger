"use client";

import React, { useState } from "react";

export default function GarageMenuViewer() {
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const pdfUrl = "/files/garage-menu.pdf";

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "Garage QR Menü",
          text: "Garage Dijital Menü",
          url: window.location.href,
        });
        return;
      } catch {
        // User canceled or failed, do nothing or fallback
        return;
      }
    }

    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="flex flex-col h-[100dvh] w-full bg-neutral-950 text-neutral-100 selection:bg-amber-500 selection:text-black">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between px-3.5 py-2.5 sm:px-6 sm:py-3.5 bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800 shadow-lg">
        {/* Brand & Title */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-black shadow-md shadow-amber-500/20 font-black text-lg tracking-wider">
            G
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-sm sm:text-base tracking-wide text-neutral-100 uppercase">
                Garage
              </h1>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                QR MENÜ
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-neutral-400 hidden xs:block">
              Dijital Menü & Fiyat Listesi
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Share / Copy Button */}
          <button
            type="button"
            onClick={handleShare}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-200 hover:text-white transition-all active:scale-95 cursor-pointer"
            title="Menüyü Paylaş"
          >
            {copied ? (
              <>
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-emerald-400">Kopyalandı!</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span className="hidden sm:inline">Paylaş</span>
              </>
            )}
          </button>

          {/* Download Button */}
          <a
            href={pdfUrl}
            download="Garage-Menu.pdf"
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-200 hover:text-white transition-all active:scale-95"
            title="PDF Olarak İndir"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="hidden sm:inline">İndir</span>
          </a>

          {/* Open in Fullscreen / New Tab */}
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-amber-500 hover:bg-amber-400 text-black transition-all shadow-md shadow-amber-500/20 active:scale-95"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span>Tam Ekran Aç</span>
          </a>
        </div>
      </header>

      {/* Quick Mobile Tip Banner */}
      <div className="bg-neutral-900/60 border-b border-neutral-800/80 px-4 py-1.5 text-center text-[11px] sm:text-xs text-neutral-400 flex items-center justify-center gap-1.5">
        <span className="text-amber-400 font-bold">İpucu:</span>
        <span>
          Menüyü yakınlaştırmak için iki parmağınızı kullanabilir veya &quot;Tam Ekran Aç&quot; butonuna basabilirsiniz.
        </span>
      </div>

      {/* PDF Viewer Body */}
      <main className="relative flex-1 w-full h-full bg-neutral-950 overflow-hidden">
        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-950/80 backdrop-blur-sm z-10 pointer-events-none transition-opacity duration-300">
            <div className="w-10 h-10 border-3 border-amber-500/20 border-t-amber-500 rounded-full animate-spin mb-3"></div>
            <p className="text-xs text-neutral-400 font-medium tracking-wide">Menü yükleniyor...</p>
          </div>
        )}

        {/* Embed / Object / Iframe for native PDF rendering */}
        <object
          data={`${pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
          type="application/pdf"
          className="w-full h-full block"
          onLoad={() => setIsLoading(false)}
        >
          {/* Fallback iframe */}
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
            className="w-full h-full border-0 block"
            title="Garage QR Menü"
            onLoad={() => setIsLoading(false)}
          >
            {/* Fallback UI if device doesn't support inline PDF iframe */}
            <div className="flex flex-col items-center justify-center h-full px-6 py-12 text-center bg-neutral-950">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-4 shadow-lg shadow-amber-500/10">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-neutral-100 mb-2">
                Garage QR Menü
              </h2>
              <p className="text-xs text-neutral-400 max-w-sm mb-6">
                Cihazınız PDF belgesini doğrudan tarayıcı içinde önizlemeyi desteklemiyor olabilir. Menüyü doğrudan görüntülemek için aşağıdaki butona dokunun:
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm transition-all shadow-lg shadow-amber-500/25 active:scale-95"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Menüyü Görüntüle
                </a>
                <a
                  href={pdfUrl}
                  download="Garage-Menu.pdf"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-medium text-sm border border-neutral-700 transition-all active:scale-95"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  İndir
                </a>
              </div>
            </div>
          </iframe>
        </object>
      </main>
    </div>
  );
}
