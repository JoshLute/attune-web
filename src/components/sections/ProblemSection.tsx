import { User } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
const ProblemSection = () => {
  return <section className="bg-[#f0f4fa] py-20" id="problem">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 animate-fade-in">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <Avatar className="h-20 w-20 border-4 border-white shadow-lg">
                  <AvatarFallback className="bg-primary text-white">
                    <User className="h-10 w-10" />
                  </AvatarFallback>
                </Avatar>
              </div>
              
              <div className="flex-grow">
                <div className="border-l-4 border-primary pl-6 py-2 mb-4">
                  <p className="text-3xl md:text-4xl font-medium italic text-gray-700">
                    "I can't see who's lost until test day."
                  </p>
                </div>
                <p className="text-slate-600 text-lg">
                  - High School Math Teacher
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-lg leading-relaxed text-gray-700">Teachers of neurodivergent students face a critical visibility gap. Traditional classroom feedback mechanisms—raised hands, facial expressions, even test scores—often fail to reveal the true cognitive experience of students with ADHD, autism, or learning differences. Without real-time insights into moments of confusion, engagement, or understanding, educators are forced to teach in the dark, only discovering learning gaps when it's too late to address them effectively.</p>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default ProblemSection;