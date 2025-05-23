import { User, ChartPie } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { ChartContainer, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
const neurodiversityData = [{
  name: "Children with ADHD",
  value: 10,
  color: "#9b87f5"
}, {
  name: "Children without ADHD",
  value: 90,
  color: "#E5DEFF"
}];
const statisticsData = [{
  label: "Students fall behind",
  value: "30-50%",
  description: "of students with ADHD fall behind academically"
}, {
  label: "Dropout rate",
  value: "3x",
  description: "higher dropout rate for students with ADHD"
}, {
  label: "Teachers",
  value: "90%",
  description: "of teachers feel inadequately prepared to teach neurodivergent students"
}];
const ProblemSection = () => {
  return <section className="bg-[#f0f4fa] py-20" id="problem">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-10">
          <Card className="p-8 animate-fade-in">
            <div className="flex flex-col md:flex-row items-center gap-6">
              
              
              <div className="flex-grow">
                <div className="border-l-4 border-primary pl-6 py-2 mb-4">
                  <p className="text-3xl md:text-4xl font-medium italic text-gray-700">
                    "I can't see who's lost until test day."
                  </p>
                </div>
                <p className="text-slate-600 text-lg">Mrs. Liu - High School Math Teacher</p>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-lg leading-relaxed text-gray-700">Teachers of neurodivergent students face a critical visibility gap. Traditional classroom feedback mechanisms—raised hands, facial expressions, even test scores—often fail to reveal the true cognitive experience of students with ADHD, autism, or learning differences. Without real-time insights into moments of confusion, engagement, or understanding, educators are forced to teach in the dark, only discovering learning gaps when it's too late to address them effectively.</p>
            </div>
          </Card>
          
          <Card className="p-8 animate-fade-in">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Neurodivergence in Education - The Numbers
              </h2>
              <p className="text-slate-600">
                A growing challenge for today's classrooms
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="neumorphic-inset p-6 rounded-xl flex items-center justify-center">
                <ChartContainer config={{
                adhd: {
                  label: "Children with ADHD",
                  color: "#9b87f5"
                },
                others: {
                  label: "Children without ADHD",
                  color: "#E5DEFF"
                }
              }} className="w-full aspect-square max-w-[320px] mx-auto">
                  <PieChart>
                    <Pie data={neurodiversityData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} fill="#8884d8" paddingAngle={2} dataKey="value" label={({
                    name,
                    percent
                  }) => `${name}: ${(percent * 100).toFixed(0)}%`} labelLine={false}>
                      {neurodiversityData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                    </Pie>
                    <ChartLegend verticalAlign="bottom">
                      <ChartLegendContent />
                    </ChartLegend>
                  </PieChart>
                </ChartContainer>
                <div className="absolute top-4 left-4 p-2 rounded-full neumorphic-icon">
                  <ChartPie className="h-5 w-5 text-primary" />
                </div>
              </div>
              
              <div className="neumorphic-soft p-6 rounded-xl flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-6 text-center text-gray-700">Key Statistics</h3>
                <div className="space-y-6">
                  {statisticsData.map((stat, index) => <div key={index} className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full neumorphic flex items-center justify-center">
                        <span className="text-primary text-base font-bold">{stat.value}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">{stat.label}</h4>
                        <p className="text-slate-600 text-sm">{stat.description}</p>
                      </div>
                    </div>)}
                </div>
                <p className="text-xs text-slate-500 mt-6 text-center">
                  Source: Centers for Disease Control and Prevention, 2023
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default ProblemSection;