import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VegetablesWholesale from "./pages/VegetablesWholesale";
import FreshCart from "./pages/FreshCart";
import FreshOBasket from "./pages/FreshOBasket";
import JoMariResort from "./pages/JoMariResort";
import GrandMuziris from "./pages/GrandMuziris";
import SRMHotels from "./pages/SRMHotels";
import JTEstates from "./pages/JTEstates";
import VKDPlantations from "./pages/VKDPlantations";
import HoverReceiver from "@/visual-edits/VisualEditsMessenger";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HoverReceiver />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vegetables-wholesale" element={<VegetablesWholesale />} />
          <Route path="/fresh-cart" element={<FreshCart />} />
          <Route path="/fresh-o-basket" element={<FreshOBasket />} />
          <Route path="/jo-mari-resort" element={<JoMariResort />} />
          <Route path="/grand-muziris" element={<GrandMuziris />} />
          <Route path="/srm-hotels" element={<SRMHotels />} />
          <Route path="/jt-estates" element={<JTEstates />} />
          <Route path="/vkd-plantations" element={<VKDPlantations />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;