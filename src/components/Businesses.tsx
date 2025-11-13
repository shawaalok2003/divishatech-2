import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Businesses = () => {
  const businesses = [
    {
      image:
        "https://images.unsplash.com/photo-1579113800032-c38bd7635818?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MHx8fHwxNzYyMzk4ODA0fDA&ixlib=rb-4.1.0&q=85",
      category: "Agriculture",
      name: "VKD Vegetables & Wholesale",
      description: "Supplying fresh produce with reliable sourcing and efficient logistics.",
      path: "/vegetables-wholesale",
    },
    {
      image:
        "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MHx8fHwxNzYyMzk4ODA0fDA&ixlib=rb-4.1.0&q=85",
      category: "Technology",
      name: "VKD Fresh Cart",
      description: "Online B2B wholesale platform connecting farmers and businesses.",
      path: "/fresh-cart",
    },
    {
      image:
        "https://images.unsplash.com/photo-1609126986933-e3c84f19d49c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MHx8fHwxNzYyMzk4ODA0fDA&ixlib=rb-4.1.0&q=85",
      category: "Retail",
      name: "VKD Fresh O Basket",
      description: "Premium supermarket for exotic and fresh vegetables.",
      path: "/fresh-o-basket",
    },
    {
      image:
        "https://images.unsplash.com/photo-1753898464732-85e0f3df8a53?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw0fHx3ZWxsbmVzcyUyMHJlc29ydHxlbnwwfHx8fDE3NjIzOTg4MTN8MA&ixlib=rb-4.1.0&q=85",
      category: "Hospitality",
      name: "Jo Mari Heaven Resort",
      description: "Wellness retreat offering yoga, spa therapies, and organic dining.",
      path: "/jo-mari-resort",
    },
    {
      image:
        "https://images.unsplash.com/photo-1561501900-3701fa6a0864?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbHxlbnwwfHx8fDE3NjIzOTg4OTB8MA&ixlib=rb-4.1.0&q=85",
      category: "Hospitality",
      name: "Grand Muziris Hotel",
      description: "Blending tradition and modern luxury for travelers.",
      path: "/grand-muziris",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBob3RlbHxlbnwwfHx8fDE3NjIzOTg4OTB8MA&ixlib=rb-4.1.0&q=85",
      category: "Hospitality",
      name: "SRM Hotels Coimbatore",
      description: "Business and family hotel with fine dining and event spaces.",
      path: "/srm-hotels",
    },
    {
      image:
        "https://images.unsplash.com/photo-1621831337128-35676ca30868?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzYyMzk4ODk4fDA&ixlib=rb-4.1.0&q=85",
      category: "Real Estate",
      name: "JT Estates",
      description: "Smart, sustainable commercial and residential real estate projects.",
      path: "/jt-estates",
    },
    {
      image:
        "https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHx0ZWElMjBwbGFudGF0aW9ufGVufDB8fHx8MTc2MjM5ODkyMHww&ixlib=rb-4.1.0&q=85",
      category: "Agriculture",
      name: "VKD Plantations Pvt. Ltd.",
      description: "Sustainable farming and biodiversity-focused plantations.",
      path: "/vkd-plantations",
    },
  ];

  return (
    <section id="businesses" className="py-24 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Group of Companies
          </h2>
          <p className="text-lg text-muted-foreground">
            VKD Group operates across multiple sectors, each business driven by innovation,
            sustainability, and a commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {businesses.map((business, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <img
                src={business.image}
                alt={business.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <Badge className="mb-3 bg-primary text-primary-foreground">
                  {business.category}
                </Badge>
                <h3 className="text-xl font-bold text-foreground mb-2">{business.name}</h3>
                <p className="text-muted-foreground mb-4">{business.description}</p>
                <Link to={business.path}>
                  <Button variant="link" className="p-0 text-primary h-auto font-semibold">
                    Learn More →
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Businesses;