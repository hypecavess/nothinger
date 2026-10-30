import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Garage QR Menü",
  description: "Garage dijital menü",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function GarageQrMenuPage() {
  return (
    <main className="fixed inset-0 w-full h-[100dvh] bg-black overflow-hidden m-0 p-0">
      <object
        data="/files/garage-menu.pdf#toolbar=1&navpanes=0&view=FitH"
        type="application/pdf"
        className="w-full h-full block border-0"
      >
        <iframe
          src="/files/garage-menu.pdf#toolbar=1&navpanes=0&view=FitH"
          className="w-full h-full border-0 block"
          title="Garage QR Menü"
        >
          <div className="flex flex-col items-center justify-center h-full px-6 text-center text-white bg-black">
            <p className="text-sm text-neutral-300 mb-4">
              Cihazınız PDF belgesini doğrudan önizlemeyi desteklemiyor olabilir.
            </p>
            <a
              href="/files/garage-menu.pdf"
              className="px-5 py-2.5 rounded-xl bg-amber-500 text-black font-semibold text-sm"
            >
              Menüyü Aç (PDF)
            </a>
          </div>
        </iframe>
      </object>
    </main>
  );
}
