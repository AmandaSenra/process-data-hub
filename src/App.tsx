import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import GroupView from "./pages/GroupView";
import StateView from "./pages/StateView";
import UnitView from "./pages/UnitView";
import ProcessView from "./pages/ProcessView";
import { ProcessForm } from "./components/ProcessForm";
import Index from './pages/Index';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <MainLayout>
          <nav className="bg-white shadow-lg p-4">
            <Link 
              to="/" 
              className="text-2xsl font-bold text-[#0C5EA3] hover:text-[#094679]"
            >
              YDUQS
            </Link>
          </nav>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/group/:groupId" element={<Index />} />
            <Route path="/group/:groupId/state/:state" element={<StateView />} />
            <Route path="/group/:groupId/state/:state/unit/:unitId" element={<UnitView />} />
            <Route path="/group/:groupId/state/:state/unit/:unit/process/:processId" element={<ProcessView />} />
            <Route path="/group/:groupId/state/:state/unit/:unit/new" element={<ProcessForm />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;