import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const OurJourney = () => {
  const navigate = useNavigate();

  const milestones = [
    {
      year: "1975",
      title: "The Beginning",
      description: "VP Thankachan finished his SSLC and stepped into the business world with determination and a vision to build something meaningful.",
    },
    {
      year: "Two Generations",
      title: "Retail Foundation",
      description: "The family operated a small vegetable shop, serving retail customers with dedication and quality.",
    },
    {
      year: "1982",
      title: "Expansion Vision",
      description: "VP Thankachan travelled across Tamil Nadu and Karnataka, meeting farmers, visiting farms and markets to understand the vegetable trade from grassroots level.",
    },
    {
      year: "1982-1997",
      title: "Wholesale Growth",
      description: "Transitioned from retail to full-load sourcing, supplying vegetables at wholesale rates across Kerala to major markets in Thrissur, Ernakulam, Palakkad, and Kottayam.",
    },
    {
      year: "Key Insight",
      title: "Problem Identified",
      description: "Recognized the supply chain's biggest problem: too many middlemen controlling prices, quality, and credit issues.",
    },
    {
      year: "Transformation",
      title: "Eliminating Middlemen",
      description: "Pioneered removing intermediaries from the vegetable trade, aiming to give customers the best rates and quality through direct sourcing and fair pricing.",
    },
    {
      year: "Birth of VKD",
      title: "Our Wholesale Markets",
      description: "Established VKD Vegetables wholesale markets across Kalady, Angamaly, Aluva, Maradu, Paravur, Kottapuram, and Kothamangalam with transparency and fair pricing.",
    },
    {
      year: "Expansion",
      title: "Beyond Vegetables",
      description: "Ventured into real estate and hospitality sectors, expanding the vision beyond vegetables and creating new opportunities for the next generation.",
    },
    {
      year: "Today",
      title: "Legacy Continues",
      description: "Carrying forward nearly five decades of experience, resilience, honesty, and deep understanding of the trade with the same courage and values.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-dark-green to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground text-lg px-6 py-2">
              Our Story
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Our Journey
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              From a small vegetable shop to a diversified business empire spanning nearly five decades of growth, resilience, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Narrative */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl border border-primary/20">
                <p className="text-lg text-foreground leading-relaxed font-medium">
                  VP Thankachan finished his SSLC and stepped straight into the world of business, driven by determination and a desire to build something meaningful. He started this venture 49 years ago, laying the foundation with hard work, discipline, and a clear vision.
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                For two generations, our family operated a small vegetable shop, serving only retail customers. But VP Thankachan always believed the business had the potential to grow far beyond its beginnings.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                In 1982, guided by his passion to expand, he travelled across Tamil Nadu and Karnataka. He met farmers, visited farms and markets, and understood the vegetable trade from the grassroots level. With this deep knowledge, he moved from simple retail selling to full-load sourcing, supplying vegetables at effective wholesale rates across Kerala.
              </p>

              <div className="bg-accent/10 p-8 rounded-2xl border border-accent/30">
                <p className="text-lg text-foreground leading-relaxed">
                  In the first 15 years, VP Thankachan worked as an intermediary agent, supplying vegetables to major markets across Thrissur, Ernakulam, Palakkad, and Kottayam. During this time, he deeply understood how the supply chain worked — and also saw its biggest problem: too many middlemen controlling prices, quality, and credit issues.
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                With his strong vision, he wanted to change this system. He became one of the first in Kerala to think about removing intermediaries from the vegetable trade. His goal was simple yet powerful: give customers the best rates and the best quality by eliminating the middleman.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                This vision eventually led him to start his own wholesale markets, where he could source directly, price fairly, and maintain high quality — setting a new standard in the industry. He realised that the best way forward was to create his own markets, where business could run with transparency, fair pricing, and timely transactions.
              </p>

              <div className="bg-gradient-to-r from-dark-green/10 to-primary/10 p-8 rounded-2xl border border-primary/20">
                <p className="text-lg text-foreground leading-relaxed font-semibold">
                  This vision led to the birth of his own wholesale brand spread across different markets as VKD Vegetables: Kalady, Angamaly, Aluva, Maradu, Paravur, Kottapuram, and Kothamangalam — a brand built on nearly five decades of experience, resilience, honesty, and a deep understanding of the vegetable trade.
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                And as VKD grew stronger, he later ventured into the real estate and hospitality sector, expanding his vision beyond the vegetable industry and creating new opportunities for the next generation.
              </p>

              <div className="bg-primary/5 p-8 rounded-2xl border-l-4 border-primary">
                <p className="text-2xl text-black font-bold leading-relaxed">
                  Today, we carry forward the legacy he started — with the same courage, the same values, and the same commitment to growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline/Milestones Section */}
      <section className="py-24 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-foreground mb-4">
                Key Milestones
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            </div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex gap-8 items-start group">
                  {/* Timeline connector line (vertical) */}
                  {index < milestones.length - 1 && (
                    <div className="absolute left-10 top-24 w-1 h-20 bg-gradient-to-b from-primary to-accent/30"></div>
                  )}
                  
                  {/* Year circle */}
                  <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center font-bold text-center p-3 shadow-lg group-hover:shadow-xl transition-shadow">
                    <span className="text-sm leading-tight">{milestone.year}</span>
                  </div>

                  {/* Content card */}
                  <Card className="flex-grow p-8 hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/30">
                    <h3 className="text-2xl font-bold text-primary mb-3">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-base">{milestone.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-dark-green to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-primary-foreground mb-6">
              Part of Our Story
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-10">
              Explore our diverse businesses and be part of our continued growth and success.
            </p>
            <Button onClick={() => navigate('/')} className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-2xl transition-all transform hover:scale-105">
              Explore Our Group
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurJourney;
