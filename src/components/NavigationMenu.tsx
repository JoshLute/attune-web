
import { useState, useEffect } from "react";
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

interface NavigationMenuProps {
  onJoinBeta: () => void;
}

const MainNavigationMenu = ({ onJoinBeta }: NavigationMenuProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update scroll state for sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={cn(
      "w-full fixed top-0 left-0 z-50 transition-all duration-300",
      isScrolled ? "bg-[#f0f4fa]/90 shadow-md backdrop-blur-sm py-3" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/a404f1e5-bd18-4e6c-8317-cf24e4f5d87d.png" 
            alt="Attune Logo" 
            className="h-16" 
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          <NavigationMenu className="max-w-none">
            <NavigationMenuList className="flex space-x-2">
              {["Problem", "Solution", "Demo", "Pricing", "Features", "Resources", "About"].map((item) => (
                <NavigationMenuItem key={item}>
                  <button 
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-sm font-medium transition-colors hover:text-primary px-3.5 py-2 rounded-xl neumorphic-soft"
                  >
                    {item}
                  </button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button onClick={onJoinBeta} variant="neuDark" className="ml-4">
            Join the Beta
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button variant="neu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="neumorphic-icon p-2">
            <Menu />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#f0f4fa] shadow-lg absolute w-full animate-fade-in neumorphic-inset">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              {["Problem", "Solution", "Demo", "Pricing", "Features", "Resources", "About"].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium py-2.5 px-4 hover:text-primary text-left rounded-lg neumorphic-button"
                >
                  {item}
                </button>
              ))}
              <Button onClick={onJoinBeta} variant="neuDark" className="w-full mt-2">
                Join the Beta
              </Button>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainNavigationMenu;
