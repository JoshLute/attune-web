
import { Award } from "lucide-react";

const SocialProofSection = () => {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="mb-10 bg-gradient-to-r from-yellow-100 to-amber-100 px-8 py-4 rounded-full flex items-center shadow-lg">
              <Award className="w-8 h-8 text-amber-600 mr-3" />
              <span className="text-lg font-semibold text-amber-800">Winner, UCLA InT BioHackathon 2025</span>
            </div>
            
            <div className="w-full mt-8 p-6 border border-dashed border-gray-300 rounded-lg">
              <h3 className="text-xl font-semibold text-center text-gray-500 mb-4">Pilot Metrics Coming Soon</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-slate-50 p-4 rounded-lg flex flex-col items-center">
                    <div className="w-16 h-6 bg-slate-200 rounded mb-2"></div>
                    <div className="w-24 h-10 bg-slate-300 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
