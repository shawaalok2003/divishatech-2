import { Card } from "@/components/ui/card";
import { TrendingUp, Store, Hotel, Leaf } from "lucide-react";

const Future = () => {
  const initiatives = [
    {
      icon: TrendingUp,
      title: "Expanding VKD Fresh Cart Statewide",
      description:
        "Scaling our B2B digital platform to reach every district in Kerala, connecting more farmers and businesses through technology.",
    },
    {
      icon: Store,
      title: "VKD Fresh O Basket in Major Cities",
      description:
        "Opening premium retail supermarkets in key urban centers across South India, bringing exotic and organic produce to more consumers.",
    },
    {
      icon: Hotel,
      title: "Growing Eco-Luxury Hospitality",
      description:
        "Expanding our wellness resort and hotel ventures with a focus on sustainable tourism and authentic Kerala experiences.",
    },
    {
      icon: Leaf,
      title: "Strengthening Plantation Exports",
      description:
        "Enhancing our sustainable plantation operations and building export capabilities for organic spices, tea, and coffee to international markets.",
    },
  ];

  return (
    <section className="py-24 bg-hero-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Building Tomorrow, Today
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Sustainability. Innovation. Growth. The VKD Way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => (
            <Card key={index} className="p-8 bg-card/95 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <initiative.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{initiative.title}</h3>
              <p className="text-muted-foreground">{initiative.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Future;