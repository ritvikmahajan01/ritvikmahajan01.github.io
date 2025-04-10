
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Ideas from "./pages/Ideas";
import CV from "./pages/CV";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Using HashRouter for GitHub Pages compatibility */}
      <HashRouter>
        <Navbar />
        <main className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/ideas" element={<Ideas />} />
            <Route path="/cv" element={<CV />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
