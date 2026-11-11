import Hero from "@/app/components/sections/Hero";
import About from "@/app/components/sections/About";
import Reach from "@/app/components/sections/Reach";
import Business from "@/app/components/sections/Business";
import ClientsMarquee from "@/app/components/sections/ClientsMarquee";
import Strength from "@/app/components/sections/Strength";
import Cta from "@/app/components/sections/Cta";
import ContactStrip from "@/app/components/sections/ContactStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Reach />
      <Business />
      <ClientsMarquee />
      <Strength />
      <Cta />
      <ContactStrip />
    </>
  );
}
