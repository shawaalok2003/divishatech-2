import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ 
        backgroundColor: "hsl(160 20% 30%)",
        boxShadow: "rgba(0, 69, 52, 0.25) 0px 2px 8px"
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div 
          className="flex items-center justify-between"
          style={{
            padding: "12px 24px"
          }}
        >
          <Link
            to="/"
            className="text-white font-bold text-xl md:text-2xl tracking-tight hover:opacity-80 transition-opacity"
            style={{ textDecoration: "none" }}
          >
            VKD Group
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
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
              onClick={() => navigate("/our-journey")}
              className="text-white font-medium text-base hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-200"
              style={{ textDecoration: "none" }}
            >
              Our Journey
            </button>
            
            {/* Businesses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (closeTimeout.current) {
                  clearTimeout(closeTimeout.current as unknown as number);
                  closeTimeout.current = null;
                }
                setIsDropdownOpen(true);
              }}
              onMouseLeave={() => {
                // delay closing to improve UX when moving pointer to dropdown
                closeTimeout.current = setTimeout(() => setIsDropdownOpen(false), 300);
              }}
            >
              <button
                onClick={() => {
                  // toggle on click for accessibility on touch devices
                  setIsDropdownOpen((v) => !v);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setIsDropdownOpen(false);
                }}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
                className="text-white font-medium text-base hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-1"
                style={{ textDecoration: "none" }}
              >
                Businesses
                <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-lg shadow-2xl p-6 animate-fade-in z-50"
                  onMouseEnter={() => {
                    if (closeTimeout.current) {
                      clearTimeout(closeTimeout.current as unknown as number);
                      closeTimeout.current = null;
                    }
                    setIsDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    closeTimeout.current = setTimeout(() => setIsDropdownOpen(false), 300);
                  }}
                >
                  <div className="grid grid-cols-2 gap-3">
                    {businesses.map((business, index) => (
                      <button
                        key={index}
                        onClick={() => handleBusinessClick(business.path)}
                        className="text-left p-3 rounded-lg hover:bg-accent/10 transition-colors group w-full text-left"
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

            <Link
              to="/csr"
              className="text-white font-medium text-base hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-200"
              style={{ textDecoration: "none" }}
            >
              Charity
            </Link>
            <button
              onClick={() => scrollToSection("leadership")}
              className="text-white font-medium text-base hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-200"
              style={{ textDecoration: "none" }}
            >
              Leadership
            </button>
           
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/contact");
              }}
              className="bg-accent text-accent-foreground font-semibold px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
              style={{ textDecoration: "none" }}
            >
              Get in Touch
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden mt-4 pb-4 animate-fade-in overflow-y-auto"
            style={{
              background: "hsl(160 20% 30%)",
              borderRadius: "25px",
              padding: "24px",
              boxShadow: "rgba(0, 69, 52, 0.25) 0px 2px 8px",
              maxHeight: "calc(100vh - 120px)"
            }}
          >
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-white font-medium text-base hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-200 text-left"
                style={{ textDecoration: "none" }}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white font-medium text-base hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-200 text-left"
                style={{ textDecoration: "none" }}
              >
                About
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate("/our-journey");
                }}
                className="text-white font-medium text-base hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-200 text-left"
                style={{ textDecoration: "none" }}
              >
                Our Journey
              </button>
              
              {/* Mobile Businesses Section */}
              <div className="border-t border-white/20 pt-4">
                <div className="text-white font-semibold mb-3 px-4">Our Businesses</div>
                <div className="flex flex-col gap-2">
                  {businesses.map((business, index) => (
                    <button
                      key={index}
                      onClick={() => handleBusinessClick(business.path)}
                      className="text-left px-4 py-2 hover:bg-white/10 rounded-full transition-all duration-200"
                    >
                      <div className="text-xs text-accent font-semibold mb-1">
                        {business.category}
                      </div>
                      <div className="text-sm text-white">
                        {business.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <Link
                to="/csr"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white font-medium text-base hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-200 text-left"
                style={{ textDecoration: "none" }}
              >
                Charity
              </Link>
              <button
                onClick={() => scrollToSection("leadership")}
                className="text-white font-medium text-base hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-200 text-left"
                style={{ textDecoration: "none" }}
              >
                Leadership
              </button>
              
              
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate("/contact");
                }}
                className="bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity w-full"
                style={{ textDecoration: "none" }}
              >
                Get in Touch
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;