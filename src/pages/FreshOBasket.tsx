import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OtherBusinesses from "@/components/OtherBusinesses";
import { Store, Award, Heart, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FreshOBasket = () => {
  const features = [
    {
      icon: Store,
      title: "Premium Retail",
      description: "Curated selection of exotic and local fresh vegetables in a modern setting.",
    },
    {
      icon: Award,
      title: "Quality Standards",
      description: "Every product meets our strict quality and freshness criteria.",
    },
    {
      icon: Heart,
      title: "Health Focused",
      description: "Organic options and nutritionally rich produce for healthy living.",
    },
    {
      icon: Sparkles,
      title: "Shopping Experience",
      description: "Pleasant, hygienic, and customer-friendly supermarket environment.",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-accent/20 via-primary/10 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary text-primary-foreground text-lg px-6 py-2">
              Retail Division
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              VKD Fresh O Basket
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your neighborhood premium supermarket for exotic and fresh vegetables. Experience quality produce in a modern shopping environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full">
                Visit Store
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 rounded-full">
                View Locations
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Store Images */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1609126986933-e3c84f19d49c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MHx8fHwxNzYyMzk4ODA0fDA&ixlib=rb-4.1.0&q=85"
              alt="Fresh O Basket Store"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1579113800032-c38bd7635818?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MHx8fHwxNzYyMzk4ODA0fDA&ixlib=rb-4.1.0&q=85"
              alt="Premium Vegetables"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Why Shop at Fresh O Basket
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

      {/* Product Categories */}
      

      {/* Vision & Mission removed per request */}

      {/* Other Businesses */}
      <OtherBusinesses currentPath="/fresh-o-basket" />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Visit Us Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Experience premium shopping at Fresh O Basket. Fresh produce, exceptional quality, unbeatable prices.
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

export default FreshOBasket;