import { Brain, Bot, LineChart } from "lucide-react";
const SolutionSection = () => {
  const solutions = [{
    title: "Confusion Tracking",
    description: "Monitor students' cognitive states in real-time using EEG data from the Muse S headband, identifying moments of confusion before they raise their hand.",
    icon: Brain
  }, {
    title: "AI Integration",
    description: "Our AI assistant helps teachers understand what's happening in their classroom by analyzing cognitive data and providing real-time insights about student engagement and comprehension.",
    icon: Bot
  }, {
    title: "AI Lesson Recaps",
    description: "Get AI-generated summaries of your lesson highlighting key moments of engagement and confusion with actionable recommendations for improvement.",
    icon: LineChart
  }];
  return <section className="py-20 bg-[#f0f4fa]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Solution</h2>
        
        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {solutions.map((solution, index) => <div key={index} className="neumorphic-card p-6 rounded-xl relative overflow-hidden group transition-all duration-300">
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors"></div>
              <div className="mb-6 relative">
                <div className="w-16 h-16 neumorphic-icon flex items-center justify-center">
                  <solution.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>)}
        </div>

        {/* Product Screenshots */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
          {/* Student Dashboard */}
          <div className="neumorphic-card p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-center">Real-Time Student Monitoring</h3>
            <div className="rounded-lg overflow-hidden mb-4">
              <img alt="Student dashboard showing JP Vela's real-time cognitive tracking data" className="w-full h-auto" src="/lovable-uploads/ed9c0eaf-dfa8-4329-b890-4a406456e97c.png" />
            </div>
            <p className="text-gray-600 text-center">
              See exactly how each student is processing information in real-time. Track cognitive load, attention levels, and moments of confusion to provide targeted support.
            </p>
          </div>

          {/* AI Assistant */}
          <div className="neumorphic-card p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-center">AI Teaching Assistant</h3>
            <div className="rounded-lg overflow-hidden mb-4">
              <img alt="AI assistant interface showing collaboration hub and chat functionality" className="w-full h-auto" src="/lovable-uploads/edb28901-2306-497d-aaec-c7bc60c1fea5.png" />
            </div>
            <p className="text-gray-600 text-center">
              Our AI analyzes classroom cognitive data and provides instant insights, suggestions, and answers to help you understand and support every student's learning journey.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default SolutionSection;