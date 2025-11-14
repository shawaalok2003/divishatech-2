import { Link, useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="py-16" style={{ backgroundColor: "transparent" }}>
      <div className="container mx-auto px-4">
        <div 
          className="p-8 md:p-12"
          style={{
            background: "hsl(160 20% 30%)",
            borderRadius: "25px",
            boxShadow: "rgba(0, 69, 52, 0.25) 0px 2px 8px"
          }}
        >
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            {/* Company Info */}
            <div>
              <Link 
                to="/" 
                className="text-white font-bold text-2xl tracking-tight hover:opacity-80 transition-opacity block mb-4"
                style={{ textDecoration: "none" }}
              >
                VKD Group
              </Link>
              <p className="text-white/80 text-sm leading-relaxed">
                Building Kerala's Future, One Sustainable Venture at a Time.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-white/80 hover:text-white text-sm text-left transition-colors"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-white/80 hover:text-white text-sm text-left transition-colors"
                  style={{ textDecoration: "none" }}
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("businesses")}
                  className="text-white/80 hover:text-white text-sm text-left transition-colors"
                  style={{ textDecoration: "none" }}
                >
                  Businesses
                </button>
                <button
                  onClick={() => scrollToSection("vision")}
                  className="text-white/80 hover:text-white text-sm text-left transition-colors"
                  style={{ textDecoration: "none" }}
                >
                  Vision
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white/80 hover:text-white text-sm text-left transition-colors"
                  style={{ textDecoration: "none" }}
                >
                  Contact
                </button>
              </nav>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-white/80 mt-1 flex-shrink-0" />
                  <p className="text-white/80 text-sm">Kochi, Kerala, India</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-white/80 flex-shrink-0" />
                  <a 
                    href="tel:+919961487528" 
                    className="text-white/80 hover:text-white text-sm transition-colors"
                    style={{ textDecoration: "none" }}
                  >
                    +91 9961487528
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-white/80 flex-shrink-0" />
                  <a 
                    href="mailto:info@vkd.org.in" 
                    className="text-white/80 hover:text-white text-sm transition-colors"
                    style={{ textDecoration: "none" }}
                  >
                    info@vkd.org.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-6">
            <p className="text-white/60 text-sm text-center">
              © 2025 VKD Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;