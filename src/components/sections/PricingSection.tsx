
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingSectionProps {
  onContactUs: () => void;
}

const PricingSection = ({ onContactUs }: PricingSectionProps) => {
  const [activePlan, setActivePlan] = useState<'individual' | 'classroom' | 'institutional'>('individual');

  return (
    <section className="py-20 bg-[#f0f4fa]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Pricing</h2>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 neumorphic-inset rounded-full">
            {(['individual', 'classroom', 'institutional'] as const).map((plan) => (
              <button
                key={plan}
                onClick={() => setActivePlan(plan)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activePlan === plan 
                    ? 'bg-white text-primary shadow-sm neumorphic-button' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {plan.charAt(0).toUpperCase() + plan.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {activePlan === 'individual' && (
            <div className="neumorphic-card rounded-xl overflow-hidden">
              <div className="px-6 py-12 bg-gradient-to-br from-primary/10 to-purple-100">
                <h3 className="text-2xl font-bold text-center">Individual Plan</h3>
                <div className="text-center mt-4">
                  <span className="text-5xl font-bold">$39</span>
                  <span className="text-xl ml-1 text-gray-600">/month</span>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="neumorphic-icon mr-3">
                      <Check className="h-4 w-4 text-green-500" />
                    </span>
                    <span>1 teacher account</span>
                  </li>
                  <li className="flex items-center">
                    <span className="neumorphic-icon mr-3">
                      <Check className="h-4 w-4 text-green-500" />
                    </span>
                    <span>Up to 5 student profiles</span>
                  </li>
                  <li className="flex items-center">
                    <span className="neumorphic-icon mr-3">
                      <Check className="h-4 w-4 text-green-500" />
                    </span>
                    <span>Real-time confusion tracking</span>
                  </li>
                  <li className="flex items-center">
                    <span className="neumorphic-icon mr-3">
                      <Check className="h-4 w-4 text-green-500" />
                    </span>
                    <span>Basic engagement dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <span className="neumorphic-icon mr-3">
                      <Check className="h-4 w-4 text-green-500" />
                    </span>
                    <span>7-day session history</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button onClick={onContactUs} variant="neuDark" className="w-full">Join the Beta</Button>
                </div>
              </div>
            </div>
          )}
          
          {activePlan === 'classroom' && (
            <div className="neumorphic-card rounded-xl overflow-hidden">
              <div className="px-6 py-12 bg-gradient-to-br from-primary/20 to-purple-200">
                <h3 className="text-2xl font-bold text-center">Classroom Bundle</h3>
                <div className="text-center mt-4">
                  <span className="text-5xl font-bold">$199</span>
                  <span className="text-xl ml-1 text-gray-600">/month</span>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="neumorphic-icon mr-3">
                      <Check className="h-4 w-4 text-green-500" />
                    </span>
                    <span>3 teacher accounts</span>
                  </li>
                  <li className="flex items-center">
                    <span className="neumorphic-icon mr-3">
                      <Check className="h-4 w-4 text-green-500" />
                    </span>
                    <span>Up to 30 student profiles</span>
                  </li>
                  <li className="flex items-center">
                    <span className="neumorphic-icon mr-3">
                      <Check className="h-4 w-4 text-green-500" />
                    </span>
                    <span>Real-time confusion tracking</span>
                  </li>
                  <li className="flex items-center">
                    <span className="neumorphic-icon mr-3">
                      <Check className="h-4 w-4 text-green-500" />
                    </span>
                    <span>Advanced engagement dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <span className="neumorphic-icon mr-3">
                      <Check className="h-4 w-4 text-green-500" />
                    </span>
                    <span>30-day session history</span>
                  </li>
                  <li className="flex items-center">
                    <span className="neumorphic-icon mr-3">
                      <Check className="h-4 w-4 text-green-500" />
                    </span>
                    <span>AI lesson recaps</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button onClick={onContactUs} variant="neuDark" className="w-full">Join the Beta</Button>
                </div>
              </div>
            </div>
          )}
          
          {activePlan === 'institutional' && (
            <div className="neumorphic-card rounded-xl overflow-hidden">
              <div className="px-6 py-12 bg-gradient-to-br from-primary/30 to-purple-300">
                <h3 className="text-2xl font-bold text-center">Institutional License</h3>
                <div className="text-center mt-4">
                  <span className="text-xl text-gray-700">Contact us for custom pricing</span>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="neumorphic-icon mr-3">
                      <Check className="h-4 w-4 text-green-500" />
                    </span>
                    <span>Unlimited teacher accounts</span>
                  </li>
                  <li className="flex items-center">
                    <span className="neumorphic-icon mr-3">
                      <Check className="h-4 w-4 text-green-500" />
                    </span>
                    <span>Unlimited student profiles</span>
                  </li>
                  <li className="flex items-center">
                    <span className="neumorphic-icon mr-3">
                      <Check className="h-4 w-4 text-green-500" />
                    </span>
                    <span>District-level analytics</span>
                  </li>
                  <li className="flex items-center">
                    <span className="neumorphic-icon mr-3">
                      <Check className="h-4 w-4 text-green-500" />
                    </span>
                    <span>LMS integrations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="neumorphic-icon mr-3">
                      <Check className="h-4 w-4 text-green-500" />
                    </span>
                    <span>Parent portal</span>
                  </li>
                  <li className="flex items-center">
                    <span className="neumorphic-icon mr-3">
                      <Check className="h-4 w-4 text-green-500" />
                    </span>
                    <span>Custom reporting</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button onClick={onContactUs} variant="neuDark" className="w-full">Contact Us For Quote</Button>
                </div>
              </div>
            </div>
          )}
          
          <p className="text-center mt-6 text-sm text-gray-600">
            Hardware (Muse S) included in bundle pricing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
