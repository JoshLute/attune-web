
import { useState } from "react";

const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">See Attune in Action</h2>
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative rounded-xl overflow-hidden shadow-2xl"
            onMouseEnter={() => setIsPlaying(true)}
            onMouseLeave={() => setIsPlaying(false)}
          >
            <div className="aspect-video bg-black">
              {/* In production, replace with actual video embed */}
              <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white">
                <div className="text-center p-6">
                  <h3 className="text-2xl font-bold mb-4">Attune Demo Video</h3>
                  <p className="text-gray-300 mb-4">
                    {isPlaying ? "Video is playing..." : "Hover to play demo"}
                  </p>
                  <p className="text-sm text-gray-400">
                    (In production, replace this with actual YouTube/Vimeo embed)
                  </p>
                </div>
              </div>
            </div>
            <div className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                <div className="w-0 h-0 border-t-8 border-b-8 border-l-16 border-t-transparent border-b-transparent border-l-white ml-2"></div>
              </div>
            </div>
          </div>
          <p className="text-center mt-6 text-lg text-gray-700">
            Watch Attune pinpoint confusion in real time—no extra hardware beyond Muse S.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
