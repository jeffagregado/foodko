import React, { useEffect, useState } from "react"
import Button from "../Button"
import Card from "../Card"

import foodData from "../foodData"

function SectionOne() {
  const [data, setData] = useState()
  const [onActive, setOnActive] = useState(0)

  useEffect(() => {
    setData(foodData[0])
  }, [])

  const items = [
    {
      id: 0,
      name: "Hot pizza",
    },
    {
      id: 1,
      name: "Fast food",
    },
    {
      id: 2,
      name: "Asian food",
    },
    {
      id: 3,
      name: "Raw meat",
    },
  ]

  const pizzaItems =
    data &&
    data.pizzas.map((pizza, i) => {
      return (
        <Card key={i.id} src={pizza.image} alt={pizza.name}>
          <p className="itemName">{pizza.name}</p>
          <p className="price">$ {pizza.price}</p>
        </Card>
      )
    })

  const rawMeatItems =
    data &&
    data.rawMeats.map((meat, i) => {
      return (
        <Card key={i.id} src={meat.image} alt={meat.name}>
          <p className="itemName">{meat.name}</p>
          <p className="price">$ {meat.price}</p>
        </Card>
      )
    })

  console.log(data)

  return (
    <div className="section picks">
      <div className="row">
        <div className="col-md-12 col-lg-4 food-options ">
          <div className="quickpicks">QUICK PICK</div>
          <h1>Popular Goods</h1>
          <ul className="pick-lists">
            {items.map(item => {
              return (
                <li key={item.id}>
                  <Button
                    options
                    text={item.name}
                    onClick={() => setOnActive(item.id)}
                    isActive={onActive === item.id}
                  />
                </li>
              )
            })}
          </ul>
        </div>
        <div className="col-md col-lg top-picks">
          {onActive === 0 ? pizzaItems : null}
          {onActive === 3 ? rawMeatItems : null}
        </div>
      </div>
    </div>
  )
}

export default SectionOne
