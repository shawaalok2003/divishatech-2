import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OtherBusinesses from "@/components/OtherBusinesses";
import VisionMission from "@/components/VisionMission";
import { useState, useEffect, useRef } from "react";
import { Leaf, TreePine, Droplets, Sprout } from "lucide-react";

const VKDPlantations = () => {
  const initiatives = [
    {
      icon: TreePine,
      title: "Sustainable Farming",
      description: "Eco-friendly agricultural practices that preserve soil health and biodiversity.",
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Rainwater harvesting and efficient irrigation systems for sustainable water use.",
    },
    {
      icon: Leaf,
      title: "Biodiversity Focus",
      description: "Protecting local ecosystems while cultivating profitable crops.",
    },
    {
      icon: Sprout,
      title: "Organic Methods",
      description: "Natural farming techniques without harmful chemicals or pesticides.",
    },
  ];

  // Carousel images from public folder
  const plantationImages = [
    "Entry .jpg",
    "PABN0499.jpg",
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
    "nutmeg’s .jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ref for the horizontal scroll carousel container
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % plantationImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, [plantationImages.length]);

  // (Grid removed) — carousel only below. If you need a scroll-animated grid, I can restore it.

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-secondary to-dark-green">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground text-lg px-6 py-2">
              Agriculture Division
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              VKD Plantations Pvt. Ltd.
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Committed to sustainable farming and biodiversity-focused plantations. Growing prosperity while protecting our planet.
            </p>
          </div>
        </div>
      </section>

      {/* (Grid removed) showing carousel only below */}

      {/* Carousel showing 3 images per view (horizontal scroll) */}
      <section className="py-12 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto relative">
            <div className="flex items-center">
              <button
                aria-label="Previous"
                onClick={() => {
                  const el = scrollRef.current;
                  if (el) el.scrollBy({ left: -el.clientWidth, behavior: 'smooth' });
                }}
                className="hidden md:inline-flex items-center justify-center bg-black/40 text-white p-2 rounded-full hover:bg-black/60 mr-3"
              >
                ‹
              </button>

              <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
                style={{ scrollSnapType: 'x mandatory' }}
              >
                {plantationImages.map((name, idx) => (
                  <div
                    key={name}
                    className="flex-shrink-0 w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/3 snap-start"
                  >
                    <img
                      src={`/images/plantation/${encodeURI(name)}`}
                      alt={`Plantation ${idx + 1}`}
                      className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
                      loading="lazy"
                      onError={(e) => {
                        // eslint-disable-next-line no-console
                        console.warn('Failed to load image:', e.currentTarget.src);
                        // fallback to a simple SVG placeholder
                        e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="%23ddd"/><text x="50%" y="50%" fill="%23666" font-size="24" text-anchor="middle" dominant-baseline="middle">Image not available</text></svg>';
                      }}
                    />
                  </div>
                ))}
              </div>

              <button
                aria-label="Next"
                onClick={() => {
                  const el = scrollRef.current;
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

      {/* Initiatives Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            Our Sustainable Approach
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            VKD Plantations combines traditional wisdom with modern sustainable practices to create thriving agricultural ecosystems.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                <initiative.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{initiative.title}</h3>
                <p className="text-muted-foreground">{initiative.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Crops Section */}
      

      {/* Impact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Environmental & Social Impact
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our plantations are more than just farms—they're ecosystems that support local communities and protect the environment.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">Carbon sequestration through extensive tree plantation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">Employment for local communities with fair wages</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">Wildlife habitat preservation in plantation areas</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">Zero-waste farming with composting and recycling</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center bg-primary text-primary-foreground">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sm">Acres Under Cultivation</div>
              </Card>
              
              <Card className="p-6 text-center bg-accent text-accent-foreground">
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-sm">Trees Planted</div>
              </Card>
              
            </div>
          </div>
        </div>
      </section>

      {/* Other Businesses */}
      <OtherBusinesses currentPath="/vkd-plantations" />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Partner in Sustainable Agriculture
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join us in creating a greener future through responsible plantation management.
          </p>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full">
            Get in Touch
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default VKDPlantations;