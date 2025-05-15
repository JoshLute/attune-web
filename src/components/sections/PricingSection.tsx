
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingSectionProps {
  onContactUs: () => void;
}

const PricingSection = ({ onContactUs }: PricingSectionProps) => {
  const [activePlan, setActivePlan] = useState<'basic' | 'classroom' | 'institutional'>('basic');

  return (
    <section className="py-20 bg-[#f0f4fa]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Pricing</h2>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 neumorphic-inset rounded-full">
            {(['basic', 'classroom', 'institutional'] as const).map((plan) => (
              <button
                key={plan}
                onClick={() => setActivePlan(plan)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activePlan === plan 
                    ? 'bg-white text-primary shadow-sm neumorphic-button' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {plan === 'basic' ? 'Basic' : plan.charAt(0).toUpperCase() + plan.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {activePlan === 'basic' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Basic Plan */}
              <div className="neumorphic-card rounded-xl overflow-hidden">
                <div className="px-6 py-12 rounded-t-xl relative overflow-hidden" 
                     style={{
                       background: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.95) 0%, rgba(236, 225, 255, 0.9) 50%, rgba(221, 205, 255, 0.85) 100%)`,
                       borderRadius: '16px 16px 0 0'
                     }}>
                  <div className="absolute inset-0" 
                       style={{
                         background: 'radial-gradient(circle at 30% 30%, rgba(155, 135, 245, 0.25) 0%, rgba(155, 135, 245, 0.1) 40%, transparent 70%), radial-gradient(circle at 70% 70%, rgba(155, 135, 245, 0.25) 0%, rgba(155, 135, 245, 0.1) 30%, transparent 60%)',
                         borderRadius: '16px 16px 0 0'
                       }}></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-center">Basic Plan</h3>
                    <div className="text-center mt-4">
                      <span className="text-5xl font-bold">$30</span>
                      <span className="text-xl ml-1 text-gray-600">/month</span>
                      <div className="text-sm text-gray-500 mt-1">($360 /year)</div>
                    </div>
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
                      <span>Real-time confusion & engagement tracking</span>
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
                  <div className="mt-6 mb-3">
                    <p className="text-sm text-gray-500 italic">Muse S headband sold separately ($250)</p>
                  </div>
                  <div className="mt-4">
                    <Button onClick={onContactUs} variant="neuDark" className="w-full">Join the Beta</Button>
                  </div>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="neumorphic-card rounded-xl overflow-hidden">
                <div className="px-6 py-12 rounded-t-xl relative overflow-hidden"
                     style={{
                       background: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.95) 0%, rgba(236, 225, 255, 0.9) 50%, rgba(221, 205, 255, 0.85) 100%)`,
                       borderRadius: '16px 16px 0 0'
                     }}>
                  <div className="absolute inset-0" 
                       style={{
                         background: 'radial-gradient(circle at 30% 30%, rgba(155, 135, 245, 0.25) 0%, rgba(155, 135, 245, 0.1) 40%, transparent 70%), radial-gradient(circle at 70% 70%, rgba(155, 135, 245, 0.25) 0%, rgba(155, 135, 245, 0.1) 30%, transparent 60%)',
                         borderRadius: '16px 16px 0 0'
                       }}></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-center">Pro Plan</h3>
                    <div className="text-center mt-4">
                      <span className="text-5xl font-bold">$50</span>
                      <span className="text-xl ml-1 text-gray-600">/month</span>
                      <div className="text-sm text-gray-500 mt-1">($600 /year)</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-center font-medium">
                      <span className="neumorphic-icon mr-3">
                        <Check className="h-4 w-4 text-green-500" />
                      </span>
                      <span>Everything in Basic, plus:</span>
                    </li>
                    <li className="flex items-start ml-8">
                      <span className="text-gray-600 mr-2">–</span>
                      <span>Up to 25 student profiles</span>
                    </li>
                    <li className="flex items-start ml-8">
                      <span className="text-gray-600 mr-2">–</span>
                      <span>Unlimited history</span>
                    </li>
                    <li className="flex items-start ml-8">
                      <span className="text-gray-600 mr-2">–</span>
                      <span>AI lesson insights & automated recaps</span>
                    </li>
                    <li className="flex items-start ml-8">
                      <span className="text-gray-600 mr-2">–</span>
                      <span>Exportable progress reports (PDF/CSV)</span>
                    </li>
                    <li className="flex items-start ml-8">
                      <span className="text-gray-600 mr-2">–</span>
                      <span>Parent & therapist portal</span>
                    </li>
                    <li className="flex items-start ml-8">
                      <span className="text-gray-600 mr-2">–</span>
                      <span>Canvas & Google Classroom integrations</span>
                    </li>
                  </ul>
                  <div className="mt-6 mb-3">
                    <p className="text-sm text-gray-500 italic">Muse S headband sold separately ($250)</p>
                  </div>
                  <div className="mt-4">
                    <Button onClick={onContactUs} variant="neuDark" className="w-full">Join the Beta</Button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activePlan === 'classroom' && (
            <div className="neumorphic-card rounded-xl overflow-hidden">
              <div className="px-6 py-12 rounded-t-xl relative overflow-hidden"
                   style={{
                     background: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.95) 0%, rgba(236, 225, 255, 0.9) 50%, rgba(221, 205, 255, 0.85) 100%)`,
                     borderRadius: '16px 16px 0 0'
                   }}>
                <div className="absolute inset-0" 
                     style={{
                       background: 'radial-gradient(circle at 30% 30%, rgba(155, 135, 245, 0.25) 0%, rgba(155, 135, 245, 0.1) 40%, transparent 70%), radial-gradient(circle at 70% 70%, rgba(155, 135, 245, 0.25) 0%, rgba(155, 135, 245, 0.1) 30%, transparent 60%)',
                       borderRadius: '16px 16px 0 0'
                     }}></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-center">Classroom Bundle</h3>
                  <div className="text-center mt-4">
                    <span className="text-5xl font-bold">$199</span>
                    <span className="text-xl ml-1 text-gray-600">/month</span>
                  </div>
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
              <div className="px-6 py-12 rounded-t-xl relative overflow-hidden"
                   style={{
                     background: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.95) 0%, rgba(236, 225, 255, 0.9) 50%, rgba(221, 205, 255, 0.85) 100%)`,
                     borderRadius: '16px 16px 0 0'
                   }}>
                <div className="absolute inset-0" 
                     style={{
                       background: 'radial-gradient(circle at 30% 30%, rgba(155, 135, 245, 0.25) 0%, rgba(155, 135, 245, 0.1) 40%, transparent 70%), radial-gradient(circle at 70% 70%, rgba(155, 135, 245, 0.25) 0%, rgba(155, 135, 245, 0.1) 30%, transparent 60%)',
                       borderRadius: '16px 16px 0 0'
                     }}></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-center">Institutional License</h3>
                  <div className="text-center mt-4">
                    <span className="text-xl text-gray-700">Contact us for custom pricing</span>
                  </div>
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
