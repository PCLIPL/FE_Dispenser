import { Authenticated, GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';


import {
  ErrorComponent,
  notificationProvider,
  RefineSnackbarProvider,
  ThemedLayoutV2,
} from "@refinedev/mui";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import dataProvider, {
  GraphQLClient,
  liveProvider,
} from "@refinedev/nestjs-query";
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { createClient } from "graphql-ws";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { authProvider } from "./authProvider";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import {
  BlogPostCreate,
  BlogPostEdit,
  BlogPostList,
  BlogPostShow,
} from "./pages/blog-posts";
import {
  CategoryCreate,
  CategoryEdit,
  CategoryList,
  CategoryShow,
} from "./pages/categories";
import { ForgotPassword } from "./pages/forgotPassword";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { resources } from "./config/resources";
// import Home from "./pages/home";
import { Home } from "./pages";

import {CreateCompanies, EditCompanies,ShowCompanies,ListCompanies} from './pages/companies'
import { useMenu } from "@refinedev/core";
import {ListUserRegistration,CraeteUserRegistartion,EditUserRegistration,ShowUserRegistration} from './pages/userregistration'
import { PurchseFormList,CreatePurchaseForm,ShowPurchaseForm,EditPurchaseForm } from "./pages/purchaseregistration";
import { CreatePurchaseRfq,ListPurchaseRfq,ShowPurchaseRfq,EditPurchaseRfq} from "./pages/purchaserfq";
import { CreatePurhcaseOrder,ListPurchaseOrder,ShowPurchaseOrder,EditPurchaseOrder } from "./pages/purchaseorder";
import { CreatePuechaseSupplierEvolution,ListPurchaseSupplierEvolution,ShowPurchaseSupplierEvolution,EditPurchaseSupplierEvolution } from "./pages/purchsesupplierevaluation";
import { CreateConfiguration, ListConfiguration, ShowConfiguration,EditConfiguration } from "./pages/configuration";
import { CreateSales,ListSales,ShowSales,Editsalse } from "./pages/sales";
import { CreateInvoice,ListInvoice,ShowInvoice,EditInvoice } from "./pages/invoice";
import { CreateBugReport,ListBugReport,ShowBugReport,EditBugReport } from "./pages/bugreport";
import { CreateNewPurchase,ListNewPurchase,ShowNewPurchase,EditNewPurchase } from "./pages/newpurchase";

import SetSaleRateFuelForm from "./pages/set-sale-rate/create";
import AddPumpMaintenanceTaskForm from "./pages/add-pump-maintanace/create";
import CalibrateDispenserForm from "./pages/calibrate-dispenser/create";
import LockUnlockDispenserForm from "./pages/lock-unlock-dispenser/create";
import ModifyDispenserConfigForm from "./pages/modify-dispenser-config/create";
import UpdateBackupToHardwareForm from "./pages/update-backup-to-hardware/create";

import './index.css';
import Layout from './components/Layout';
import TabLayout from "./components/TabLayout";
import { TabProvider } from "./contexts/TabContext";
import DynamicTabs from "./components/DynamicTabs";
import CheckStocksConsumptionForm from "./pages/check-stocks-consumption/create";
import FuelStockAdjustmentForm from "./pages/fuel-stock-adjustment/create";
import FuelQualityCheckForm from "./pages/fuel-quality-check/create";
import FuelSettlementForm from "./pages/fuel-settlement/create";
import SetTransactionLimitsForm from "./pages/set-transaction-limits/create";
import SetSalariesWeeklyOffsForm from "./pages/set-salaries-weekly-offs/create";
import SetDiscountsMarketingOffersForm from "./pages/set-discounts-marketing-offers/create";
import AddDailyAttendanceForm from "./pages/add-daily-attendance/create";
import GeneratePOForm from "./pages/generate-po/create";
import GeneratePODefPurchaseForm from "./pages/generate-po-def-purchase/create";
import SalesInvoiceForm from "./pages/sales-invoice/create";
import PurchaseDataForm from "./pages/purchase-data/create";
import AddInventoryForm from "./pages/add-inventory/create";
import GeneratePOInventoryItemsForm from "./pages/generate-po-inventory-items/create";
import AddStockInventoryForm from "./pages/add-stock-inventory/create";
import AddEmployeeForm from "./pages/add-employee/create";
import AddVendorForm from "./pages/add-vendor/create";
import AddCustomerForm from "./pages/add-customer/create";
import ApprovalFormEmployee from "./pages/approval-form-employee/create";
import PerformanceEvaluationForm from "./pages/performance-evaluation/create";
import SetRostersWorkingShiftsForm from "./pages/set-rosters-working-shifts/create";
import AddFleetOwnerForm from "./pages/add-fleet-owner/create";
import AddFleetVehicleForm from "./pages/add-fleet-vehicle/create";
import NewDispenserRegistrationForm from "./pages/new-dispenser-registration/create";
import MaintenanceScheduleRecordsForm from "./pages/maintenance-schedule-records/create";
import SupportForm from "./pages/support/create";
import TransactionReportForm from "./pages/transaction-report/create";
import AddHealthAAndSafety from "./pages/add-health-safety/create";
import GenerateSalesInvoice from "./pages/generate-sale-invoice/create";
import DiscountManagement from "./pages/discount-management/create";
import LoyaltyProgramme from "./pages/loyalty-programme/create";
import SetProductRate from "./pages/set-product-rate/create";
import RateVariation from "./pages/rate-variation/create";
import AddJournal from "./pages/add-journal/create";
import AddDebitNote from "./pages/add-dabit-note/create";
import AddCreditNote from "./pages/add-credit-note/create";
import LedgerCreation from "./pages/ledger-creation/create";
import GstReport from "./pages/gst-report/create";
import CashVoucherRequest from "./pages/cash-voucher-request/create";
import CashCollections from "./pages/cash-collections/create";
import BalanceSheet from "./pages/balance-sheet/create";
import PendingAmounts from "./pages/pending-amounts/create";
import FinalAccountsForm from "./pages/final-accounts-form/create";
import FuelSettlement from "./pages/fuel-settlement/create";
import SetAccessRights from "./pages/set-access-rights/create";
import View from "./pages/view/create";
import AddEmployeeDef from "./pages/add-employee-def/create";




const API_URL = "https://api.nestjs-query.refine.dev/graphql";
const WS_URL = "wss://api.nestjs-query.refine.dev/graphql";

const gqlClient = new GraphQLClient(API_URL);
const wsClient = createClient({ url: WS_URL });

function App() {
  
  return (
    <BrowserRouter>
      {/* <GitHubBanner />// */}
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
            <DevtoolsProvider>
            
              <Refine
                dataProvider={dataProvider(gqlClient)}
                liveProvider={liveProvider(wsClient)}
                notificationProvider={notificationProvider}
                routerProvider={routerBindings}
                authProvider={authProvider}
                resources={resources}
                //   {
                //     name: "Dashboards",
                //     list: "/",
                //     create: "/",
                //     edit: "/",
                //     show: "/",
                //     icon:<AddHomeOutlinedIcon/>,
                //     meta: {
                     
                //     },
                //   },
                //   {
                //     name: "blog_posts",
                //     list: "/blog-posts",
                //     create: "/blog-posts/create",
                //     edit: "/blog-posts/edit/:id",
                //     show: "/blog-posts/show/:id",
                //     meta: {
                //       canDelete: true,
                //     },
                //   },
                //   {
                //     name: "categories",
                //     list: "/categories",
                //     create: "/categories/create",
                //     edit: "/categories/edit/:id",
                //     show: "/categories/show/:id",
                //     meta: {
                //       canDelete: true,
                //     },
                //   },
                //   {
                //     name: "Dispenser",
                //     list: "/",
                //     create: "",
                //     edit: "",
                //     show: "",
                //     icon:<AddHomeOutlinedIcon/>,
                //     meta: {
                //       canDelete: true,
                //     },
                    
                //   },
                // }
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "XNG3gT-Qy43Gs-HdJsT1",
                  liveMode: "auto",
                }}
              >
                <Routes>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-inner"
                        fallback={<CatchAllNavigate to="/login" />}
                      >
                        <ThemedLayoutV2 Header={Header}>
                             {/* <TabLayout /> */}
                             {/* <DynamicTabs/>     */}
                            <Outlet />
                          
                        </ThemedLayoutV2>
                      </Authenticated>
                    }
                  >
                    <Route
                      index
                      element={<Home />}
                      // {<NavigateToResource resource="blog_posts" />}
                    />
                    <Route path="/blog-posts">
                      <Route index element={<BlogPostList />} />
                      <Route path="create" element={<BlogPostCreate />} />
                      <Route path="edit/:id" element={<BlogPostEdit />} />
                      <Route path="show/:id" element={<BlogPostShow />} />
                    </Route>
                    <Route path="/categories">
                      <Route index element={<CategoryList />} />
                      <Route path="create" element={<CategoryCreate />} />
                      <Route path="edit/:id" element={<CategoryEdit />} />
                      <Route path="show/:id" element={<CategoryShow />} />
                    </Route>
                    <Route path="/companies">
                      <Route index element={<ListCompanies/>} />
                      <Route path="create" element={<CreateCompanies />} />
                      <Route path="edit/:id" element={<EditCompanies/>} />
                      <Route path="show/:id" element={<ShowCompanies/>} />
                    </Route>
                    <Route path="/userregistration">
                      <Route index element={<ListUserRegistration/>} />
                      <Route path="create" element={<CraeteUserRegistartion />} />
                      <Route path="edit/:id" element={<EditUserRegistration/>} />
                      <Route path="show/:id" element={<ShowUserRegistration/>} />
                    </Route>
                    <Route path="/purchaseregistration">
                      <Route index element={<PurchseFormList/>} />
                      <Route path="create" element={<CreatePurchaseForm />} />
                      <Route path="edit/:id" element={<EditPurchaseForm/>} />
                      <Route path="show/:id" element={<ShowPurchaseForm/>} />
                    </Route>
                    <Route path="/purchaserfq">
                      <Route index element={<ListPurchaseRfq/>} />
                      <Route path="create" element={<CreatePurchaseRfq />} />
                      <Route path="edit/:id" element={<EditPurchaseRfq/>} />
                      <Route path="show/:id" element={<ShowPurchaseRfq/>} />
                    </Route>
                    <Route path="/purchaseorder">
                      <Route index element={<ListPurchaseOrder/>} />
                      <Route path="create" element={<CreatePurhcaseOrder />} />
                      <Route path="edit/:id" element={<EditPurchaseOrder/>} />
                      <Route path="show/:id" element={<ShowPurchaseOrder/>} />
                    </Route>
                    <Route path="/purchasesupplierevaluation">
                      <Route index element={<ListPurchaseSupplierEvolution/>} />
                      <Route path="create" element={<CreatePuechaseSupplierEvolution />} />
                      <Route path="edit/:id" element={<EditPurchaseSupplierEvolution/>} />
                      <Route path="show/:id" element={<ShowPurchaseSupplierEvolution/>} />
                    </Route>
                    <Route path="/configuration">
                      <Route index element={<ListConfiguration/>} />
                      <Route path="create" element={<CreateConfiguration />} />
                      <Route path="edit/:id" element={<EditConfiguration/>} />
                      <Route path="show/:id" element={<ShowConfiguration/>} />
                    </Route>
                    <Route path="/sales">
                      <Route index element={<ListSales/>} />
                      <Route path="create" element={<CreateSales />} />
                      <Route path="edit/:id" element={<Editsalse/>} />
                      <Route path="show/:id" element={<ShowSales/>} />
                    </Route>
                    <Route path="/invoice">
                      <Route index element={<ListInvoice/>} />
                      <Route path="create" element={<CreateInvoice />} />
                      <Route path="edit/:id" element={<EditInvoice/>} />
                      <Route path="show/:id" element={<ShowInvoice/>} />
                    </Route>
                    <Route path="/bugreport">
                      <Route index element={<ListBugReport/>} />
                      <Route path="create" element={<CreateBugReport />} />
                      <Route path="edit/:id" element={<EditBugReport/>} />
                      <Route path="show/:id" element={<ShowBugReport/>} />
                    </Route>
                    <Route path="/newpurchase">
                      <Route index element={<ListNewPurchase/>} />
                      <Route path="create" element={<CreateNewPurchase />} />
                      <Route path="edit/:id" element={<EditNewPurchase/>} />
                      <Route path="show/:id" element={<ShowNewPurchase/>} />
                    </Route>
                    <Route path="/setsaleratefuel">
                      <Route index element={<SetSaleRateFuelForm/>} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/addpumpmaintenance">
                      <Route index element={<AddPumpMaintenanceTaskForm/>} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/calibratedispenser">
                      <Route index element={<CalibrateDispenserForm/>} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/lockunlockdispenser">
                      <Route index element={<LockUnlockDispenserForm/>} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>

                    <Route path="/modifydispenserconfig">
                      <Route index element={<ModifyDispenserConfigForm />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/updatebackuptohardware">
                      <Route index element={<UpdateBackupToHardwareForm  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/checkstocksconsumption">
                      <Route index element={<CheckStocksConsumptionForm  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/fuelstockadjustment">
                      <Route index element={<FuelStockAdjustmentForm  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/fuelqualitycheck">
                      <Route index element={<FuelQualityCheckForm  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/fuelsettlement">
                      <Route index element={<FuelSettlementForm  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/settransactionlimits">
                      <Route index element={<SetTransactionLimitsForm  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/setsalariesweeklyoffs">
                      <Route index element={<SetSalariesWeeklyOffsForm  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/setdiscountsmarketingoffers">
                      <Route index element={<SetDiscountsMarketingOffersForm  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/adddailyattendance">
                      <Route index element={<AddDailyAttendanceForm  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/generatepo">
                      <Route index element={<GeneratePOForm  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/generatepodefpurchase">
                      <Route index element={<GeneratePODefPurchaseForm  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/salesinvoice">
                      <Route index element={<SalesInvoiceForm  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/purchasedata">
                      <Route index element={<PurchaseDataForm  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>

                    <Route path="/addinventory">
                      <Route index element={<AddInventoryForm  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/generatepoinventoryitems">
                      <Route index element={<GeneratePOInventoryItemsForm  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/addstockinventory">
                      <Route index element={<AddStockInventoryForm  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>

                    <Route path="/addvendor">
                      <Route index element={<AddVendorForm  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/addcustomer">
                      <Route index element={<AddCustomerForm  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/approvalformemployee">
                      <Route index element={<ApprovalFormEmployee  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/performanceevaluation">
                      <Route index element={<PerformanceEvaluationForm  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/setrostersworkingshifts">
                      <Route index element={<SetRostersWorkingShiftsForm  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/addfleetowner">
                      <Route index element={<AddFleetOwnerForm  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/addfleetvehicle">
                      <Route index element={<AddFleetVehicleForm  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/newdispenserregistration">
                      <Route index element={<NewDispenserRegistrationForm  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/maintenanceschedulerecords">
                      <Route index element={<MaintenanceScheduleRecordsForm  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/support">
                      <Route index element={<SupportForm  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/transactionreport">
                      <Route index element={<TransactionReportForm  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/addhealthandsafety">
                      <Route index element={<AddHealthAAndSafety  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/generatesalesinvoice">
                      <Route index element={<GenerateSalesInvoice  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/discountmanegement">
                      <Route index element={<DiscountManagement  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/loyaltyprogramme">
                      <Route index element={<LoyaltyProgramme  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/setproductrate">
                      <Route index element={<SetProductRate  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/ratevariation">
                      <Route index element={<RateVariation  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/addjournal">
                      <Route index element={<AddJournal  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/adddebitnote">
                      <Route index element={<AddDebitNote  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/addcreditnote">
                      <Route index element={<AddCreditNote  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/ledgercreation">
                      <Route index element={<LedgerCreation  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/gstreport">
                      <Route index element={<GstReport  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/cashvoucherrequest">
                      <Route index element={<CashVoucherRequest  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/cashcollections">
                      <Route index element={<CashCollections  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/balancesheet">
                      <Route index element={<BalanceSheet  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/pendingamounts">
                      <Route index element={<PendingAmounts  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/finalaccountsform">
                      <Route index element={<FinalAccountsForm  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/fuelsettlement">
                      <Route index element={<FuelSettlement  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/setaccessrights">
                      <Route index element={<SetAccessRights  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/view">
                      <Route index element={<View  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    <Route path="/addemployee  
                    ">
                      <Route index element={<AddEmployeeDef  />} />
                      {/* <Route path="create" element={<SetSaleRateFuelForm />} /> */}
                      
                    </Route>
                    



















                    <Route path="*" element={<ErrorComponent />} />
                  </Route>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-outer"
                        fallback={<Outlet />}
                      >
                        <NavigateToResource />
                      </Authenticated>
                    }
                  >
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                      path="/forgot-password"
                      element={<ForgotPassword />}
                    />
                  </Route>
                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
            
              <DevtoolsPanel />
            </DevtoolsProvider>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
