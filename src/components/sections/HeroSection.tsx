import { Button } from "@/components/ui/button";
interface HeroSectionProps {
  onJoinBeta: () => void;
}
const HeroSection = ({
  onJoinBeta
}: HeroSectionProps) => {
  return <section className="container mx-auto px-4 py-20 bg-[#f0f4fa]" id="hero">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Real-time Insights for Smarter Classrooms
          </h1>
          <p className="text-xl mb-8 text-gray-700">We use AI and  brainwave data to track neurodivergent student learning to let teachers know exactly what they missed. </p>
          <Button onClick={onJoinBeta} size="lg" variant="neuDark" className="font-semibold text-lg">
            Join the Beta →
          </Button>
        </div>
        <div className="relative">
          <div className="relative h-[400px] w-full overflow-hidden rounded-xl neumorphic">
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-blue-300 rounded-full opacity-30"></div>
            <div className="absolute left-20 top-10 w-32 h-32 bg-purple-300 rounded-full opacity-30"></div>
            <div className="absolute -left-10 bottom-10 w-40 h-40 bg-primary/20 rounded-full"></div>
            <div className="absolute right-32 bottom-20 w-48 h-48 bg-yellow-200 opacity-30 rotate-45"></div>
            <div className="absolute left-32 top-32 w-72 h-72 border-4 border-primary rounded-full opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img alt="Inclusive classroom with students" className="object-cover w-full h-full rounded-xl shadow-inner" src="/lovable-uploads/94cb1c6a-72f2-4882-9b6c-7d9d9ca70ddb.png" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;