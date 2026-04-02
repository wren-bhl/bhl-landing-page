import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Hotels from "@/pages/hotels";

function App() {
  return (
    <TooltipProvider>
      <Hotels />
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
