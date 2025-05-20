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
              <p className="text-gray-700 mb-6">
                Attune was founded with a clear purpose: to bridge the gap between how neurodivergent students learn and how teachers teach. Our founder, a former special education teacher with a background in neuroscience, experienced firsthand the challenges of understanding what's happening in students' minds during learning.
              </p>
              <p className="text-gray-700">
                We believe that by providing real-time cognitive insights, we can create more inclusive, effective, and personalized learning environments where every student—regardless of neurological differences—can truly thrive. Our mission is to transform education by making the invisible visible, giving teachers the tools they need to reach every mind in their classroom.
              </p>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>;
};
export default AboutSection;