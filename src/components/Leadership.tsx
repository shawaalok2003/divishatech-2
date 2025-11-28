import { Card } from "@/components/ui/card";

const Leadership = () => {
  const leaders = [
    {
      image: "https://images.unsplash.com/photo-1758520144420-3e5b22e9b9a4",
      name: "Mr. V. P. Thankachan",
      title: "Managing Director",
      bio: "In any business, more than anything else, you need God's blessing. Never do business with the expectation of what you will get in advance. Trust the process, stay committed, work with persistent hard work, and always remain true to your identity.",
    },
    {
      image: "https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg",
      name: "Mr. Jobin Thankachan",
      title: "Chief Executive Officer",
      bio: "Jobin Thankachan leads VKD Group with a vision to modernize Kerala's agricultural and hospitality sectors. With over 15 years of experience in business development and strategic planning, he has spearheaded the group's expansion into technology-driven solutions and sustainable ventures. His commitment to ethical business practices and community empowerment has positioned VKD Group as a trusted name across multiple industries.",
    },
  ];

  return (
    <section id="leadership" className="py-24 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Leadership</h2>
          <p className="text-lg text-muted-foreground">
            Meet the visionaries driving VKD Group's growth and commitment to sustainable business
            practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {leaders.map((leader, index) => (
            <Card key={index} className="overflow-hidden">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{leader.name}</h3>
                <p className="text-accent font-semibold mb-4 text-lg" style={{ color: 'hsl(42 88% 65%)' }}>{leader.title}</p>
                <p className="text-muted-foreground leading-relaxed">{leader.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;