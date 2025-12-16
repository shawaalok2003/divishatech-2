import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Businesses = () => {
  const businesses = [
    {
      image: "/images/MARKET/market cover photo.jpg",
      category: "Agriculture",
      name: "VKD Vegetables & Wholesale",
      description: "Supplying fresh produce with reliable sourcing and efficient logistics.",
      path: "/vegetables-wholesale",
    },
    {
      image: "/images/KALADY OFFICE (1)/Office cover photo .jpg",
      category: "Technology",
      name: "VKD Fresh Cart",
      description: "Online B2B wholesale platform connecting farmers and businesses.",
      path: "/fresh-cart",
    },
    {
      image: "https://images.unsplash.com/photo-1609126986933-e3c84f19d49c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MHx8fHwxNzYyMzk4ODA0fDA&ixlib=rb-4.1.0&q=85",
      category: "Retail",
      name: "VKD Fresh O Basket",
      description: "Premium supermarket for exotic and fresh vegetables.",
      path: "/fresh-o-basket",
    },
    {
      image: "/images/JO/Cover photo _compressed.jpeg",
      category: "Hospitality",
      name: "Jo Mari Heaven Resort",
      description: "Wellness retreat offering yoga, spa therapies, and organic dining.",
      path: "/jo-mari-resort",
    },
    {
      image: "/images/PARAVOOR HOTEL/cover photo muziris__compressed.jpeg",
      category: "Hospitality",
      name: "Grand Muziris Hotel",
      description: "Blending tradition and modern luxury for travelers.",
      path: "/grand-muziris",
    },
    {
      image: "/images/SRM HOTEL/Cover photo CBE Hotel .jpg",
      category: "Hospitality",
      name: "SRM Hotels Coimbatore",
      description: "Business and family hotel with fine dining and event spaces.",
      path: "/srm-hotels",
    },
    {
      image: "/images/ILLITHODE RESORT/Cover photo .jpg",
      category: "Real Estate",
      name: "JT Estates",
      description: "Smart, sustainable commercial and residential real estate projects.",
      path: "/jt-estates",
    },
    {
      image: "/images/plantation/Cover photo .jpg",
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