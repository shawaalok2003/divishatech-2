import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-primary via-dark-green to-secondary flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in">
          Revolutionizing Kerala's Market.
          <br />
          <span className="text-accent">Building Sustainable Businesses.</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto">
          From farm to luxury, VKD Group is redefining industries with technology, ethics, and
          excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection("businesses")}
            className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Explore Our Group
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Partner With Us
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Contact VKD Group
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;