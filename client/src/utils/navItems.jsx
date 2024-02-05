import Admins from "../assets/navbar/Admins"
import Customers from "../assets/navbar/Customers"
import Order from "../assets/navbar/Order"
import Reviews from "../assets/navbar/Reviews"
import Rewards from "../assets/navbar/Rewards"
import Settings from "../assets/navbar/Settings"
import TipsManager from "../assets/navbar/TipsManager"
import DashboardIcon from "../assets/navbar/DashboardIcon"
import Menu from "../assets/navbar/Menu"
import TableManager from "../assets/navbar/TableManager"
import { IoTimeOutline } from "react-icons/io5"
import { FaClock } from "react-icons/fa"
import { LuClock9 } from "react-icons/lu"

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
    name: "TimeSheet",
    image: (
      <div className="">
        <LuClock9 className="h-[17px] w-[17px]" />
      </div>
    ),
    to: "/timesheet",
  },
  {
    name: "Rewards",
    image: <Rewards />,
    to: "/rewards",
  },
  {
    name: "Admins",
    image: <Admins />,
    to: "/admins",
  },
  {
    name: "Settigs",
    image: <Settings />,
    to: "/settings  ",
  },
]
