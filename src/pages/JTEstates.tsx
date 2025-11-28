import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OtherBusinesses from "@/components/OtherBusinesses";
import VisionMission from "@/components/VisionMission";
import { Building, Home, TrendingUp, Shield } from "lucide-react";

const JTEstates = () => {
  const features = [
    {
      icon: Building,
      title: "Commercial Projects",
      description: "Strategic commercial spaces designed for business growth and success.",
    },
    {
      icon: Home,
      title: "Residential Properties",
      description: "Modern homes built with quality materials and thoughtful design.",
    },
    {
      icon: TrendingUp,
      title: "Smart Infrastructure",
      description: "Future-ready properties with sustainable and smart building features.",
    },
    {
      icon: Shield,
      title: "Trusted Developer",
      description: "Transparent dealings, on-time delivery, and post-sales support.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-green to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground text-lg px-6 py-2">
              Real Estate Division
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              JT Estates
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Building smart, sustainable commercial and residential real estate projects that shape Kerala's future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full">
                View Projects
              </Button>
              <Button variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 rounded-full">
                Schedule Site Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1621831337128-35676ca30868?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzYyMzk4ODk4fDA&ixlib=rb-4.1.0&q=85"
              alt="Commercial Building"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800"
              alt="Residential Complex"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            Building Tomorrow's Landmarks
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            JT Estates is committed to creating properties that combine modern design, sustainability, and smart infrastructure.
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

      {/* Projects Section */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
                alt="JT Plaza"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <Badge className="mb-3 bg-primary text-primary-foreground">Commercial</Badge>
                <h3 className="text-2xl font-bold text-foreground mb-2">JT Business Plaza</h3>
                <p className="text-muted-foreground mb-4">
                  Premium commercial complex with modern office spaces, retail outlets, and ample parking.
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• 5-floor commercial building</li>
                  <li>• High-speed elevators</li>
                  <li>• 24/7 security & maintenance</li>
                  <li>• Prime location connectivity</li>
                </ul>
                <Button className="w-full" variant="outline">Learn More</Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow border-2 border-primary">
              <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground z-10">New Launch</Badge>
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"
                alt="JT Residency"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <Badge className="mb-3 bg-primary text-primary-foreground">Residential</Badge>
                <h3 className="text-2xl font-bold text-foreground mb-2">JT Luxury Residency</h3>
                <p className="text-muted-foreground mb-4">
                  Contemporary apartments with smart home features, landscaped gardens, and community amenities.
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• 2BHK & 3BHK apartments</li>
                  <li>• Smart home automation</li>
                  <li>• Club house & gym</li>
                  <li>• Rainwater harvesting</li>
                </ul>
                <Button className="w-full bg-primary text-primary-foreground">Learn More</Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
                alt="JT Smart Homes"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <Badge className="mb-3 bg-primary text-primary-foreground">Villas</Badge>
                <h3 className="text-2xl font-bold text-foreground mb-2">JT Smart Villas</h3>
                <p className="text-muted-foreground mb-4">
                  Luxury villas with private gardens, solar power, and eco-friendly construction materials.
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Independent villas</li>
                  <li>• Solar power systems</li>
                  <li>• Private gardens</li>
                  <li>• Sustainable design</li>
                </ul>
                <Button className="w-full" variant="outline">Learn More</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">Why Choose JT Estates</h2>
            <p className="text-lg text-muted-foreground mb-6">
              With a commitment to quality, transparency, and customer satisfaction, JT Estates has become a trusted name in Kerala's real estate market.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Quality Construction</h3>
                <p className="text-muted-foreground">
                  We use premium materials and follow stringent quality standards at every stage of construction.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">On-Time Delivery</h3>
                <p className="text-muted-foreground">
                  Our projects are completed within promised timelines with regular progress updates to buyers.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Legal Compliance</h3>
                <p className="text-muted-foreground">
                  All properties are fully compliant with legal regulations and come with clear documentation.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">After-Sales Support</h3>
                <p className="text-muted-foreground">
                  We provide comprehensive maintenance support and address concerns even after possession.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      

      {/* Other Businesses */}
      <OtherBusinesses currentPath="/jt-estates" />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Invest in Your Future
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Discover prime real estate opportunities with JT Estates. Your dream property awaits.
          </p>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full">
            Contact Our Team
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default JTEstates;