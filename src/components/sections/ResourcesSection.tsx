
import { FileText } from "lucide-react";

const ResourcesSection = () => {
  // Placeholder case studies
  const caseStudies = [
    { title: "Special Ed Success Story", description: "How Attune helped identify learning patterns" },
    { title: "ADHD Focus Improvement", description: "Tracking engagement to optimize learning" },
    { title: "Autism Classroom Integration", description: "Creating more inclusive learning environments" },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Resources</h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="mb-4 h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <p className="text-sm text-gray-400">(Case study coming soon)</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-purple-600 to-primary rounded-xl p-8 text-white shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Student Portal</h3>
                <p className="text-white/80">Personalized insights for self-directed learning</p>
              </div>
              <div className="mt-4 md:mt-0 bg-white/20 py-2 px-6 rounded-full">
                <span className="font-semibold">Launching Soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
