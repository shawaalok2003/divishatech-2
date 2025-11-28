import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 bg-section-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">About VKD Group</h2>
        
        {/* Main content with text left and video right */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              VKD is more than a brand — it is a legacy carried forward with pride, respect, and family 
values. 
Rooted in the heritage of family name Varekulam, inspired by the name of our 
grandfather Kochapu, and strengthened by the values of our father Devasy, VKD 
represents three generations of trust and dedication. 
            </p>
            <p className="text-lg text-muted-foreground">
             To honour this lineage, VP Thankchan brought these names together and created the 
brand VKD — a symbol of tradition, authenticity, and commitment to quality. 
Every product we offer carries the spirit of our family: 
hard work, integrity, and a promise to deliver only the best. 
At VKD, we don’t just build a business — 
we continue a legacy.
            </p>
          </div>

          {/* Right side - YouTube Video */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2IeQtGgwyLA"
              title="VKD Group Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Vision and Mission with styled borders */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-4 border-blue-500 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mb-6 mx-auto shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-4 text-center">Our Vision</h3>
            <p className="text-blue-800 dark:text-blue-200 text-center text-lg">
              To become a trusted and forward-thinking enterprise modernizing Kerala's food,
              wellness, and business landscape.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-4 border-green-500 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-6 mx-auto shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-green-900 dark:text-green-100 mb-4 text-center">Our Mission</h3>
            <p className="text-green-800 dark:text-green-200 text-center text-lg">
              To build sustainable, ethical, and technology-driven ventures that empower communities
              and deliver excellence.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;