import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Athletics from "@/pages/athletics";

function App() {
  return (
    <TooltipProvider>
      <Athletics />
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
