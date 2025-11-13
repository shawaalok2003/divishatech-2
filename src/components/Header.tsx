import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
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

  const businesses = [
    { name: "VKD Vegetables & Wholesale", path: "/vegetables-wholesale", category: "Agriculture" },
    { name: "VKD Fresh Cart", path: "/fresh-cart", category: "Technology" },
    { name: "VKD Fresh O Basket", path: "/fresh-o-basket", category: "Retail" },
    { name: "Jo Mari Heaven Resort", path: "/jo-mari-resort", category: "Hospitality" },
    { name: "Grand Muziris Hotel", path: "/grand-muziris", category: "Hospitality" },
    { name: "SRM Hotels Coimbatore", path: "/srm-hotels", category: "Hospitality" },
    { name: "JT Estates", path: "/jt-estates", category: "Real Estate" },
    { name: "VKD Plantations Pvt. Ltd.", path: "/vkd-plantations", category: "Agriculture" },
  ];

  const handleBusinessClick = (path: string) => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-sm shadow-lg" : "bg-primary"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-primary-foreground hover:opacity-80 transition-opacity"
          >
            VKD Group
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-primary-foreground hover:text-accent transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-primary-foreground hover:text-accent transition-colors font-medium"
            >
              About
            </button>
            
            {/* Businesses Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className="text-primary-foreground hover:text-accent transition-colors font-medium flex items-center gap-1"
              >
                Businesses
                <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-lg shadow-2xl p-6 animate-fade-in">
                  <div className="grid grid-cols-2 gap-3">
                    {businesses.map((business, index) => (
                      <button
                        key={index}
                        onClick={() => handleBusinessClick(business.path)}
                        className="text-left p-3 rounded-lg hover:bg-accent/10 transition-colors group"
                      >
                        <div className="text-xs font-semibold text-primary mb-1">
                          {business.category}
                        </div>
                        <div className="text-sm font-medium text-foreground group-hover:text-primary">
                          {business.name}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("leadership")}
              className="text-primary-foreground hover:text-accent transition-colors font-medium"
            >
              Leadership
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-primary-foreground hover:text-accent transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              onClick={() => scrollToSection("contact")}
              className="hidden lg:flex bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full px-6"
            >
              Get In Touch
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-primary-foreground"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-primary-foreground hover:text-accent transition-colors font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-primary-foreground hover:text-accent transition-colors font-medium text-left"
              >
                About
              </button>
              
              {/* Mobile Businesses Section */}
              <div className="border-t border-primary-foreground/20 pt-4">
                <div className="text-primary-foreground font-semibold mb-3">Our Businesses</div>
                <div className="flex flex-col gap-2 pl-4">
                  {businesses.map((business, index) => (
                    <button
                      key={index}
                      onClick={() => handleBusinessClick(business.path)}
                      className="text-left py-2"
                    >
                      <div className="text-xs text-accent font-semibold mb-1">
                        {business.category}
                      </div>
                      <div className="text-sm text-primary-foreground">
                        {business.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => scrollToSection("leadership")}
                className="text-primary-foreground hover:text-accent transition-colors font-medium text-left"
              >
                Leadership
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-primary-foreground hover:text-accent transition-colors font-medium text-left"
              >
                Contact
              </button>
              
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full px-6 w-full"
              >
                Get In Touch
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;