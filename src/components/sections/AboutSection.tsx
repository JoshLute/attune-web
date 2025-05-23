const AboutSection = () => {
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Attune</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="col-span-1">
              <img alt="Founder" className="w-full h-auto rounded-lg shadow-md" src="/lovable-uploads/4906c0b8-eb52-46dc-8c97-d3781b69d487.png" />
            </div>
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-6">Attune was founded by a team of undergraduate engineers with one mission: bridge the disconnect between students, teachers, and parents—using real-time insight to unlock every learner’s potential. 


 We built Attune to deliver personalization at scale. By combining cognitive data with intuitive dashboards, we empower educators to make smarter decisions and give students the support they need, when they need it.


 Our journey began at UCLA’s hackathon, where we built the first prototype—and won. That moment proved there’s real demand for what we’re building. 


 Today, Attune is more than a student success tool. It’s an early-warning system for attention, understanding, and engagement—designed to work at the speed of the classroom.</p>
              
            </div>
          </div>
          
          
        </div>
      </div>
    </section>;
};
export default AboutSection;