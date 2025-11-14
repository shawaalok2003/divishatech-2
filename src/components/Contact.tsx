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

            <Card className="p-6 overflow-hidden">
              <h3 className="text-xl font-bold text-foreground mb-4">Location</h3>
              <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125740.14798933588!2d76.22309877910158!3d9.93174729999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala%2C%20India!5e0!3m2!1sen!2s!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="VKD Group Location - Kochi, Kerala"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;