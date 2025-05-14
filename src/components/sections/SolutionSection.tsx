
import { Brain, Activity, LineChart } from "lucide-react";

const SolutionSection = () => {
  const solutions = [
    {
      title: "Confusion Tracking",
      description: "Monitor students' cognitive states in real-time using EEG data from the Muse S headband, identifying moments of confusion before they raise their hand.",
      icon: Brain,
    },
    {
      title: "Engagement Dashboard",
      description: "View class-wide engagement patterns and identify which teaching methods are most effective for different learning styles.",
      icon: Activity,
    },
    {
      title: "AI Lesson Recaps",
      description: "Get AI-generated summaries of your lesson highlighting key moments of engagement and confusion with actionable recommendations.",
      icon: LineChart,
    }
  ];

  return (
    <section className="py-20 bg-[#f0f4fa]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Solution</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="neumorphic-card p-6 rounded-xl relative overflow-hidden group transition-all duration-300"
            >
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors"></div>
              <div className="mb-6 relative">
                <div className="w-16 h-16 neumorphic-icon flex items-center justify-center">
                  <solution.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
