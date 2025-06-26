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
import BulkDispatch from "./components/birthday/BulkDispatch";
import EmergencyDispatch from "./components/birthday/EmergencyDispatch";
import ScheduleDispatch from "./components/birthday/ScheduleDispatch";
import DispatchSettings from "./components/birthday/DispatchSettings";
import DonorListing from "./pages/DonorListing";
import DonorDetail from "./pages/DonorDetail";
import DonationListing from "./pages/DonationListing";
import DonationDetail from "./pages/DonationDetail";
import NotFound from "./pages/NotFound";
import ReadyToDispatchList from "./pages/ReadyToDispatchList";
import DispatchDetail from "./pages/DispatchDetail";
import AllDQList from "./pages/AllDQList";
import DQDetail from "./pages/DQDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/donors" element={<DonorListing />} />
          <Route path="/donors/:id" element={<DonorDetail />} />
          <Route path="/donations" element={<DonationListing />} />
          <Route path="/donations/:id" element={<DonationDetail />} />
          <Route path="/dispatch/ready-to-dispatch" element={<ReadyToDispatchList />} />
          <Route path="/dispatch/details/:id" element={<DispatchDetail />} />
          <Route path="/dq/all" element={<AllDQList />} />
          <Route path="/dq/details/:id" element={<DQDetail />} />
          <Route path="/birthday" element={<BirthdayModule />} />
          <Route path="/birthday/dispatch/:id" element={<BirthdayDispatchDetail />} />
          <Route path="/birthday/dispatch/edit/:id" element={<BirthdayDispatchEdit />} />
          <Route path="/birthday/queue/edit/:id" element={<DispatchQueueEdit />} />
          <Route path="/birthday/lot/:lotNumber" element={<LotDetail />} />
          <Route path="/birthday/shipment/:awbNumber" element={<ShipmentTrackingDetail />} />
          <Route path="/birthday/kitchen-report" element={<KitchenReportDetail />} />
          <Route path="/birthday/cultivator-report" element={<CultivatorReport />} />
          <Route path="/birthday/bulk-dispatch" element={<BulkDispatch />} />
          <Route path="/birthday/emergency-dispatch" element={<EmergencyDispatch />} />
          <Route path="/birthday/schedule-dispatch" element={<ScheduleDispatch />} />
          <Route path="/birthday/settings" element={<DispatchSettings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
