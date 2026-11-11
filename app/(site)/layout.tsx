import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import JsonLd from "@/app/components/JsonLd";
import MotionProvider from "@/app/components/MotionProvider";
import { organizationJsonLd } from "@/lib/seo";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <MotionProvider>
      <JsonLd data={organizationJsonLd()} />
      <Header />
      {/* overflow-x-clip: elements that slide in from the side must not widen the page */}
      <main className="flex-1 overflow-x-clip">{children}</main>
      <Footer />
    </MotionProvider>
  );
}
