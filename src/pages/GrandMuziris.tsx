import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OtherBusinesses from "@/components/OtherBusinesses";
import { Hotel, Wifi, Car, Coffee } from "lucide-react";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GrandMuziris = () => {
  const amenities = [
    {
      icon: Hotel,
      title: "Luxury Rooms",
      description: "Elegantly designed rooms blending traditional Kerala architecture with modern comfort.",
    },
    {
      icon: Wifi,
      title: "Modern Amenities",
      description: "High-speed WiFi, smart TVs, and all contemporary conveniences.",
    },
    {
      icon: Car,
      title: "Premium Services",
      description: "Concierge, valet parking, and personalized guest experiences.",
    },
    {
      icon: Coffee,
      title: "Fine Dining",
      description: "Multi-cuisine restaurant serving authentic Kerala and international delicacies.",
    },
  ];

  const gmImages = [
    "cover photo muziris_.jpg",
    "PABN8211.jpg",
    "PABN8215.jpg",
    "PABN8227.jpg",
    "PABN8231.jpg",
    "PABN8248.jpg",
  ];

  const gmScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = gmScrollRef.current;
    if (!el) return;
    const iv = setInterval(() => {
      const container = gmScrollRef.current;
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-green via-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground text-lg px-6 py-2">
              Hospitality Division
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Grand Muziris Hotel
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Where tradition meets modern luxury. Experience Kerala's finest hospitality with world-class amenities and authentic cultural charm.
            </p>
    
          </div>
        </div>
      </section>

      {/* Hotel Images (carousel from PARAVOOR HOTEL) */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto relative">
            <div className="flex items-center">
              <button
                aria-label="Previous"
                onClick={() => {
                  const el = gmScrollRef.current;
                  if (el) el.scrollBy({ left: -el.clientWidth, behavior: "smooth" });
                }}
                className="hidden md:inline-flex items-center justify-center bg-black/40 text-white p-2 rounded-full hover:bg-black/60 mr-3"
              >
                ‹
              </button>

              <div
                ref={gmScrollRef}
                className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
                style={{ scrollSnapType: "x mandatory" }}
              >
                {gmImages.map((name, idx) => (
                  <div key={name} className="flex-shrink-0 w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/3 snap-start">
                    <img
                      src={`/images/${encodeURI("PARAVOOR HOTEL")}/${encodeURI(name)}`}
                      alt={`Grand Muziris ${idx + 1}`}
                      className="w-full h-72 md:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
                      loading="lazy"
                      onError={(e) => {
                        // eslint-disable-next-line no-console
                        console.warn("Failed to load Grand Muziris image:", e.currentTarget.src);
                        e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="%23ddd"/><text x="50%" y="50%" fill="%23666" font-size="24" text-anchor="middle" dominant-baseline="middle">Image not available</text></svg>';
                      }}
                    />
                  </div>
                ))}
              </div>

              <button
                aria-label="Next"
                onClick={() => {
                  const el = gmScrollRef.current;
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

      {/* Amenities Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            Experience Luxury & Tradition
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Grand Muziris seamlessly blends Kerala's rich cultural heritage with contemporary luxury for discerning travelers.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                <amenity.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{amenity.title}</h3>
                <p className="text-muted-foreground">{amenity.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Room Categories */}
      

      {/* Vision & Mission removed per request */}

      {/* Other Businesses */}
      <OtherBusinesses currentPath="/grand-muziris" />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Experience Grand Muziris Hospitality
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Book your stay and discover why Grand Muziris is Kerala's preferred luxury destination.
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

export default GrandMuziris;