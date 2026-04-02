import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Hotels from "@/pages/hotels";
import Residential from "@/pages/residential";
import Fitness from "@/pages/fitness";
import Athletics from "@/pages/athletics";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Hotels} />
      <Route path="/residential" component={Residential} />
      <Route path="/fitness" component={Fitness} />
      <Route path="/athletics" component={Athletics} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
