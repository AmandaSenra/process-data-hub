import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import GroupView from "./pages/GroupView";
import StateView from "./pages/StateView";
import UnitView from "./pages/UnitView";
import { ProcessForm } from "./components/ProcessForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/group/ibmec" replace />} />
            <Route path="/group/:groupId" element={<GroupView />} />
            <Route path="/group/:groupId/state/:state" element={<StateView />} />
            <Route path="/group/:groupId/state/:state/unit/:unit" element={<UnitView />} />
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