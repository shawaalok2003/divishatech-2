import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OtherBusinesses from "@/components/OtherBusinesses";
import { Building, Home, TrendingUp, Shield } from "lucide-react";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const JTEstates = () => {
  const features = [
    {
      icon: Building,
      title: "Commercial Projects",
      description: "Strategic commercial spaces designed for business growth and success.",
    },
    {
      icon: Home,
      title: "Residential Properties",
      description: "Modern homes built with quality materials and thoughtful design.",
    },
    {
      icon: TrendingUp,
      title: "Smart Infrastructure",
      description: "Future-ready properties with sustainable and smart building features.",
    },
    {
      icon: Shield,
      title: "Trusted Developer",
      description: "Transparent dealings, on-time delivery, and post-sales support.",
    },
  ];

  const jteImages = [
    "Entry .jpg",
    "PABN0625.jpg",
    "PABN0668.jpg",
    "PABN0670.jpg",
    "PABN0680.jpg",
    "PABN0686.jpg",
    "PABN0697.jpg",
    "PABN0707.jpg",
    "PABN0715.jpg",
    "PABN0718.jpg",
    "PABN0726.jpg",
    "PABN0737.jpg",
    "PABN0748.jpg",
    "PABN0753.jpg",
    "PABN0754.jpg",
  ];

  const jteScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = jteScrollRef.current;
    if (!el) return;
    const iv = setInterval(() => {
      const container = jteScrollRef.current;
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-green to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground text-lg px-6 py-2">
              Real Estate Division
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              JT Estates
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Building smart, sustainable commercial and residential real estate projects that shape Kerala's future.
            </p>
  
          </div>
        </div>
      </section>

      {/* Project Images (carousel like SRM Hotels) */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto relative">
            <div className="flex items-center">
              <button
                aria-label="Previous"
                onClick={() => {
                  const el = jteScrollRef.current;
                  if (el) el.scrollBy({ left: -el.clientWidth, behavior: "smooth" });
                }}
                className="hidden md:inline-flex items-center justify-center bg-black/40 text-white p-2 rounded-full hover:bg-black/60 mr-3"
              >
                ‹
              </button>

              <div
                ref={jteScrollRef}
                className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
                style={{ scrollSnapType: "x mandatory" }}
              >
                {jteImages.map((name, idx) => (
                  <div key={name} className="flex-shrink-0 w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/3 snap-start">
                    <img
                      src={`/images/${encodeURI("plantation")}/${encodeURI(name)}`}
                      alt={`Plantation ${idx + 1}`}
                      className="w-full h-72 md:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
                      loading="lazy"
                      onError={(e) => {
                        // eslint-disable-next-line no-console
                        console.warn("Failed to load plantation image:", e.currentTarget.src);
                        e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="%23ddd"/><text x="50%" y="50%" fill="%23666" font-size="24" text-anchor="middle" dominant-baseline="middle">Image not available</text></svg>';
                      }}
                    />
                  </div>
                ))}
              </div>

              <button
                aria-label="Next"
                onClick={() => {
                  const el = jteScrollRef.current;
                  if (el) el.scrollBy({ left: el.clientWidth, behavior: "smooth" });
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
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            Building Tomorrow's Landmarks
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            JT Estates is committed to creating properties that combine modern design, sustainability, and smart infrastructure.
          </p>
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

      {/* Other Businesses */}
      <OtherBusinesses currentPath="/jt-estates" />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Invest in Your Future
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Discover prime real estate opportunities with JT Estates. Your dream property awaits.
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

export default JTEstates;