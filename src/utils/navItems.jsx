import { LuClock9 } from "react-icons/lu"
import Customers from "../assets/navbar/Customers"
import DashboardIcon from "../assets/navbar/DashboardIcon"
import Menu from "../assets/navbar/Menu"
import Order from "../assets/navbar/Order"
import Rewards from "../assets/navbar/Rewards"
import Settings from "../assets/navbar/Settings"
import TableManager from "../assets/navbar/TableManager"
import TipsManager from "../assets/navbar/TipsManager"
import Reviews from "../assets/navbar/Reviews"

export const navItems = [
  {
    name: "Dashboard",
    image: <DashboardIcon />,
    to: "/dashboard",
  },
  {
    name: "Menu",
    image: <Menu />,
    to: "/menu",
  },
  {
    name: "Table Manager",
    image: <TableManager />,
    to: "/table-manager",
  },
  {
    name: "Chair Manager",
    image: <TableManager />,
    to: "/chair-manager",
  },
  {
    name: "Orders",
    image: <Order />,
    to: "/orders",
  },
  {
    name: "Tips Manager",
    image: <TipsManager />,
    to: "/tips-manager",
  },
  {
    name: "Customers",
    image: <Customers />,
    to: "/customers",
  },
  {
    name: "Employees",
    image: <Menu />,
    to: "/employees",
  },
  {
    name: "Time Sheet",
    image: <LuClock9 className="h-[17px] w-[17px]" />,
    to: "/timesheet",
  },
  // {
  //   name: "Reviews",
  //   image: <Reviews />,
  //   to: "/reviews",
  // },
  {
    name: "Rewards",
    image: <Rewards />,
    to: "/rewards",
  },
  {
    name: "Settigs",
    image: <Settings />,
    to: "/settings  ",
  },
]
