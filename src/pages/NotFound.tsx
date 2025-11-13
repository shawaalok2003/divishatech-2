import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="text-center px-4 max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4 animate-fade-in">404</h1>
          <h2 className="text-3xl font-bold text-foreground mb-4">Oops! Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-full px-8"
            >
              <Home className="h-5 w-5" />
              Return to Home
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.history.back()}
            className="gap-2 rounded-full px-8 border-primary text-primary hover:bg-primary/10"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Quick Links:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/vegetables-wholesale" className="text-sm text-primary hover:underline">
              VKD Vegetables
            </Link>
            <Link to="/fresh-cart" className="text-sm text-primary hover:underline">
              Fresh Cart
            </Link>
            <Link to="/jo-mari-resort" className="text-sm text-primary hover:underline">
              Jo Mari Resort
            </Link>
            <Link to="/grand-muziris" className="text-sm text-primary hover:underline">
              Grand Muziris
            </Link>
            <Link to="/jt-estates" className="text-sm text-primary hover:underline">
              JT Estates
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;