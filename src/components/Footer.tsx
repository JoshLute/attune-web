import { Button } from "@/components/ui/button";
interface FooterProps {
  onJoinBeta: () => void;
}
const Footer = ({
  onJoinBeta
}: FooterProps) => {
  return <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Attune</h3>
            <p className="text-slate-300 mb-6 max-w-md">
              Real-time EEG insights that let neurodivergent students thrive. Creating more inclusive and effective learning environments.
            </p>
            <Button onClick={onJoinBeta} variant="neuDark" className="border-[#1A1F2C] hover:border-[#222733]">
              Join the Beta
            </Button>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white">About</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white">Features</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white">Resources</a></li>
            </ul>
          </div>
          
          <div>
            
            <ul className="space-y-2">
              
              
              
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Attune. All rights reserved.
          </p>
          
          
        </div>
      </div>
    </footer>;
};
export default Footer;