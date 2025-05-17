
import { useState, useRef } from "react";
import { Play, Youtube } from "lucide-react";

const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  return (
    <section className="py-20 bg-[#f0f4fa]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">See Attune in Action</h2>
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative rounded-xl overflow-hidden neumorphic"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            <div className="aspect-video bg-black">
              <iframe
                src="https://www.youtube.com/embed/U8sGYFZAP4I?enablejsapi=1&rel=0"
                className="w-full h-full border-0"
                title="Attune Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            
            <div 
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying || showControls ? 'opacity-0' : 'opacity-100'}`}
              onClick={() => setIsPlaying(true)}
            >
              <div className="w-20 h-20 rounded-full bg-[#222733] flex items-center justify-center cursor-pointer">
                <Play className="h-10 w-10 text-white ml-1" />
              </div>
            </div>
            
            <a 
              href="https://www.youtube.com/watch?v=U8sGYFZAP4I" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`absolute top-4 right-4 bg-black/70 text-white p-2 rounded-lg flex items-center gap-1 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
            >
              <Youtube className="h-4 w-4" />
              <span className="text-sm">Watch on YouTube</span>
            </a>
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
