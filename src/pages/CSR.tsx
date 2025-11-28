import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Sprout, 
  Leaf, 
  GraduationCap, 
  Heart, 
  Users,
  TreeDeciduous,
  Target,
  Lightbulb,
  ArrowRight,
  Quote
} from "lucide-react";

const CSR = () => {
  const pillars = [
    {
      icon: Sprout,
      title: "Sustainable Agriculture",
      description: "Promoting organic farming, fair pricing, and farm technology adoption."
    },
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description: "Tree plantations, water conservation, waste management, and renewable energy integration."
    },
    {
      icon: GraduationCap,
      title: "Education & Skill Development",
      description: "Scholarships for rural students, digital literacy for youth, and vocational training."
    },
    {
      icon: Heart,
      title: "Community Wellness",
      description: "Rural healthcare camps, nutritional awareness, and wellness outreach."
    },
    {
      icon: Users,
      title: "Women Empowerment",
      description: "Creating self-employment opportunities through local sourcing and micro-enterprises."
    }
  ];

  const initiatives = [
    {
      title: "Farm to Future Program",
      description: "Supporting small farmers with training in sustainable farming and digital market access via VKD Fresh Cart.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop"
    },
    {
      title: "Green Kerala Drive",
      description: "Ongoing reforestation initiative — planting 10,000+ trees near VKD plantation zones and community areas.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop"
    },
    {
      title: "Wellness for All Initiative",
      description: "Free wellness camps, yoga sessions, and nutrition workshops organized by Jo Mari Heaven Resort.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop"
    },
    {
      title: "Educate to Elevate Project",
      description: "Scholarships and digital learning support for children of farmers and hospitality workers.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
    }
  ];

  const stats = [
    { icon: "🌳", value: "10,000+", label: "Trees Planted" },
    { icon: "👩‍🌾", value: "500+", label: "Farmers Trained" },
    { icon: "🎓", value: "300+", label: "Students Supported" },
    { icon: "🚰", value: "25+", label: "Villages Benefitted" },
    { icon: "⚡", value: "100%", label: "Renewable Energy Integration" }
  ];

  const testimonials = [
    {
      quote: "Thanks to VKD's farmer training, we've reduced wastage and increased our income by 30%.",
      name: "Aneesh",
      role: "Farmer from Idukki District"
    },
    {
      quote: "VKD's education support helped my daughter join college — a dream we never thought possible.",
      name: "Rema",
      role: "Beneficiary, Thrissur"
    },
    {
      quote: "The wellness camps have brought healthcare to our doorstep. VKD truly cares for communities.",
      name: "Suresh",
      role: "Community Leader, Wayanad"
    }
  ];

  const upcomingPlans = [
    "Establishing \"VKD Sustainability Fund\" for local entrepreneurs",
    "Partnering with NGOs for community-based renewable energy projects",
    "Scaling organic farming programs across Kerala"
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Building Businesses.<br />
              Empowering Communities.<br />
              Sustaining the Planet.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              At VKD Group, we believe true growth happens when communities prosper and nature thrives. 
              Our CSR initiatives are rooted in sustainability, inclusion, and long-term social impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("initiatives")}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Explore Our Impact <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                Partner with Our Initiatives
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Responsibility Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">
              Our Responsibility Beyond Business
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              At VKD Group, we go beyond profit to ensure purpose. We see CSR not as an obligation, 
              but as an opportunity — to create meaningful change, empower people, and build a better tomorrow. 
              Our initiatives focus on strengthening rural livelihoods, protecting the environment, 
              and nurturing the next generation through education and health.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Sustainability First</h3>
                  <p className="text-muted-foreground">
                    Promoting eco-friendly and regenerative practices
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Empowering Rural India</h3>
                  <p className="text-muted-foreground">
                    Supporting farmers and local communities
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">People & Planet Together</h3>
                  <p className="text-muted-foreground">
                    Integrating social progress with business success
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-2xl font-semibold text-primary italic">
                We measure success not by profits, but by the lives we touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      

      {/* Initiatives Section */}
      <section id="initiatives" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Initiatives That Make a Difference
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={initiative.image} 
                    alt={initiative.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                    {initiative.title}
                  </h3>
                </div>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">{initiative.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
     

      {/* Future Commitment Section */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                Our Commitment to the Future
              </h2>
              <p className="text-lg text-muted-foreground">
                VKD Group aims to expand its CSR footprint with a sharper focus on climate resilience, 
                digital empowerment, and circular economy initiatives.
              </p>
            </div>

            <Card className="border-2 border-primary/20">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Upcoming Plans Include:</h3>
                </div>
                <ul className="space-y-4">
                  {upcomingPlans.map((plan, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <p className="text-lg text-foreground">{plan}</p>
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-semibold text-primary mt-8 italic text-center">
                  Our work continues — because a sustainable tomorrow starts today.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Join Our Journey Towards a Better Tomorrow
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Whether you're an NGO, a business partner, or an individual changemaker — 
              collaborate with us to amplify impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                Collaborate with VKD Group
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Learn More about Our CSR Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Tagline */}
      <section className="py-12 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">VKD Group</h3>
            <p className="text-lg text-muted-foreground italic">
              Growing with Purpose, Acting with Responsibility
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CSR;
