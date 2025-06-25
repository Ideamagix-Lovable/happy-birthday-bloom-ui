
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BirthdayModule from "./pages/BirthdayModule";
import BirthdayDispatchDetail from "./pages/BirthdayDispatchDetail";
import BirthdayDispatchEdit from "./pages/BirthdayDispatchEdit";
import DispatchQueueEdit from "./pages/DispatchQueueEdit";
import LotDetail from "./pages/LotDetail";
import ShipmentTrackingDetail from "./pages/ShipmentTrackingDetail";
import KitchenReportDetail from "./pages/KitchenReportDetail";
import CultivatorReport from "./pages/CultivatorReport";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/birthday" element={<BirthdayModule />} />
          <Route path="/birthday/dispatch/:id" element={<BirthdayDispatchDetail />} />
          <Route path="/birthday/dispatch/edit/:id" element={<BirthdayDispatchEdit />} />
          <Route path="/birthday/queue/edit/:id" element={<DispatchQueueEdit />} />
          <Route path="/birthday/lot/:lotNumber" element={<LotDetail />} />
          <Route path="/birthday/shipment/:awbNumber" element={<ShipmentTrackingDetail />} />
          <Route path="/birthday/kitchen-report" element={<KitchenReportDetail />} />
          <Route path="/birthday/cultivator-report" element={<CultivatorReport />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
