import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OtherBusinesses from "@/components/OtherBusinesses";
import { Smartphone, ShoppingCart, TrendingUp, Clock } from "lucide-react";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FreshCart = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Digital Platform",
      description: "User-friendly mobile and web interface for seamless ordering experience.",
    },
    {
      icon: ShoppingCart,
      title: "B2B Marketplace",
      description: "Connect directly with farmers and suppliers for competitive wholesale prices.",
    },
    {
      icon: TrendingUp,
      title: "Real-Time Pricing",
      description: "Live market prices and inventory updates for informed purchasing decisions.",
    },
    {
      icon: Clock,
      title: "24/7 Ordering",
      description: "Place orders anytime, anywhere with flexible delivery scheduling.",
    },
  ];

  const marketImages = [
    "market cover photo.jpg",
    "PABN0519.jpg",
    "PABN0524.jpg",
    "PABN0533.jpg",
    "PABN0538.jpg",
    "PABN0543.jpg",
    "PABN0552.jpg",
    "PABN0553.jpg",
    "PABN0559.jpg",
    "PABN0571.jpg",
    "PABN0576.jpg",
    "PABN0580.jpg",
  ];

  const marketScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = marketScrollRef.current;
    if (!el) return;
    const iv = setInterval(() => {
      const container = marketScrollRef.current;
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-dark-green to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground text-lg px-6 py-2">
              Technology Division
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              VKD Fresh Cart
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Revolutionary B2B wholesale platform connecting farmers directly to businesses. Experience the future of agricultural commerce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://vkdfreshcart.com/LoginControl" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full">
                  Start Ordering
                </Button>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.app.vkdfreshcart" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 rounded-full">
                  Start Ordering (App)
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Preview (market images carousel) */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto relative">
            <div className="flex items-center">
              <button
                aria-label="Previous"
                onClick={() => {
                  const el = marketScrollRef.current;
                  if (el) el.scrollBy({ left: -el.clientWidth, behavior: "smooth" });
                }}
                className="hidden md:inline-flex items-center justify-center bg-black/40 text-white p-2 rounded-full hover:bg-black/60 mr-3"
              >
                ‹
              </button>

              <div
                ref={marketScrollRef}
                className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
                style={{ scrollSnapType: "x mandatory" }}
              >
                {marketImages.map((name, idx) => (
                  <div key={name} className="flex-shrink-0 w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/3 snap-start">
                    <img
                      src={`/images/${encodeURI("MARKET")}/${encodeURI(name)}`}
                      alt={`Market ${idx + 1}`}
                      className="w-full h-72 md:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
                      loading="lazy"
                      onError={(e) => {
                        // eslint-disable-next-line no-console
                        console.warn("Failed to load market image:", e.currentTarget.src);
                        e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="%23ddd"/><text x="50%" y="50%" fill="%23666" font-size="24" text-anchor="middle" dominant-baseline="middle">Image not available</text></svg>';
                      }}
                    />
                  </div>
                ))}
              </div>

              <button
                aria-label="Next"
                onClick={() => {
                  const el = marketScrollRef.current;
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
            Revolutionizing Wholesale Commerce
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            VKD Fresh Cart eliminates middlemen, reduces costs, and brings transparency to the agricultural supply chain through cutting-edge technology.
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

      {/* Benefits Section */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Built for Modern Businesses
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Fresh Cart is designed for retailers, restaurants, hotels, and catering businesses who need reliable, fresh produce at competitive prices.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">Direct farmer connections eliminate middlemen costs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">Transparent pricing with real-time market rates</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">Quality assurance with track and trace capabilities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">Flexible payment options and credit facilities</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center bg-primary text-primary-foreground">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sm">Active Businesses</div>
              </Card>
              <Card className="p-6 text-center bg-accent text-accent-foreground">
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-sm">Farmer Partners</div>
              </Card>
              <Card className="p-6 text-center bg-accent text-accent-foreground">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-sm">Product Varieties</div>
              </Card>
              <Card className="p-6 text-center bg-primary text-primary-foreground">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm">Platform Access</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission removed per request */}

      {/* Other Businesses */}
      <OtherBusinesses currentPath="/fresh-cart" />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Join the Digital Wholesale Revolution
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Experience smarter sourcing, better prices, and seamless ordering with VKD Fresh Cart.
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

export default FreshCart;