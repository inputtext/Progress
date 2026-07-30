import Decorations from "./Decorations";
import ConstructionTape from "./ConstructionTape";
import Header from "./Header";
import Hero from "./Hero";
import CountDown from "./CountDown";
import Building from "./Building";
import CTA from "./CTA";
import Footer from "./Footer";

export default function ComingSoonBrutal() {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#F8F6F1]
        text-black
      "
    >
        {/* Background Decorations */}
        <Decorations />

        {/* Construction Banner */}
        <ConstructionTape />

        {/* Header */}
        <Header />

        {/* Main Content */}
        <Hero />

        {/* Countdown */}
        <CountDown />

        {/* Development Timeline */}
        <Building />

        {/* Call To Action */}
        <CTA />

        {/* Footer */}
        <Footer />
        </main>
  );
}
