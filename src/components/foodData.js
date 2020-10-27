import Pizza1 from "../images/eggHamPizza.jpg"
import Pizza2 from "../images/peporoniPizza.jpg"
import Pizza3 from "../images/shrimpOlivePizza.jpg"
import Pizza4 from "../images/tomatoBasilPizza.jpg"

import tBone from "../images/tboneSteak.jpg"

const foods = [
  {
    pizzas: [
      {
        id: 0,
        name: "Egg and Ham Pizza",
        image: Pizza1,
        price: "19.99",
        rate: "",
      },
      {
        id: 1,
        name: "Pepperoni Pizza",
        image: Pizza2,
        price: "19.99",
        rate: "",
      },
      {
        id: 2,
        name: "Shrimp and Olives Pizza",
        image: Pizza3,
        price: "19.99",
        rate: "",
      },
      {
        id: 3,
        name: "Tomato and Basil Pizza",
        image: Pizza4,
        price: "19.99",
        rate: "",
      },
    ],
    rawMeats: [
      {
        id: 0,
        name: "T-Bone Steeak",
        image: tBone,
        price: "99.99",
        rate: "",
      },
    ],
  },
]

export default foods
