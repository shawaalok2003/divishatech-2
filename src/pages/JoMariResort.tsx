import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OtherBusinesses from "@/components/OtherBusinesses";
import { Waves, Dumbbell, Leaf, Utensils } from "lucide-react";

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

      {/* Resort Images */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1753898464732-85e0f3df8a53?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw0fHx3ZWxsbmVzcyUyMHJlc29ydHxlbnwwfHx8fDE3NjIzOTg4MTN8MA&ixlib=rb-4.1.0&q=85"
              alt="Resort Exterior"
              className="w-full h-72 object-cover rounded-2xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800"
              alt="Wellness Center"
              className="w-full h-72 object-cover rounded-2xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800"
              alt="Yoga Sessions"
              className="w-full h-72 object-cover rounded-2xl shadow-lg"
            />
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