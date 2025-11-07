import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Features from "../components/Features";
import Settlement from "../components/Settlement";
import Liquidity from "../components/Liquidity";
import Security from "../components/Security";
import API from "../components/API";
import Insights from "../components/Insights";
import Compliance from "../components/Compliance";
import Contact from "../components/Contact";

export default function HomePage(): JSX.Element {
  const sections = [
    Hero,
    Partners,
    Features,
    Settlement,
    Liquidity,
    Security,
    API,
    Insights,
    Compliance,
    Contact,
  ];

  return (
    <main className="relative z-10">
      {sections.map((Component, i) => (
        <section
          key={i}
          className="
            relative
            border-t border-[#b7f3de]/40
            bg-gradient-to-b from-brand-mintLight/60 to-white/60
            backdrop-blur-[2px]
            transition-colors duration-700
          "
        >
          <Component />
        </section>
      ))}
    </main>
  );
}
