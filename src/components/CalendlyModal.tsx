
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendlyModal = ({ isOpen, onClose }: CalendlyModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] h-[80vh] neumorphic-card bg-[#f0f4fa] border-none">
        <DialogHeader>
          <DialogTitle>Schedule Your Beta Access</DialogTitle>
        </DialogHeader>
        <div className="h-full">
          {/* In a production environment, replace with actual Calendly embed */}
          <div className="w-full h-full min-h-[400px] neumorphic-inset rounded-lg flex items-center justify-center">
            <div className="text-center p-6">
              <h3 className="text-xl font-bold mb-4">Calendly Integration</h3>
              <p className="text-gray-600 mb-4">
                Here you would embed your Calendly scheduling widget for beta signups.
              </p>
              <p className="text-sm text-gray-500">
                (In production, replace this with the actual Calendly embed code)
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
