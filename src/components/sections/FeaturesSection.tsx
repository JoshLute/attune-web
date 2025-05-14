
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

const FeaturesSection = () => {
  const basicFeatures = [
    { name: "Real-time confusion detection", available: true },
    { name: "Basic engagement metrics", available: true },
    { name: "Session recordings (7 days)", available: true },
    { name: "Single student tracking", available: true },
    { name: "CSV data export", available: true },
    { name: "AI-powered insights", available: false },
    { name: "Parent portal access", available: false },
    { name: "LMS integrations", available: false },
  ];

  const proFeatures = [
    { name: "Real-time confusion detection", available: true },
    { name: "Advanced engagement analytics", available: true },
    { name: "Session recordings (30 days)", available: true },
    { name: "Multiple student tracking", available: true },
    { name: "Advanced data export", available: true },
    { name: "AI-powered insights", available: true },
    { name: "Parent portal access", available: true },
    { name: "LMS integrations", available: true },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Features Deep Dive</h2>
        
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Basic Plan Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4">Basic</Badge>
              <h3 className="text-2xl font-bold mb-6">Essential Tools for Individual Educators</h3>
              <div className="space-y-4">
                {basicFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    {feature.available ? (
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                    ) : (
                      <X className="h-5 w-5 text-gray-300 mr-3" />
                    )}
                    <span className={`${!feature.available ? "text-gray-400" : ""}`}>{feature.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-10 -top-10 w-40 h-40 bg-blue-200 opacity-50 rounded-full"></div>
              <div className="absolute -right-5 -bottom-5 w-32 h-32 bg-primary/20 rounded-full"></div>
              <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Basic dashboard visualization" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Pro Plan Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <Badge variant="secondary" className="mb-4 bg-primary text-white">Pro</Badge>
              <h3 className="text-2xl font-bold mb-6">Advanced Tools for Schools & Districts</h3>
              <div className="space-y-4">
                {proFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>{feature.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:order-1 relative">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-yellow-200 opacity-50 rounded-full"></div>
              <div className="absolute -left-5 -bottom-5 w-32 h-32 bg-primary/20 rounded-full"></div>
              <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                  alt="Advanced dashboard visualization" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
