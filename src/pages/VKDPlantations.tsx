import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OtherBusinesses from "@/components/OtherBusinesses";
import VisionMission from "@/components/VisionMission";
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

      {/* Plantation Images */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHx0ZWElMjBwbGFudGF0aW9ufGVufDB8fHx8MTc2MjM5ODkyMHww&ixlib=rb-4.1.0&q=85"
              alt="Tea Plantation"
              className="w-full h-72 object-cover rounded-2xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800"
              alt="Sustainable Farming"
              className="w-full h-72 object-cover rounded-2xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800"
              alt="Natural Landscape"
              className="w-full h-72 object-cover rounded-2xl shadow-lg"
            />
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
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-sm">Local Employees</div>
              </Card>
              <Card className="p-6 text-center bg-accent text-accent-foreground">
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-sm">Trees Planted</div>
              </Card>
              <Card className="p-6 text-center bg-primary text-primary-foreground">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm">Organic Certified</div>
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