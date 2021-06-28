import React from 'react'
import styles from './Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

function Home() {
  const pizzas = [
    {
      id:'1',
      name: 'Cheese Pizza',
      slug: 'cheeze-pizza',
      toppings: ['mozarella cheese'],
      image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80',
      price: 9.99

    },
    {
      id:'2',
      name: 'Meat Lovers',
      slug: 'meat-lovers',
      toppings: ['ham', 'bacon', 'pepperoni', 'sausage'],
      image: 'https://images.unsplash.com/photo-1600346019001-8d56d1b51d59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      price: 15.99

    },
    {
      id:'3',
      name: 'Supreme',
      slug: 'supreme',
      toppings: ['olives', 'pineapple', 'ham', 'pepperoni'],
      image: 'https://images.unsplash.com/photo-1617343267017-e344bdc7ec94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      price: 12.99

    },
    {
      id:'4',
      name: 'Pepperoni Pizza',
      slug: 'pepperoni-pizza',
      toppings: ['pepperoni'],
      image: 'https://images.unsplash.com/photo-1564128442383-9201fcc740eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2002&q=80',
      price: 14.99

    },
    {
      id:'5',
      name: 'Smoked Sausage Pizza',
      slug: 'smoked-sausage-pizza',
      toppings: ['sausage', 'tomato', 'olive'],
      image: 'https://images.unsplash.com/photo-1620374645310-f9d97e733268?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      price: 9.99

    },
    {
      id:'6',
      name: 'Egg & Sausage Pizza',
      slug: 'egg-and-sausage-pizza',
      toppings: ['sausage', 'egg'],
      image: 'https://images.unsplash.com/photo-1605591099585-087b3d54cd45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1642&q=80',
      price: 13.99

    },
  ]
  return (
    <div>
      <div className={styles.searchWrapper}>
        <input placeholder='Search for Pizza...' className={styles.searchBar}></input>
      </div>
      <div className={styles.pizzaContainer}>
        {pizzas.map(pizza => {
          return (
            <div className={styles.pizzaItem} key={pizza.id}>
              <Link href={`/${pizza.slug}`}>
                <a className={styles.pizzaImageBox}>
                  <Image src={pizza.image} alt={pizza.name} className={styles.pizzaImage} height="500px" width="500px" />
                </a>
              </Link>
              <div className={styles.pizzaText}>
                <p className={styles.pizzaHeader}>{pizza.name}</p>
                <p className={styles.pizzaToppings}>{pizza.toppings.map(topping => topping).join(', ')}</p>
                <p className={styles.pizzaPrice}>${pizza.price}</p>

              </div>
            </div>
          )
        }
        )}
      </div>
    </div>
  )
}

export default Home

