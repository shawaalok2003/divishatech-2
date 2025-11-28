import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OtherBusinesses from "@/components/OtherBusinesses";
import VisionMission from "@/components/VisionMission";
import { Truck, Leaf, Users, CheckCircle } from "lucide-react";

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

      {/* Image Gallery */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1579113800032-c38bd7635818?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MHx8fHwxNzYyMzk4ODA0fDA&ixlib=rb-4.1.0&q=85"
              alt="Fresh Vegetables"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MHx8fHwxNzYyMzk4ODA0fDA&ixlib=rb-4.1.0&q=85"
              alt="Vegetable Supply"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1609126986933-e3c84f19d49c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MHx8fHwxNzYyMzk4ODA0fDA&ixlib=rb-4.1.0&q=85"
              alt="Wholesale Distribution"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
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
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">About Our Business</h2>
            <p className="text-lg text-muted-foreground mb-4">
              VKD Vegetables & Wholesale is the foundation of VKD Group's agricultural division. We supply fresh, high-quality produce to businesses across Kerala, from restaurants and hotels to retail stores and catering services.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Our extensive network of farmers ensures consistent supply throughout the year. We've built a reputation for reliability, quality, and fair pricing that benefits both farmers and businesses.
            </p>
            <p className="text-lg text-muted-foreground">
              With cold chain logistics and quality control at every step, we guarantee the freshest vegetables reach your doorstep, helping your business maintain the highest standards.
            </p>
          </div>
        </div>
      </section>

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
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full">
            Contact Sales Team
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default VegetablesWholesale;