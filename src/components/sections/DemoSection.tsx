
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Youtube } from "lucide-react";

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [apiLoaded, setApiLoaded] = useState(false);

  // Load YouTube iframe API
  useEffect(() => {
    // First, define the callback function that will be called when the API is ready
    window.onYouTubeIframeAPIReady = () => {
      console.log("YouTube API is ready");
      setApiLoaded(true);
    };

    // Check if script already exists
    if (!document.getElementById("youtube-api")) {
      const tag = document.createElement("script");
      tag.id = "youtube-api";
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    } else if (window.YT && window.YT.Player) {
      // If the script already exists and API is loaded
      setApiLoaded(true);
    }

    return () => {
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          console.error("Error destroying player:", e);
        }
      }
    };
  }, []);

  // Initialize YouTube player once API is ready
  useEffect(() => {
    if (!apiLoaded || !containerRef.current) return;
    
    try {
      console.log("Initializing YouTube player");
      playerRef.current = new window.YT.Player("youtube-player", {
        videoId: "U8sGYFZAP4I",
        playerVars: {
          rel: 0,
          modestbranding: 1,
          enablejsapi: 1,
          controls: 1,
        },
        events: {
          onStateChange: (event: any) => {
            setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
          },
          onReady: () => {
            console.log("YouTube player ready");
          },
          onError: (e: any) => {
            console.error("YouTube player error:", e);
          }
        },
      });
    } catch (error) {
      console.error("Error initializing YouTube player:", error);
    }
  }, [apiLoaded]);

  const togglePlay = () => {
    if (!playerRef.current) return;
    
    try {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    } catch (e) {
      console.error("Error toggling play state:", e);
    }
  };

  return (
    <section className="py-20 bg-[#f0f4fa]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">See Attune in Action</h2>
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative rounded-xl overflow-hidden neumorphic"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
            ref={containerRef}
          >
            <div className="aspect-video bg-black">
              <div id="youtube-player" className="w-full h-full"></div>
            </div>
            
            {/* Play/Pause overlay button */}
            <div 
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying || showControls ? 'opacity-0' : 'opacity-100'} cursor-pointer`}
              onClick={togglePlay}
            >
              <div className="w-20 h-20 rounded-full bg-[#222733] flex items-center justify-center">
                {isPlaying ? (
                  <Pause className="h-10 w-10 text-white" />
                ) : (
                  <Play className="h-10 w-10 text-white ml-1" />
                )}
              </div>
            </div>
            
            {/* Watch on YouTube button */}
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
