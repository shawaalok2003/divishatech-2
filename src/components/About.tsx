import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-24 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About VKD Group</h2>
          <p className="text-lg text-muted-foreground mb-4">
            VKD Group is a diversified enterprise redefining Kerala's vegetable and wellness
            industries. What began as a local wholesale initiative has evolved into a multi-sector
            group spanning agriculture, technology, hospitality, and real estate.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            With a commitment to sustainability, innovation, and community empowerment, we're
            building businesses that not only thrive but also contribute positively to society and
            the environment.
          </p>
          <Button
            onClick={() => scrollToSection("businesses")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Discover Our Businesses
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg"
              alt="VKD Group Corporate"
              className="w-full h-64 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-300"
            />
          </div>
          <Card className="p-8 bg-card hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To become a trusted and forward-thinking enterprise modernizing Kerala's food,
              wellness, and business landscape.
            </p>
          </Card>
          <Card className="p-8 bg-card hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To build sustainable, ethical, and technology-driven ventures that empower communities
              and deliver excellence.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;