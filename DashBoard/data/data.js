import {
BarChart3,
Cpu,
Globe,
Home,
Package,
Search,
Settings,
ShoppingBag,
Target,
Users,
} from 'lucide-react'; 

export const revenueData = [
{ month: "Jan", revenue: 85000, users: 1200, growth: 12.5},
{ month: "Feb", revenue: 95000, users: 1350, growth: 15.2 },
{ month: "Mar", revenue: 78000, users: 1100, growth: -8.3},
{ month: "Apr", revenue: 120000, users: 1800, growth: 25.4},
{ month: "May", revenue: 135000, users: 2100, growth: 18.7},
{ month: "Jun", revenue: 165000, users: 2600, growth: 32.1},
];

export const performanceData = [
{ name: "Performance", value: 92, fill: "#8B5CF6"},
{ name: "Security", value: 88, fill: "#06B6D4"},
{ name: "Speed", value: 95, fill: "#108981"},
{ name: "Reliability", value: 89, fill: "#F59E0B" },
];

export const trafficSources = [
{ name: "Organic Search", value: 45, color: "#8B5CF6", icon: Search},
{ name: "Social Media", value: 28, color: "#EC4899", icon: Users },
{ name: "Direct Traffic", value: 18, color: "#06B6D4", icon: Globe }, 
{ name: "Email Campaign", value: 9, color: "#108981", icon: Target },
];

export const liveActivities = [
{
    user: "Lethabo Lebogo",
    action: "Made a purchase",
    amount: "R2,450",
    time: "2 min ago",
    type: "purchase",

},
{
    user: "Meikie Maputla",
    action: "Signed up for Pro",
    amount: "R99/mo",
    time: "5 min ago",
    type: "signup",

},
{
    user: "Maria Mokgosi",
    action: "Upgraded to Premium",
    amount: "R199/mo",
    time: "10 min ago",
    type: "upgrade"
},
{
    user: "Rulani Mokoena",
    action: "Made a purchase",
    amount: "R3,200",
    time: "15 min ago",
    type: "purchase"
},
{
    user: "Thabo Dlamini",
    action: "Made 5 Star Review",
    amount: "Review",
    time: "20 min ago",
    type: "review"
},
]; 

export const menuItems = [

{
    icon: Home,
    label: "Overview",
    id: "overview",
    gradient: "from-purple-500 to-pink-500",
},

{
    icon: BarChart3,
    label: "Analytics",
    id: "analytics",
    gradient: "from-blue-500 to-cyan-500",
},
{
    icon: Users,
    label: "Customers",
    id: "customers",
    gradient: "from-green-500 to-teal-500",
},
{
    icon: ShoppingBag,
    label: "Sales",
    id: "sales",
    gradient: "from-yellow-500 to-orange-500",
},
{
    icon: Package,
    label: "Products",
    id: "products",
    gradient: "from-pink-500 to-red-500",
},
{
    icon: Cpu,
    label: "Performance",
    id: "performance",
    gradient: "from-indigo-500 to-purple-500",
},
{
    icon: Settings,
    label: "Settings",
    id: "settings",
    gradient: "from-gray-500 to-gray-700",
},
];  
