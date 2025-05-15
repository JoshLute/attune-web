
import { useState } from "react";

const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-[#f0f4fa]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">See Attune in Action</h2>
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative rounded-xl overflow-hidden neumorphic"
            onMouseEnter={() => setIsPlaying(true)}
            onMouseLeave={() => setIsPlaying(false)}
          >
            <div className="aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/U8sGYFZAP4I?autoplay=${isPlaying ? 1 : 0}&mute=${isPlaying ? 0 : 1}`}
                className="w-full h-full border-0"
                title="Attune Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
              <div className="w-20 h-20 rounded-full bg-[#222733] flex items-center justify-center">
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
