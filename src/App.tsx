import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import ManagementDashboard from "./pages/ManagementDashboard";
import MisReports from "./pages/MisReports";
import MisDashboard from "./pages/MisDashboard";
import MisDashboardNew from "./pages/MisDashboardNew";
import MisAnalytics from "./pages/MisAnalytics";
import Accounts from "./pages/Accounts";
import Service from "./pages/Service";

// Dispatch Pages
import DispatchDashboard from "./pages/DispatchDashboard";
import DispatchReadyToShip from "./pages/DispatchReadyToShip";
import DispatchDispatched from "./pages/DispatchDispatched";
import DispatchBulkImport from "./pages/DispatchBulkImport";
import DispatchProducts from "./pages/DispatchProducts";
import DispatchCategories from "./pages/DispatchCategories";
import DispatchSubCategory from "./pages/DispatchSubCategory";
import DispatchProductTypes from "./pages/DispatchProductTypes";
import DispatchPackers from "./pages/DispatchPackers";
import DispatchBox from "./pages/DispatchBox";
import DispatchSettings from "./pages/DispatchSettings";
import DispatchDonationProtocols from "./pages/DispatchDonationProtocols";
import DispatchShiprocketSettings from "./pages/DispatchShiprocketSettings";
import DispatchMode from "./pages/DispatchMode";

// DQ Pages
import DQDashboard from "./pages/DQDashboard";
import DQSentToDialler from "./pages/DQSentToDialler";
import DQPending from "./pages/DQPending";
import DQCompleted from "./pages/DQCompleted";
import DailyDQ from "./pages/DailyDQ";
import DQAdmins from "./pages/DQAdmins";
import CultivatorStatus from "./pages/CultivatorStatus";

// Dialler Pages
import DiallerDashboard from "./pages/DiallerDashboard";
import DiallerListNew from "./pages/DiallerListNew";
import DiallerListReview from "./pages/DiallerListReview";
import DiallerAdmins from "./pages/DiallerAdmins";
import Campaigns from "./pages/Campaigns";
import CampaignDashboard from "./pages/campaigns/CampaignDashboard";
import CampaignFilterPage from "./pages/campaigns/CampaignFilterPage";
import DonorPoolPage from "./pages/campaigns/DonorPoolPage";
import Disposition from "./pages/Disposition";
import SubDisposition from "./pages/SubDisposition";

// Miscellaneous Pages
import MergedDonors from "./pages/MergedDonors";
import TaskRunners from "./pages/TaskRunners";
import DiallerCallLogs from "./pages/DiallerCallLogs";

// Existing Pages
import BirthdayModule from "./pages/BirthdayModule";
import BirthdayPage from "./pages/BirthdayPage";
import BirthdayDashboard from "./pages/BirthdayDashboard";
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
import DonorListing from "./pages/DonorListing";
import DonorDetail from "./pages/DonorDetail";
import DonationListing from "./pages/DonationListing";
import DonationDetail from "./pages/DonationDetail";
import NotFound from "./pages/NotFound";
import ReadyToDispatchList from "./pages/ReadyToDispatchList";
import DispatchDetail from "./pages/DispatchDetail";
import AllDQList from "./pages/AllDQList";
import DQDetail from "./pages/DQDetail";
import DiallerListAll from "./pages/DiallerListAll";
import DiallerDetail from "./pages/DiallerDetail";
import Tasks from "./pages/Tasks";
import TaskDetail from "./pages/TaskDetail";
import Analytics from "./pages/Analytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Main Pages */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/management-dashboard" element={<ManagementDashboard />} />
          <Route path="/mis/reports" element={<MisReports />} />
          <Route path="/mis/dashboard" element={<MisDashboard />} />
          <Route path="/mis/dashboard-new" element={<MisDashboardNew />} />
          <Route path="/mis/analytics" element={<MisAnalytics />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/service" element={<Service />} />
          
          {/* Donor and Donation Pages */}
          <Route path="/donors" element={<DonorListing />} />
          <Route path="/donors/:id" element={<DonorDetail />} />
          <Route path="/donations" element={<DonationListing />} />
          <Route path="/donations/:id" element={<DonationDetail />} />
          <Route path="/donations/subscriptions" element={<DonationListing />} />
          <Route path="/donations/sales" element={<DonationListing />} />
          
          {/* Dispatch Pages */}
          <Route path="/dispatch/dashboard" element={<DispatchDashboard />} />
          <Route path="/dispatch/ready-to-dispatch" element={<ReadyToDispatchList />} />
          <Route path="/dispatch/ready-to-ship" element={<DispatchReadyToShip />} />
          <Route path="/dispatch/dispatched" element={<DispatchDispatched />} />
          <Route path="/dispatch/bulk-import" element={<DispatchBulkImport />} />
          <Route path="/dispatch/products" element={<DispatchProducts />} />
          <Route path="/dispatch/categories" element={<DispatchCategories />} />
          <Route path="/dispatch/sub-category" element={<DispatchSubCategory />} />
          <Route path="/dispatch/product-types" element={<DispatchProductTypes />} />
          <Route path="/dispatch/packers" element={<DispatchPackers />} />
          <Route path="/dispatch/box" element={<DispatchBox />} />
          <Route path="/dispatch/settings" element={<DispatchSettings />} />
          <Route path="/dispatch/donation-protocols" element={<DispatchDonationProtocols />} />
          <Route path="/dispatch/shiprocket-settings" element={<DispatchShiprocketSettings />} />
          <Route path="/dispatch/dispatch-mode" element={<DispatchMode />} />
          <Route path="/dispatch/details/:id" element={<DispatchDetail />} />
          
          {/* DQ Pages */}
          <Route path="/dq/dashboard" element={<DQDashboard />} />
          <Route path="/dq/sent-to-dialler" element={<DQSentToDialler />} />
          <Route path="/dq/pending" element={<DQPending />} />
          <Route path="/dq/completed" element={<DQCompleted />} />
          <Route path="/dq/all" element={<AllDQList />} />
          <Route path="/dq/daily-dq" element={<DailyDQ />} />
          <Route path="/dq/admins" element={<DQAdmins />} />
          <Route path="/dq/cultivator-status" element={<CultivatorStatus />} />
          <Route path="/dq/details/:id" element={<DQDetail />} />
          
          {/* Dialler Pages */}
          <Route path="/dialler/dashboard" element={<DiallerDashboard />} />
          <Route path="/dialler/list-new" element={<DiallerListNew />} />
          <Route path="/dialler/list-review" element={<DiallerListReview />} />
          <Route path="/dialler/list-all" element={<DiallerListAll />} />
          <Route path="/dialler/admins" element={<DiallerAdmins />} />
          <Route path="/dialler/campaigns" element={<Campaigns />} />
          <Route path="/dialler/disposition" element={<Disposition />} />
          <Route path="/dialler/sub-disposition" element={<SubDisposition />} />
          <Route path="/dialler/details/:id" element={<DiallerDetail />} />
          
          {/* Campaign Module Pages */}
          <Route path="/campaigns" element={<CampaignDashboard />} />
          <Route path="/campaigns/:id/filters" element={<CampaignFilterPage />} />
          <Route path="/campaigns/:id/pool" element={<DonorPoolPage />} />
          
          {/* Miscellaneous Pages */}
          <Route path="/miscellaneous/merged-donors" element={<MergedDonors />} />
          <Route path="/miscellaneous/task-runners" element={<TaskRunners />} />
          <Route path="/miscellaneous/dialler-call-logs" element={<DiallerCallLogs />} />
          
          {/* Tasks and Analytics */}
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/:id" element={<TaskDetail />} />
          <Route path="/analytics" element={<Analytics />} />
          
          {/* Birthday Pages - New Routes */}
          <Route path="/birthday" element={<BirthdayModule />} />
          <Route path="/birthday/dashboard" element={<BirthdayDashboard />} />
          <Route path="/birthday-page" element={<BirthdayPage />} />
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
