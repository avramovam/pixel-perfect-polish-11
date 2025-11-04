import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Counter } from "@/components/Counter";
import { Capabilities } from "@/components/Capabilities";
import { Production } from "@/components/Production";
import { Experience } from "@/components/Experience";
import { Partners } from "@/components/Partners";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Counter />
        <Capabilities />
        <Production />
        <Experience />
        <Partners />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
