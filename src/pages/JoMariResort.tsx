import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OtherBusinesses from "@/components/OtherBusinesses";
import { Waves, Dumbbell, Leaf, Utensils } from "lucide-react";
import { useRef, useEffect } from "react";

const JoMariResort = () => {
  const amenities = [
    {
      icon: Waves,
      title: "Yoga & Meditation",
      description: "Daily yoga sessions and guided meditation in serene natural surroundings.",
    },
    {
      icon: Dumbbell,
      title: "Spa & Wellness",
      description: "Traditional Ayurvedic treatments and modern spa therapies for rejuvenation.",
    },
    {
      icon: Leaf,
      title: "Nature Retreat",
      description: "Peaceful environment surrounded by lush greenery and tranquil landscapes.",
    },
    {
      icon: Utensils,
      title: "Organic Dining",
      description: "Farm-to-table organic meals prepared with fresh local ingredients.",
    },
  ];

  const joMariImages = [
    "Cover photo .jpg",
    "PABN0587.jpg",
    "PABN0591.jpg",
    "PABN0600.jpg",
    "PABN0603.jpg",
    "PABN0610.jpg",
    "PABN0611.jpg",
    "PABN0615.jpg",
    "PABN0634.jpg",
    "PABN0637.jpg",
    "PABN0639.jpg",
    "PABN0652.jpg",
  ];

  const joMariScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = joMariScrollRef.current;
    if (!el) return;
    const iv = setInterval(() => {
      const container = joMariScrollRef.current;
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary text-primary-foreground text-lg px-6 py-2">
              Hospitality Division
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Jo Mari Heaven Resort
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your wellness retreat offering yoga, spa therapies, and organic dining. Escape to paradise and rejuvenate your mind, body, and soul.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full">
                Book Your Stay
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 rounded-full">
                Explore Packages
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resort Images (carousel using PARAVOOR HOTEL images) */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto relative">
            <div className="flex items-center">
              <button
                aria-label="Previous"
                onClick={() => {
                  const el = joMariScrollRef.current;
                  if (el) el.scrollBy({ left: -el.clientWidth, behavior: "smooth" });
                }}
                className="hidden md:inline-flex items-center justify-center bg-black/40 text-white p-2 rounded-full hover:bg-black/60 mr-3"
              >
                ‹
              </button>

              <div
                ref={joMariScrollRef}
                className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
                style={{ scrollSnapType: "x mandatory" }}
              >
                {joMariImages.map((name, idx) => (
                  <div key={name} className="flex-shrink-0 w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/3 snap-start">
                    <img
                      src={`/images/${encodeURI("ILLITHODE RESORT")}/${encodeURI(name)}`}
                      alt={`Jo Mari Resort ${idx + 1}`}
                      className="w-full h-72 md:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
                      loading="lazy"
                      onError={(e) => {
                        // eslint-disable-next-line no-console
                        console.warn("Failed to load JoMari image:", e.currentTarget.src);
                        e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="%23ddd"/><text x="50%" y="50%" fill="%23666" font-size="24" text-anchor="middle" dominant-baseline="middle">Image not available</text></svg>';
                      }}
                    />
                  </div>
                ))}
              </div>

              <button
                aria-label="Next"
                onClick={() => {
                  const el = joMariScrollRef.current;
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
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            Wellness & Rejuvenation
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Immerse yourself in a holistic wellness experience designed to restore balance and vitality.
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

      {/* Packages Section */}
      

      {/* Vision & Mission removed per request */}

      {/* Other Businesses */}
      <OtherBusinesses currentPath="/jo-mari-resort" />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Begin Your Wellness Journey
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Transform your life with a rejuvenating retreat at Jo Mari Heaven Resort.
          </p>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full">
            Reserve Now
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default JoMariResort;