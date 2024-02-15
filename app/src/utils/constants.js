import item0 from "./../assets/dashboard/item0.png"
import item1 from "./../assets/dashboard/item1.png"
import item2 from "./../assets/dashboard/item2.png"
import item3 from "./../assets/dashboard/item3.png"
import item4 from "./../assets/dashboard/item4.png"
import menuItem1 from "./../assets/dashboard/menuItem1.jpg"
import menuItem2 from "./../assets/dashboard/menuItem2.png"

export const categories = [
  {
    name: "All",
    image: item0,
  },
  {
    name: "Steak",
    image: item1,
  },
  {
    name: "Breakfast",
    image: item2,
  },
  {
    name: "Fast Food",
    image: item3,
  },
  {
    name: "Drinks",
    image: item4,
  },
  {
    name: "Beef",
    image: item1,
  },
  {
    name: "Mutton",
    image: item2,
  },
  {
    name: "Burger",
    image: item3,
  },
  {
    name: "Margherita",
    image: item4,
  },
]

export const menuItems = [
  {
    name: "Burger ‘Wanted’",
    desc: "Rice, Noodles, Lettuce, Tomatoes,Onions, Garlic, Ginger ",
    category: "Fast Food",
    price: 35,
    image: menuItem1,
  },
  {
    name: "Burger ‘Wanted’",
    desc: "Rice, Noodles, Lettuce, Tomatoes,Onions, Garlic, Ginger ",
    category: "Fast Food",
    price: 35,
    image: menuItem2,
  },
  {
    name: "Burger ‘Wanted’",
    desc: "Rice, Noodles, Lettuce, Tomatoes,Onions, Garlic, Ginger ",
    category: "Fast Food",
    price: 35,
    image: menuItem1,
  },
  {
    name: "Burger ‘Wanted’",
    desc: "Rice, Noodles, Lettuce, Tomatoes,Onions, Garlic, Ginger ",
    category: "Fast Food",
    price: 35,
    image: menuItem1,
  },
  {
    name: "Burger ‘Wanted’",
    desc: "Rice, Noodles, Lettuce, Tomatoes,Onions, Garlic, Ginger ",
    category: "Fast Food",
    price: 35,
    image: menuItem1,
  },
  {
    name: "Burger ‘Wanted’",
    desc: "Rice, Noodles, Lettuce, Tomatoes,Onions, Garlic, Ginger ",
    category: "Fast Food",
    price: 35,
    image: menuItem1,
  },
]

export const cartItems = [
  {
    name: "Burger ‘Wanted’",
    price: 35,
    quantity: 2,
    totalCost: 70,
    image: menuItem1,
    required: [
      { type: "size", name: "Medium", price: 83 },
      { type: "size", name: "Medium", price: 83 },
    ],
    addons: null,
  },
  {
    name: "Pizza ‘Wanted’",
    price: 35,
    quantity: 5,
    totalCost: 70,
    image: menuItem2,
    required: {},
    addons: null,
  },
]
