import { FaChair } from "react-icons/fa"
import { GoPackage } from "react-icons/go"
import { IoPeople } from "react-icons/io5"
import { LuClock9 } from "react-icons/lu"
import { MdOutlineTableRestaurant } from "react-icons/md"
import Customers from "../assets/navbar/Customers"
import DashboardIcon from "../assets/navbar/DashboardIcon"
import Menu from "../assets/navbar/Menu"
import Order from "../assets/navbar/Order"
import Rewards from "../assets/navbar/Rewards"
import Settings from "../assets/navbar/Settings"
import TipsManager from "../assets/navbar/TipsManager"

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
    image: <MdOutlineTableRestaurant className="h-[17px] w-[17px]" />,
    to: "/table-manager",
  },
  {
    name: "Chair Manager",
    image: <FaChair className="h-[17px] w-[17px]" />,
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
    name: "Inventory",
    image: <GoPackage className="h-[18px] w-[18px]" />,
    to: "/inventory",
  },
  {
    name: "Customers",
    image: <Customers />,
    to: "/customers",
  },
  {
    name: "Employees",
    image: <IoPeople className="h-[17px] w-[17px]" />,
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
    name: "Settings",
    image: <Settings />,
    to: "/settings  ",
  },
]
