import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      quote:
        "VKD Group has been our trusted partner for over 5 years. Their consistency, quality, and reliability are unmatched in the industry.",
      author: "Fresh Supermarket Chain",
    },
    {
      rating: 5,
      quote:
        "The fresh produce from VKD Wholesale ensures our guests always enjoy the best quality meals. Their logistics support is exceptional.",
      author: "Grand Hotel & Resorts",
    },
    {
      rating: 5,
      quote:
        "VKD Fresh Cart platform has transformed how we source vegetables for our corporate cafeteria. The digital experience is seamless.",
      author: "Tech Solutions Pvt. Ltd.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by Leading Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            Reliability | Freshness | Fair Pricing | Transparency
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
              <p className="text-primary font-semibold">{testimonial.author}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
