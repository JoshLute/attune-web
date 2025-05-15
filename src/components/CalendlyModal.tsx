import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useEffect } from "react";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendlyModal = ({ isOpen, onClose }: CalendlyModalProps) => {
  useEffect(() => {
    if (isOpen) {
      const scriptSrc = "https://assets.calendly.com/assets/external/widget.js";
      if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
        const script = document.createElement("script");
        script.src = scriptSrc;
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] h-[80vh] neumorphic-card bg-[#f0f4fa] border-none">
        <DialogHeader>
          <DialogTitle>Schedule Your Beta Access</DialogTitle>
        </DialogHeader>
        <div className="h-full">
          <div className="w-full h-full min-h-[400px] neumorphic-inset rounded-lg">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/joshuamlute/30min"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
