import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OtherBusinesses from "@/components/OtherBusinesses";
import { Hotel, Wifi, Car, Coffee } from "lucide-react";

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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full">
                Book Your Stay
              </Button>
              <Button variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 rounded-full">
                Virtual Tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Images */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbHxlbnwwfHx8fDE3NjIzOTg4OTB8MA&ixlib=rb-4.1.0&q=85"
              alt="Grand Muziris Exterior"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBob3RlbHxlbnwwfHx8fDE3NjIzOTg4OTB8MA&ixlib=rb-4.1.0&q=85"
              alt="Luxury Suite"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
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
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full">
            Check Availability
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GrandMuziris;