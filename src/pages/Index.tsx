import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CoreBusiness from "@/components/CoreBusiness";
import Businesses from "@/components/Businesses";
import Testimonials from "@/components/Testimonials";
import Future from "@/components/Future";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <CoreBusiness />
        <Businesses />
        <Testimonials />
        <Future />
        <Leadership />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
