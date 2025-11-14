import { Card } from "@/components/ui/card";
import { Eye, Target } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
            Our Vision & Mission
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <Card className="p-8 border-2 border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-green-700">Vision</h3>
              </div>
              <p className="text-lg text-green-900 leading-relaxed">
                To be a leading diversified business group in India, recognized for innovation, 
                sustainability, and excellence across agriculture, hospitality, technology, and real estate sectors. 
                We aspire to create lasting value for our stakeholders while contributing positively to society 
                and the environment.
              </p>
            </Card>

            {/* Mission Card */}
            <Card className="p-8 border-2 border-green-600 bg-gradient-to-br from-emerald-50 to-green-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-green-800">Mission</h3>
              </div>
              <p className="text-lg text-green-900 leading-relaxed">
                To deliver exceptional products and services through ethical business practices, 
                continuous innovation, and a commitment to sustainability. We empower our people, 
                support our communities, and build partnerships that drive mutual growth while 
                maintaining the highest standards of quality and integrity.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
