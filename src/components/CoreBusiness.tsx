import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Leaf, Smartphone, Recycle, Shield } from "lucide-react";

const CoreBusiness = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Tech-Driven Supply Chain",
      description:
        "Leveraging technology to create efficient, transparent, and reliable supply chains that connect farmers directly to businesses.",
    },
    {
      icon: Users,
      title: "Farmer Empowerment",
      description:
        "Ensuring fair prices and sustainable partnerships with farmers through direct sourcing and ethical trade practices.",
    },
    {
      icon: Leaf,
      title: "Consistency & Freshness",
      description:
        "Maintaining the highest standards of quality and freshness from farm to table through cold chain logistics and quality control.",
    },
    {
      icon: Smartphone,
      title: "Digital Accessibility",
      description:
        "Making wholesale markets accessible to retailers through user-friendly digital platforms and real-time inventory management.",
    },
    {
      icon: Recycle,
      title: "Sustainability",
      description:
        "Committed to sustainable farming, eco-friendly operations, and practices that protect the environment for future generations.",
    },
    {
      icon: Shield,
      title: "Transparency",
      description:
        "Building trust through transparent pricing, clear communication, and reliable service across all business verticals.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Core Business Focus
          </h2>
          <p className="text-lg text-muted-foreground">
            VKD Group is transforming Kerala's vegetable market ecosystem through technology,
            sustainability, and farmer empowerment. We're building transparent supply chains that
            benefit everyone from farmers to consumers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all hover:scale-105 duration-300 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreBusiness;