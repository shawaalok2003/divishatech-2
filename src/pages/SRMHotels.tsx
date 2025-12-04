import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OtherBusinesses from "@/components/OtherBusinesses";
import { Building2, Users2, Utensils, Briefcase } from "lucide-react";
import { useRef, useEffect } from "react";

const SRMHotels = () => {
  const facilities = [
    {
      icon: Building2,
      title: "Modern Rooms",
      description: "Well-appointed rooms designed for both business and leisure travelers.",
    },
    {
      icon: Users2,
      title: "Event Spaces",
      description: "State-of-the-art conference halls and banquet facilities for all occasions.",
    },
    {
      icon: Utensils,
      title: "Fine Dining",
      description: "Multi-cuisine restaurants serving delectable local and international dishes.",
    },
    {
      icon: Briefcase,
      title: "Business Center",
      description: "Fully-equipped business facilities with meeting rooms and secretarial services.",
    },
  ];

  const srmImages = [
    "Cover photo CBE Hotel .jpg",
    "IMG_8913.jpg",
    "IMG_8924.jpg",
    "IMG_8925.jpg",
    "IMG_8932.jpg",
    "IMG_8934.jpg",
    "IMG_8937.jpg",
    "IMG_8944.jpg",
    "IMG_8947.jpg",
    "IMG_8955.jpg",
    "IMG_8960.jpg",
    "IMG_8965.jpg",
  ];

  const srmScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = srmScrollRef.current;
    if (!el) return;
    const iv = setInterval(() => {
      const container = srmScrollRef.current;
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary via-primary to-dark-green">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground text-lg px-6 py-2">
              Hospitality Division
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              SRM Hotels Coimbatore
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Premier business and family hotel offering comfortable stays, fine dining, and exceptional event spaces in the heart of Coimbatore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.oyorooms.com/107442/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full">
                  Book Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Images */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto relative">
            <div className="flex items-center">
              <button
                aria-label="Previous"
                onClick={() => {
                  const el = srmScrollRef.current;
                  if (el) el.scrollBy({ left: -el.clientWidth, behavior: "smooth" });
                }}
                className="hidden md:inline-flex items-center justify-center bg-black/40 text-white p-2 rounded-full hover:bg-black/60 mr-3"
              >
                ‹
              </button>

              <div
                ref={srmScrollRef}
                className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
                style={{ scrollSnapType: "x mandatory" }}
              >
                {srmImages.map((name, idx) => (
                  <div key={name} className="flex-shrink-0 w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/3 snap-start">
                    <img
                      src={`/images/${encodeURI("SRM HOTEL")}/${encodeURI(name)}`}
                      alt={`SRM Hotel ${idx + 1}`}
                      className="w-full h-72 md:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
                      loading="lazy"
                      onError={(e) => {
                        // eslint-disable-next-line no-console
                        console.warn("Failed to load SRM image:", e.currentTarget.src);
                        e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="%23ddd"/><text x="50%" y="50%" fill="%23666" font-size="24" text-anchor="middle" dominant-baseline="middle">Image not available</text></svg>';
                      }}
                    />
                  </div>
                ))}
              </div>

              <button
                aria-label="Next"
                onClick={() => {
                  const el = srmScrollRef.current;
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


      {/* Facilities Section */}
      

      {/* Services Section */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Corporate Events & Conferences
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Host successful business events in our modern conference facilities equipped with the latest technology and professional support services.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">Conference halls with seating up to 500 guests</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">Audio-visual equipment and IT support</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">Catering services with customizable menus</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">Dedicated event coordination team</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Weddings & Celebrations
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Create unforgettable memories with our elegant banquet halls and comprehensive wedding planning services.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">Spacious banquet halls with elegant decor</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">Customized wedding packages and menus</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">Professional event planning and coordination</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">Accommodation packages for guests</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      

      {/* Other Businesses */}
      <OtherBusinesses currentPath="/srm-hotels" />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Plan Your Stay or Event
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Whether for business or celebration, SRM Hotels provides the perfect venue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full">
              Book Rooms
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SRMHotels;