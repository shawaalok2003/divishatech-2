import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting VKD Group. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Build Sustainable Businesses Together
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to partner with VKD Group or learn more about our ventures? Get in touch with us
            today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-6"
              >
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Address</h3>
              <p className="text-muted-foreground">Kochi, Kerala, India</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
              <a href="tel:+919961487528" className="text-primary hover:underline">
                +91 9961487528
              </a>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
              <a href="mailto:info@vkd.org.in" className="text-primary hover:underline">
                info@vkd.org.in
              </a>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Website</h3>
              <a
                href="http://www.vkd.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.vkd.org.in
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;