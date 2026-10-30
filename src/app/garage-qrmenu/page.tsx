import type { Metadata, Viewport } from "next";
import GarageMenuViewer from "./GarageMenuViewer";

export const metadata: Metadata = {
  title: "Garage QR Menü | Dijital Menü",
  description: "Garage dijital menüsü ve lezzetleri. Menümüzü inceleyin veya PDF olarak indirin.",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function GarageQrMenuPage() {
  return <GarageMenuViewer />;
}
