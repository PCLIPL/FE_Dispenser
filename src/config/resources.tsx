import { IResourceItem } from "@refinedev/core";
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import { ShopOutlined } from "@mui/icons-material";
import { VillaOutlined} from "@mui/icons-material";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BugReportIcon from '@mui/icons-material/BugReport';
import PortraitIcon from '@mui/icons-material/Portrait';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import StoreIcon from '@mui/icons-material/Store';
import LineStyleIcon from '@mui/icons-material/LineStyle';

import { useMenu } from "@refinedev/core";

export const resources: IResourceItem[] = [
    
    {
        name:'pumpcompany',
        list:'/',
        meta:{
            label:'Pump Company',
            icon:<AddHomeOutlinedIcon/>
        }
    },
    
{
    name:'assets',
    meta:{
       label:'Assets',
    //    icon:<AppRegistrationIcon />
    }
},

{
    name:'dispenser',
    meta:{
       parent:'assets',
       label:'Dispenser',

    //    icon:<AppRegistrationIcon />
    }
},

{
    name:'view',
    
    list:'/view',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'dispenser',
        label:'View',
        icon:<BugReportIcon/>
    }
},


{
    name:'newdispenserregistration',
    
    list:'/newdispenserregistration',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'dispenser',
        label:'New Dispenser Registration',
        icon:<BugReportIcon/>
    }
},

{
    name:'modifydispenserconfig',
    
    list:'/modifydispenserconfig',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'assets',
        label:'Modify Dispenser Config',
        icon:<BugReportIcon/>
    }
},


{
    name:'lockunlockdispenser',
    
    list:'/lockunlockdispenser',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'assets',
        label:'Lock Unlock Dispenser',
        icon:<BugReportIcon/>
    }
},
{
    name:'addfleetowner',
    
    list:'/addfleetowner',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'assets',
        label:'Add Fleet Owner',
        icon:<BugReportIcon/>
    }
},

{
    name:'addfleetvehicle',
    
    list:'/addfleetvehicle',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'assets',
        label:'Add Fleet Vehicle',
        icon:<BugReportIcon/>
    }
},



{
    name:'calibratedispenser',
    
    list:'/calibratedispenser',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'assets',
        label:'Calibrate Dispenser',
        icon:<BugReportIcon/>
    }
},

{
    name:'checkstocksconsumption',
    
    list:'/checkstocksconsumption',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'assets',
        label:'Check Stocks Consumption',
        icon:<BugReportIcon/>
    }
},
{
    name:'addhealthandsafety',
    
    list:'/addhealthandsafety',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'assets',
        label:'Add Health And Safety',
        icon:<BugReportIcon/>
    }
},

{
    name:'maintenanceschedulerecords',
    
    list:'/maintenanceschedulerecords',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'assets',
        label:'Maintenance Schedule records',
        icon:<BugReportIcon/>
    }
},

{
    name:'fuelstockadjustment',
    
    list:'/fuelstockadjustment',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'assets',
        label:'Fuel Stock Adjustment',
        icon:<BugReportIcon/>
    }
},


{
    name:'addstockinventory',
    
    list:'/addstockinventory',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'assets',
        label:'Add Stock Inventory',
        icon:<BugReportIcon/>
    }
},




{
    name:'fuelqualitycheck',
    
    list:'/fuelqualitycheck',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'assets',
        label:'Fuel Quality Check',
        icon:<BugReportIcon/>
    }
},




//SALES=======================================================================================


{
    name:'sales',
    meta:{
       label:'Sales',
    //    icon:<AppRegistrationIcon />
    }
},

{
    name:'setsaleratefuel',
    
    list:'/setsaleratefuel',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'sales',
        label:'Set Sale Rate Fuel',
        icon:<BugReportIcon/>
    }
},

{
    name:'generatepo',
    
    list:'/generatepo',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'sales',
        label:'Generate Po',
        icon:<BugReportIcon/>
    }
},

{
    name:'salesinvoice',
    
    list:'/salesinvoice',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'sales',
        label:'Sales Invoice',
        icon:<BugReportIcon/>
    }
},



{
    name:'generatesalesinvoice',
    
    list:'/generatesalesinvoice',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'sales',
        label:'Generate Sales Invoice',
        icon:<BugReportIcon/>
    }
},

{

name:'discountmanegement',
    
list:'/discountmanegement',
// edit:'/bugreport/edit/:id',
    meta:{
        parent:'sales',
        label:'Discount Management',
        icon:<BugReportIcon/>
    }
},

{

name:'loyaltyprogramme',
    
list:'/loyaltyprogramme',
// edit:'/bugreport/edit/:id',
    meta:{
        parent:'sales',
        label:'Loyalty Programme',
        icon:<BugReportIcon/>
    }
},

{

name:'setproductrate',
    
list:'/setproductrate',
// edit:'/bugreport/edit/:id',
    meta:{
        parent:'sales',
        label:'Set Product Rate',
        icon:<BugReportIcon/>
    }
},



//PURCHASE----------------------------------------------------------------------------

{
    name:'purchase',
    meta:{
       label:'Purchase',
    //    icon:<AppRegistrationIcon />
    }
},

{
    name:'generatepodefpurchase',
    
    list:'/generatepodefpurchase',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'purchase',
        label:'Generate Po Def Purchase',
        icon:<BugReportIcon/>
    }
},

{
    name:'addinventory',
    
    list:'/addinventory',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'purchase',
        label:'Add Inventory',
        icon:<BugReportIcon/>
    }
},

{
    name:'addvendor',
    
    list:'/addvendor',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'purchase',
        label:'Add Vendor',
        icon:<BugReportIcon/>
    }
},

{
    name:'generatepoinventoryitems',
    
    list:'/generatepoinventoryitems',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'purchase',
        label:'Generate Po Inventory items',
        icon:<BugReportIcon/>
    }
},

{
    name:'ratevariation',
    
    list:'/ratevariation',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'purchase',
        label:'Rate Variation',
        icon:<BugReportIcon/>
    }
},



//Accounts

{
    name:'accounts',
    meta:{
       label:'Accounts',
    //    icon:<AppRegistrationIcon />
    }
},


{
    name:'purchasedata',
    
    list:'/purchasedata',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'accounts',
        label:'Purchase Data',
        icon:<BugReportIcon/>
    }
},

{
    name:'addjournal',
    
    list:'/addjournal',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'accounts',
        label:'Purchase Data',
        icon:<BugReportIcon/>
    }
},

{
    name:'adddebitnote',
    
    list:'/adddebitnote',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'accounts',
        label:'Add Debit Note',
        icon:<BugReportIcon/>
    }
},

{
    name:'addcreditnote',
    
    list:'/addcreditnote',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'accounts',
        label:'Add Credit Note',
        icon:<BugReportIcon/>
    }
},
{
    name:'ledgercreation',
    
    list:'/ledgercreation',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'accounts',
        label:'Ledger Creation',
        icon:<BugReportIcon/>
    }
},
{
    name:'gstreport',
    
    list:'/gstreport',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'accounts',
        label:'GST Report',
        icon:<BugReportIcon/>
    }
},
{
    name:'cashvoucherrequest',
    
    list:'/cashvoucherrequest',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'accounts',
        label:'Cash Voucher Request',
        icon:<BugReportIcon/>
    }
},
{
    name:'cashcollections',
    
    list:'/cashcollections',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'accounts',
        label:'Cash Collections',
        icon:<BugReportIcon/>
    }
},
{
    name:'balancesheet',
    
    list:'/balancesheet',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'accounts',
        label:'Balance Sheet',
        icon:<BugReportIcon/>
    }
},
{
    name:'pendingamounts',
    
    list:'/pendingamounts',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'accounts',
        label:'Pending Amounts',
        icon:<BugReportIcon/>
    }
},
{
    name:'finalaccountsform',
    
    list:'/finalaccountsform',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'accounts',
        label:'Final Accounts Form',
        icon:<BugReportIcon/>
    }
},
{
    name:'fuelsettlement',
    
    list:'/fuelsettlement',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'accounts',
        label:'Fuel Settlement',
        icon:<BugReportIcon/>
    }
},







//Employee Management

{
    name:'employeemanagement',
    meta:{
       label:'Employee Management',
    //    icon:<AppRegistrationIcon />
    }
},

{
    name:'addemployee',
    
    list:'/addemployee',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'employeemanagement',
        label:'Add Employee',
        icon:<BugReportIcon/>
    }
},
{
    name:'setaccessrights',
    
    list:'/setaccessrights',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'employeemanagement',
        label:'Set Access Rights',
        icon:<BugReportIcon/>
    }
},

{
    name:'approvalformemployee',
    
    list:'/approvalformemployee',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'employeemanagement',
        label:'Approval Form Employee',
        icon:<BugReportIcon/>
    }
},

{
    name:'setrostersworkingshifts',
    
    list:'/setrostersworkingshifts',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'employeemanagement',
        label:'Set Rosters Working Shifts',
        icon:<BugReportIcon/>
    }
},

{
    name:'adddailyattendance',
    
    list:'/adddailyattendance',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'employeemanagement',
        label:'Add Daily Attendance',
        icon:<BugReportIcon/>
    }
},

{
    name:'performanceevaluation',
    
    list:'/performanceevaluation',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'employeemanagement',
        label:'Performance Evaluation',
        icon:<BugReportIcon/>
    }
},


{
    name:'setsalariesweeklyoffs',
    
    list:'/setsalariesweeklyoffs',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'employeemanagement',
        label:'Set Salaries Weekly Offs',
        icon:<BugReportIcon/>
    }
},

{
    name:'addpumpmaintenance',
    
    list:'/addpumpmaintenance',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'employeemanagement',
        label:'Add Pump Maintenance Task',
        icon:<BugReportIcon/>
    }
},


//CUSTOMERS-------------------------------------------------------------------------------------

{
    name:'customer',
    meta:{
       label:'Customer',
    //    icon:<AppRegistrationIcon />
    }
},


{
    name:'addcustomer',
    
    list:'/addcustomer',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'customer',
        label:'Add Customer',
        icon:<BugReportIcon/>
    }
},


{
    name:'addnfccard',
    
    list:'/addnfccard',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'customer',
        label:'Add Nfc Card',
        icon:<BugReportIcon/>
    }
},

{
    name:'settransactionlimits',
    
    list:'/settransactionlimits',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'customer',
        label:'Set Transaction Limits',
        icon:<BugReportIcon/>
    }
},


{
    name:'transactionreport',
    
    list:'/transactionreport',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'customer',
        label:'Transaction Report',
        icon:<BugReportIcon/>
    }
},


// MARKETING________________________________________________________________________________________



{
    name:'marketing',
    meta:{
       label:'Marketing',
    //    icon:<AppRegistrationIcon />
    }
},

{
    name:'setdiscountsmarketingoffers',
    
    list:'/setdiscountsmarketingoffers',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'marketing',
        label:'Set Discount & Offers',
        icon:<BugReportIcon/>
    }
},


// ANNOUNCMENTS-------------------------------------------------------


{
    name:'announcments',
    meta:{
       label:'Announcments',
    //    icon:<AppRegistrationIcon />
    }
},


//SUPPORT

{
    name:'support',
    meta:{
       label:'Support',
    //    icon:<AppRegistrationIcon />
    }
},

{
    name:'support',
    
    list:'/support',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'support',
        label:'Support',
        icon:<BugReportIcon/>
    }
},


//SETTING---------------------------------------------------


{
    name:'setting',
    meta:{
       label:'setting',
    //    icon:<AppRegistrationIcon />
    }
},

{

    
    name:'updatebackuptohardware',
    
    list:'/updatebackuptohardware',
    // edit:'/bugreport/edit/:id',
    meta:{
        parent:'setting',
        label:'Update Backup To Hardware',
        icon:<BugReportIcon/>
    }
},



// DEF Maker

{
    name:'defmaker',
    list:'/',
    meta:{
        label:'DEF Makler',
        icon:<AddHomeOutlinedIcon/>
    }
},
{
    name: 'employeemanagementdef',
    meta: {
       label: 'Employee Management',
    },
},
{
    name: 'addemployee',
    list: '/addemployee',
    meta: {
        parent: 'employeemanagementdef',
        label: 'Add Employee',
    }
},
{
    name: 'linkbankaccounts',
    list: '/linkbankaccounts',
    meta: {
        parent: 'employeemanagementdef',
        label: 'Link Bank Accounts',
    }
},
{
    name: 'setaccessrights',
    list: '/setaccessrights',
    meta: {
        parent: 'employeemanagementdef',
        label: 'Set Access Rights',
    }
},
{
    name: 'setsalaries',
    list: '/setsalaries',
    meta: {
        parent: 'employeemanagementdef',
        label: 'Set Salaries',
    }
},
{
    name: 'approvalformemployee',
    list: '/approvalformemployee',
    meta: {
        parent: 'employeemanagementdef',
        label: 'Approval Form',
    }
},
{
    name: 'companyaccounts',
    meta: {
       label: 'Company & Accounts',
    },
},
{
    name: 'createcompanyprofile',
    list: '/createcompanyprofile',
    meta: {
        parent: 'companyaccounts',
        label: 'Create Company Profile',
    }
},
{
    name: 'companybankdetails',
    list: '/companybankdetails',
    meta: {
        parent: 'companyaccounts',
        label: 'Company Bank Details',
    }
},
{
    name: 'financialreports',
    list: '/financialreports',
    meta: {
        parent: 'companyaccounts',
        label: 'Financial Reports',
    }
},
{
    name: 'customer',
    meta: {
       label: 'Customer Management',
    },
},
{
    name: 'addcustomer',
    list: '/addcustomer',
    meta: {
        parent: 'customer',
        label: 'Add Customer',
    }
},
{
    name: 'manageorders',
    list: '/manageorders',
    meta: {
        parent: 'customer',
        label: 'Manage Orders',
    }
},
{
    name: 'viewcustomerdata',
    list: '/viewcustomerdata',
    meta: {
        parent: 'customer',
        label: 'View Customer Data',
    }
},
{
    name: 'inventory',
    meta: {
       label: 'Inventory & Logistics Management',
    },
},
{
    name: 'trackinventory',
    list: '/trackinventory',
    meta: {
        parent: 'inventory',
        label: 'Track Inventory',
    }
},
{
    name: 'managepurchases',
    list: '/managepurchases',
    meta: {
        parent: 'inventory',
        label: 'Manage Purchases',
    }
},
{
    name: 'processlogistics',
    list: '/processlogistics',
    meta: {
        parent: 'inventory',
        label: 'Process Logistics',
    }
},
{
    name: 'dynamicrules',
    meta: {
       label: 'Dynamic Rules & Processes',
    },
},
{
    name: 'setrules',
    list: '/setrules',
    meta: {
        parent: 'dynamicrules',
        label: 'Set Rules',
    }
},
{
    name: 'drivervehicle',
    meta: {
       label: 'Driver & Vehicle Management',
    },
},
{
    name: 'addvehicle',
    list: '/addvehicle',
    meta: {
        parent: 'drivervehicle',
        label: 'Add Vehicle',
    }
},
{
    name: 'assignvehicle',
    list: '/assignvehicle',
    meta: {
        parent: 'drivervehicle',
        label: 'Assign Vehicle',
    }
},
{
    name: 'maintenance',
    meta: {
       label: 'Operations & Maintenance',
    },
},
{
    name: 'schedulemaintenance',
    list: '/schedulemaintenance',
    meta: {
        parent: 'maintenance',
        label: 'Schedule Maintenance',
    }
},
{
    name: 'marketing',
    meta: {
       label: 'Marketing & Promotions',
    },
},
{
    name: 'createcampaign',
    list: '/createcampaign',
    meta: {
        parent: 'marketing',
        label: 'Create Marketing Campaign',
    }
},
{
    name: 'analyzecampaign',
    list: '/analyzecampaign',
    meta: {
        parent: 'marketing',
        label: 'Analyze Campaign Results',
    }
},



// Transport Company

{

    name:'transportcompany',

    list:'/',

    meta:{

        label:'Transport Company',

        icon:<AddHomeOutlinedIcon/>

    }

},
 
// Management & Personnel

{

    name:'managementpersonnel',

    meta:{

       label:'Management & Personnel',

    }

},

{

    name:'addmanageraccountsdriver',

    list:'/addmanageraccountsdriver',

    meta:{

        parent:'managementpersonnel',

        label:'Add Manager/Accounts/Driver',

        icon:<BugReportIcon/>

    }

},

{

    name:'setspendlimitdriverpump',

    list:'/setspendlimitdriverpump',

    meta:{

        parent:'managementpersonnel',

        label:'Set (Add/Reduce) Spend Limit by Driver/Pump',

        icon:<BugReportIcon/>

    }

},

{

    name:'blockdriverfromspending',

    list:'/blockdriverfromspending',

    meta:{

        parent:'managementpersonnel',

        label:'Block Driver from Spending Money',

        icon:<BugReportIcon/>

    }

},

{

    name:'approvetransactiondrivers',

    list:'/approvetransactiondrivers',

    meta:{

        parent:'managementpersonnel',

        label:'Approve Transactions for Drivers (OTP-based)',

        icon:<BugReportIcon/>

    }

},

{

    name:'allocatenfccarddrivervehicle',

    list:'/allocatenfccarddrivervehicle',

    meta:{

        parent:'managementpersonnel',

        label:'Allocate NFC Card to Driver/Vehicle',

        icon:<BugReportIcon/>

    }

},

{

    name:'adddrivertimeline',

    list:'/adddrivertimeline',

    meta:{

        parent:'managementpersonnel',

        label:'Add Driver Timeline - All-Time Deliveries, Duration',

        icon:<BugReportIcon/>

    }

},
 
// Vehicle & Fleet Management

{

    name:'vehiclefleetmanagement',

    meta:{

       label:'Vehicle & Fleet Management',

    }

},

{

    name:'addvehicle',

    list:'/addvehicle',

    meta:{

        parent:'vehiclefleetmanagement',

        label:'Add Vehicle',

        icon:<BugReportIcon/>

    }

},

{

    name:'uploadvehicledocuments',

    list:'/uploadvehicledocuments',

    meta:{

        parent:'vehiclefleetmanagement',

        label:'Upload Vehicle Documents',

        icon:<BugReportIcon/>

    }

},

{

    name:'fleetmaintenancedata',

    list:'/fleetmaintenancedata',

    meta:{

        parent:'vehiclefleetmanagement',

        label:'Fleet Maintenance Data',

        icon:<BugReportIcon/>

    }

},

{

    name:'fleetutilizationusage',

    list:'/fleetutilizationusage',

    meta:{

        parent:'vehiclefleetmanagement',

        label:'Fleet Utilization / Usage',

        icon:<BugReportIcon/>

    }

},

{

    name:'maintenanceschedulepastrecord',

    list:'/maintenanceschedulepastrecord',

    meta:{

        parent:'vehiclefleetmanagement',

        label:'Maintenance Schedule / Past Maintenance Record',

        icon:<BugReportIcon/>

    }

},

{

    name:'createtripdetails',

    list:'/createtripdetails',

    meta:{

        parent:'vehiclefleetmanagement',

        label:'Create Trip Details',

        icon:<BugReportIcon/>

    }

},

{

    name:'addexpense',

    list:'/addexpense',

    meta:{

        parent:'vehiclefleetmanagement',

        label:'Add Expense (Toll, Fuel, etc.)',

        icon:<BugReportIcon/>

    }

},

{

    name:'logincident',

    list:'/logincident',

    meta:{

        parent:'vehiclefleetmanagement',

        label:'Log Incident (Accident, Breakdown, Violence, etc.)',

        icon:<BugReportIcon/>

    }

},
 
// Inventory Management

{

    name:'inventorymanagement',

    meta:{

       label:'Inventory Management',

    }

},

{

    name:'adddefinventorymanagement',

    list:'/adddefinventorymanagement',

    meta:{

        parent:'inventorymanagement',

        label:'Add DEF Inventory Management',

        icon:<BugReportIcon/>

    }

},

{

    name:'defkmsconsumption',

    list:'/defkmsconsumption',

    meta:{

        parent:'inventorymanagement',

        label:'DEF/KMs Consumption',

        icon:<BugReportIcon/>

    }

},

{

    name:'addinvoicedeffluid',

    list:'/addinvoicedeffluid',

    meta:{

        parent:'inventorymanagement',

        label:'Add Invoice for DEF/Fluid',

        icon:<BugReportIcon/>

    }

},
 
// Operations & Maintenance

{

    name:'operationsmaintenance',

    meta:{

       label:'Operations & Maintenance',

    }

},

{

    name:'addpumpstation',

    list:'/addpumpstation',

    meta:{

        parent:'operationsmaintenance',

        label:'Add Pump Station',

        icon:<BugReportIcon/>

    }

},

{

    name:'supportticketcategories',

    list:'/supportticketcategories',

    meta:{

        parent:'operationsmaintenance',

        label:'Support Ticket Categories',

        icon:<BugReportIcon/>

    }

},

{

    name:'createmaintenancerequest',

    list:'/createmaintenancerequest',

    meta:{

        parent:'operationsmaintenance',

        label:'Create Maintenance Request',

        icon:<BugReportIcon/>

    }

},
 
// Financial & Transaction Management

{

    name:'financialtransactionmanagement',

    meta:{

       label:'Financial & Transaction Management',

    }

},

{

    name:'addmoneytomasterwallet',

    list:'/addmoneytomasterwallet',

    meta:{

        parent:'financialtransactionmanagement',

        label:'Add Money to Master Wallet (To Spend via NFC Card)',

        icon:<BugReportIcon/>

    }

},


{
    name: 'transportcompany',
    list: '/',
    meta: {
        label: 'Transport Company',
        icon: <AddHomeOutlinedIcon />
    }
},
 
// Employee Management Section
{
    name: 'employeemanagement',
    meta: {
        label: 'Employee Management',
        // icon: <AppRegistrationIcon />
    }
},
{
    name: 'addemployee',
    list: '/addemployee',
    meta: {
        parent: 'employeemanagement',
        label: 'Add Employee',
        icon: <BugReportIcon />
    }
},
{
    name: 'setaccessrights',
    list: '/setaccessrights',
    meta: {
        parent: 'employeemanagement',
        label: 'Set Access Rights',
        icon: <BugReportIcon />
    }
},
{
    name: 'setsalariesweeklyoffs',
    list: '/setsalariesweeklyoffs',
    meta: {
        parent: 'employeemanagement',
        label: 'Set Salaries & Weekly Offs',
        icon: <BugReportIcon />
    }
},
{
    name: 'setrostersworkingshifts',
    list: '/setrostersworkingshifts',
    meta: {
        parent: 'employeemanagement',
        label: 'Set Rosters/Working Shifts',
        icon: <BugReportIcon />
    }
},
{
    name: 'approvalforms',
    list: '/approvalforms',
    meta: {
        parent: 'employeemanagement',
        label: 'Approval Forms for Employee Requests',
        icon: <BugReportIcon />
    }
},
{
    name: 'modifyaccessrights',
    list: '/modifyaccessrights',
    meta: {
        parent: 'employeemanagement',
        label: 'Modify Access Rights',
        icon: <BugReportIcon />
    }
},
{
    name: 'emergencycontacts',
    list: '/emergencycontacts',
    meta: {
        parent: 'employeemanagement',
        label: 'Add Emergency Contacts & Information',
        icon: <BugReportIcon />
    }
},
 
// Vehicle & Fleet Management Section
{
    name: 'fleetcompany',
    list: '/',
    meta: {
        label: 'Fleet Company',
        icon: <AddHomeOutlinedIcon />
    }
},
 
// Employee Management Section
{
    name: 'employeemanagement',
    meta: {
        label: 'Employee Management',
        // icon: <AppRegistrationIcon />
    }
},
{
    name: 'addemployee',
    list: '/addemployee',
    meta: {
        parent: 'employeemanagement',
        label: 'Add Employee',
        icon: <BugReportIcon />
    }
},
{
    name: 'setaccessrights',
    list: '/setaccessrights',
    meta: {
        parent: 'employeemanagement',
        label: 'Set Access Rights',
        icon: <BugReportIcon />
    }
},
{
    name: 'setsalariesweeklyoffs',
    list: '/setsalariesweeklyoffs',
    meta: {
        parent: 'employeemanagement',
        label: 'Set Salaries & Weekly Offs',
        icon: <BugReportIcon />
    }
},
{
    name: 'setrostersworkingshifts',
    list: '/setrostersworkingshifts',
    meta: {
        parent: 'employeemanagement',
        label: 'Set Rosters/Working Shifts',
        icon: <BugReportIcon />
    }
},
{
    name: 'approvalforms',
    list: '/approvalforms',
    meta: {
        parent: 'employeemanagement',
        label: 'Approval Forms for Employee Requests',
        icon: <BugReportIcon />
    }
},
{
    name: 'modifyaccessrights',
    list: '/modifyaccessrights',
    meta: {
        parent: 'employeemanagement',
        label: 'Modify Access Rights',
        icon: <BugReportIcon />
    }
},
{
    name: 'emergencycontacts',
    list: '/emergencycontacts',
    meta: {
        parent: 'employeemanagement',
        label: 'Add Emergency Contacts & Information',
        icon: <BugReportIcon />
    }
},
 
// Vehicle & Fleet Management Section
{
    name: 'vehiclemanagement',
    meta: {
        label: 'Vehicle & Fleet Management',
        // icon: <DirectionsCarIcon />
    }
},
{
    name: 'createvehiclegroups',
    list: '/createvehiclegroups',
    meta: {
        parent: 'vehiclemanagement',
        label: 'Create Vehicle Groups',
        icon: <BugReportIcon />
    }
},
{
    name: 'addvehicles',
    list: '/addvehicles',
    meta: {
        parent: 'vehiclemanagement',
        label: 'Add Vehicles',
        icon: <BugReportIcon />
    }
},
{
    name: 'allocatenfccards',
    list: '/allocatenfccards',
    meta: {
        parent: 'vehiclemanagement',
        label: 'Allocate NFC Cards to Employees',
        icon: <BugReportIcon />
    }
},
{
    name: 'allocateroutes',
    list: '/allocateroutes',
    meta: {
        parent: 'vehiclemanagement',
        label: 'Allocate Routes to Groups & Vehicles',
        icon: <BugReportIcon />
    }
},
{
    name: 'lockunlocknfccards',
    list: '/lockunlocknfccards',
    meta: {
        parent: 'vehiclemanagement',
        label: 'Lock/Unlock NFC Cards',
        icon: <BugReportIcon />
    }
},
{
    name: 'modifygpsconfig',
    list: '/modifygpsconfig',
    meta: {
        parent: 'vehiclemanagement',
        label: 'Modify GPS Tracker Configuration',
        icon: <BugReportIcon />
    }
},
{
    name: 'updatevehicledocs',
    list: '/updatevehicledocs',
    
    meta: {
        parent: 'vehiclemanagement',
        label: 'Update Vehicle Documents',
        icon: <BugReportIcon />
    }
},
{
    name: 'addvehiclemaintenance',
    list: '/addvehiclemaintenance',
    meta: {
        parent: 'vehiclemanagement',
        label: 'Add Vehicle Maintenance Records',
        icon: <BugReportIcon />
    }
},
{
    name: 'uploadservicejobcard',
    list: '/uploadservicejobcard',
    meta: {
        parent: 'vehiclemanagement',
        label: 'Upload Service Job-Card',
        icon: <BugReportIcon />
    }
},
{
    name: 'planjourneys',
    list: '/planjourneys',
    meta: {
        parent: 'vehiclemanagement',
        label: 'Plan Journeys & Breaks',
        icon: <BugReportIcon />
    }
},
 
// Financial Management Section
{
    name: 'financialmanagement',
    meta: {
        label: 'Financial Management',
        // icon: <AccountBalanceIcon />
    }
},
{
    name: 'linkbankaccounts',
    list: '/linkbankaccounts',
    meta: {
        parent: 'financialmanagement',
        label: 'Add & Link Bank Accounts',
        icon: <BugReportIcon />
    }
},
{
    name: 'settransactionlimits',
    list: '/settransactionlimits',
    meta: {
        parent: 'financialmanagement',
        label: 'Set Transaction Limits',
        icon: <BugReportIcon />
    }
},
{
    name: 'addmoneytowallet',
    list: '/addmoneytowallet',
    meta: {
        parent: 'financialmanagement',
        label: 'Add Money to Master Wallet',
        icon: <BugReportIcon />
    }
},
{
    name: 'addincentives',
    list: '/addincentives',
    meta: {
        parent: 'financialmanagement',
        label: 'Add Incentive Schemes for Drivers',
        icon: <BugReportIcon />
    }
},
{
    name: 'createpurchaseorder',
    list: '/createpurchaseorder',
    meta: {
        parent: 'financialmanagement',
        label: 'Create Purchase Order',
        icon: <BugReportIcon />
    }
},
{
    name: 'requestledger',
    list: '/requestledger',
    meta: {
        parent: 'financialmanagement',
        label: 'Request Ledger from Customers/Suppliers',
        icon: <BugReportIcon />
    }
},
 
// Operations & Transactions Section
{
    name: 'operations',
    meta: {
        label: 'Operations & Transactions',
        // icon: <LocalGasStationIcon />
    }
},
{
    name: 'startendshift',
    list: '/startendshift',
    meta: {
        parent: 'operations',
        label: 'Start/End Shift of Driver',
        icon: <BugReportIcon />
    }
},
{
    name: 'requesttransaction',
    list: '/requesttransaction',
    meta: {
        parent: 'operations',
        label: 'Request Transaction on Pump',
        icon: <MonetizationOnIcon />
    }
},
{
    name: 'addexpense',
    list: '/addexpense',
    meta: {
        parent: 'operations',
        label: 'Add Expense/Bill',
        icon: <BugReportIcon />
    }
},
{
    name: 'emergencysupport',
    list: '/emergencysupport',
    meta: {
        parent: 'operations',
        label: 'Emergency Support Request',
        icon: <BugReportIcon />
    }
},
 
// Geo-Location & Tracking Section
{
    name: 'geotracking',
    meta: {
        label: 'Geo-Location & Tracking',
        // icon: <LocationOnIcon />
    }
},
{
    name: 'geofencelocations',
    list: '/geofencelocations',
    meta: {
        parent: 'geotracking',
        label: 'Geo-Fence Locations',
        icon: <BugReportIcon />
    }
},
{
    name: 'reprogramgpstracker',
    list: '/reprogramgpstracker',
    meta: {
        parent: 'geotracking',
        label: 'Reprogram GPS Tracker',
        icon: <BugReportIcon />
    }
},
 
// Regulatory & Compliance Section
{
    name: 'compliance',
    meta: {
        label: 'Regulatory & Compliance',
        // icon: <GavelIcon />
    }
},
{
    name: 'filegst',
    list: '/filegst',
    meta: {
        parent: 'compliance',
        label: 'File for Monthly GST',
        icon: <BugReportIcon />
    }
},
{
    name: 'rollbackentries',
    list: '/rollbackentries',
    meta: {
        parent: 'compliance',
        label: 'Rollback Entries',
        icon: <BugReportIcon />
    }
}
 






]