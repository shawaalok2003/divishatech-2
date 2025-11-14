import { Link, useNavigate } from "react-router-dom";

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
    <footer className="py-8" style={{ backgroundColor: "transparent" }}>
      <div className="container mx-auto px-4">
        <div 
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          style={{
            background: "hsl(160 20% 30%)",
            borderRadius: "25px",
            padding: "12px 24px",
            boxShadow: "rgba(0, 69, 52, 0.25) 0px 2px 8px"
          }}
        >
          <Link 
            to="/" 
            className="text-white font-bold text-xl md:text-2xl tracking-tight hover:opacity-80 transition-opacity"
            style={{ textDecoration: "none" }}
          >
            VKD Group
          </Link>
          
          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-white font-medium text-base hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-200"
              style={{ textDecoration: "none" }}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white font-medium text-base hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-200"
              style={{ textDecoration: "none" }}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("businesses")}
              className="text-white font-medium text-base hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-200"
              style={{ textDecoration: "none" }}
            >
              Businesses
            </button>
            <button
              onClick={() => scrollToSection("leadership")}
              className="text-white font-medium text-base hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-200"
              style={{ textDecoration: "none" }}
            >
              Leadership
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white font-medium text-base hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-200"
              style={{ textDecoration: "none" }}
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-accent text-accent-foreground font-semibold px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
              style={{ textDecoration: "none" }}
            >
              Get in Touch
            </button>
          </nav>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} VKD Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
