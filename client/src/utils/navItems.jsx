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
    to: "/ssajd",
  },
  {
    name: "Orders",
    image: <Order />,
    to: "/ssajd",
  },
  {
    name: "Tips Manager",
    image: <TipsManager />,
    to: "/tips-manager",
  },
  {
    name: "Reviews",
    image: <Reviews />,
    to: "/ssajd",
  },
  {
    name: "Customers",
    image: <Customers />,
    to: "/ssajd",
  },
  {
    name: "Employees",
    image: <Menu />,
    to: "/ssajd",
  },
  {
    name: "Rewards",
    image: <Rewards />,
    to: "/ssajd",
  },
  {
    name: "Admins",
    image: <Admins />,
    to: "/ssajd",
  },
  {
    name: "Settigs",
    image: <Settings />,
    to: "/ssajd",
  },
]
