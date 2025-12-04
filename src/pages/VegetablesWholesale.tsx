import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OtherBusinesses from "@/components/OtherBusinesses";
import { Truck, Leaf, Users, CheckCircle } from "lucide-react";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VegetablesWholesale = () => {
  const features = [
    {
      icon: Truck,
      title: "Efficient Logistics",
      description: "Reliable delivery network ensuring fresh produce reaches you on time, every time.",
    },
    {
      icon: Leaf,
      title: "Fresh Sourcing",
      description: "Direct from farms with quality checks at every stage of the supply chain.",
    },
    {
      icon: Users,
      title: "B2B Solutions",
      description: "Tailored wholesale solutions for restaurants, hotels, and retail businesses.",
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "Rigorous quality control standards maintaining freshness and hygiene.",
    },
  ];

  const kaladyImages = [
    "Office cover photo .jpg",
    "PABN0474.jpg",
    "PABN0481.jpg",
    "PABN0489.jpg",
    "PABN0490.jpg",
    "PABN0505.jpg",
    "PABN0509.jpg",
    "_.jpg",
  ];

  const kaladyScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = kaladyScrollRef.current;
    if (!el) return;
    const iv = setInterval(() => {
      const container = kaladyScrollRef.current;
      if (!container) return;
      const max = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= max - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: container.clientWidth, behavior: "smooth" });
      }
    }, 4000);
    return () => clearInterval(iv);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-dark-green">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground text-lg px-6 py-2">
              Agriculture Division
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              VKD Vegetables & Wholesale
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Kerala's trusted partner for fresh produce supply. Connecting farms to businesses with reliable sourcing and efficient logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Market Images Carousel (horizontal scroll, 3 per view) */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto relative">
            <div className="flex items-center">
              <button
                aria-label="Previous"
                onClick={() => {
                  const el = kaladyScrollRef.current;
                  if (el) el.scrollBy({ left: -el.clientWidth, behavior: 'smooth' });
                }}
                className="hidden md:inline-flex items-center justify-center bg-black/40 text-white p-2 rounded-full hover:bg-black/60 mr-3"
              >
                ‹
              </button>

              <div
                ref={kaladyScrollRef}
                className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
                style={{ scrollSnapType: 'x mandatory' }}
              >
                {kaladyImages.map((name, idx) => (
                  <div key={name} className="flex-shrink-0 w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/3 snap-start">
                    <img
                      src={`/images/${encodeURI("KALADY OFFICE (1)")}/${encodeURI(name)}`}
                      alt={`Office ${idx + 1}`}
                      className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
                      loading="lazy"
                      onError={(e) => {
                        // eslint-disable-next-line no-console
                        console.warn('Failed to load office image:', e.currentTarget.src);
                        e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="%23ddd"/><text x="50%" y="50%" fill="%23666" font-size="24" text-anchor="middle" dominant-baseline="middle">Image not available</text></svg>';
                      }}
                    />
                  </div>
                ))}
              </div>

              <button
                aria-label="Next"
                onClick={() => {
                  const el = kaladyScrollRef.current;
                  if (el) el.scrollBy({ left: el.clientWidth, behavior: 'smooth' });
                }}
                className="hidden md:inline-flex items-center justify-center bg-black/40 text-white p-2 rounded-full hover:bg-black/60 ml-3"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Why Choose VKD Vegetables & Wholesale
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* Vision & Mission */}
     

      {/* Other Businesses */}
      <OtherBusinesses currentPath="/vegetables-wholesale" />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that trust VKD for their fresh produce needs.
          </p>
          <Button onClick={() => navigate('/contact')} className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full">
            Contact Sales Team
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default VegetablesWholesale;