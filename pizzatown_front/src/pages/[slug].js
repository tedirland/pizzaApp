import React from 'react';
import styles from '../styles/Pizza.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
export default function slug({ pizza, otherPizzas }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{pizza.name}</title>
      </Head>
      <div className={styles.pizzaWrapperLeft}>
        <Image
          src={pizza.image}
          alt={pizza.name}
          className={styles.pizzaImage}
          height="800px"
          width="800px"
        ></Image>
      </div>
      <div className={styles.pizzaWrapperRight}>
        <div className={styles.pizzaInfo}>
          <p className={styles.pizzaTitle}>{pizza.name}</p>
          <p className={styles.pizzaDescription}>{pizza.description}</p>
          <p className={styles.pizzaPrice}>${pizza.price}</p>
          <p className={styles.pizzaToppings}>
            {pizza.toppings.map(topping => topping).join(', ')}
          </p>
        </div>
        <div className={styles.otherPizzasWrapper}>
          {otherPizzas.map(otherPizza => {
            return (
              <div className={styles.otherPizzas} key={otherPizza.id}>
                <Link href={'/' + otherPizza.slug}>
                  <a>
                    <Image
                      className={styles.otherPizzaImg}
                      src={otherPizza.image}
                      alt={otherPizza.name}
                      height="180px"
                      width="180px"
                    ></Image>
                    <p>{otherPizza.name}</p>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const pizzas = [
    {
      id: '1',
      name: 'Cheese Pizza',
      slug: 'cheeze-pizza',
      description:
        'A delicious cheese pizza made with our finest tomato sauce.',
      toppings: ['mozarella cheese'],
      image:
        'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80',
      price: 9.99,
    },
    {
      id: '2',
      name: 'Meat Lovers',
      slug: 'meat-lovers',
      description: "A carnivore's delight!",
      toppings: ['ham', 'bacon', 'pepperoni', 'sausage'],
      image:
        'https://images.unsplash.com/photo-1600346019001-8d56d1b51d59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      price: 15.99,
    },
    {
      id: '3',
      name: 'Supreme',
      slug: 'supreme',
      description: 'A pizza fit for a king',
      toppings: ['olives', 'pineapple', 'ham', 'pepperoni'],
      image:
        'https://images.unsplash.com/photo-1617343267017-e344bdc7ec94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      price: 12.99,
    },
    {
      id: '4',
      name: 'Pepperoni Pizza',
      slug: 'pepperoni-pizza',
      description: 'A true classic and always a good decision',
      toppings: ['pepperoni'],
      image:
        'https://images.unsplash.com/photo-1564128442383-9201fcc740eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2002&q=80',
      price: 14.99,
    },
    {
      id: '5',
      name: 'Smoked Sausage Pizza',
      slug: 'smoked-sausage-pizza',
      description: 'Smoke me, daddy',
      toppings: ['sausage', 'tomato', 'olive'],
      image:
        'https://images.unsplash.com/photo-1620374645310-f9d97e733268?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      price: 9.99,
    },
    {
      id: '6',
      name: 'Egg & Sausage Pizza',
      slug: 'egg-and-sausage-pizza',
      description: 'You got egg on my pizza!',
      toppings: ['sausage', 'egg'],
      image:
        'https://images.unsplash.com/photo-1605591099585-087b3d54cd45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1642&q=80',
      price: 13.99,
    },
  ];
  const paths = pizzas.map(pizza => ({
    params: { slug: `${pizza.slug}` },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const pizzas = [
    {
      id: '1',
      name: 'Cheese Pizza',
      slug: 'cheeze-pizza',
      description:
        'A delicious cheese pizza made with our finest tomato sauce.',
      toppings: ['mozarella cheese'],
      image:
        'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80',
      price: 9.99,
    },
    {
      id: '2',
      name: 'Meat Lovers',
      slug: 'meat-lovers',
      description: "A carnivore's delight!",
      toppings: ['ham', 'bacon', 'pepperoni', 'sausage'],
      image:
        'https://images.unsplash.com/photo-1600346019001-8d56d1b51d59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      price: 15.99,
    },
    {
      id: '3',
      name: 'Supreme',
      slug: 'supreme',
      description: 'A pizza fit for a king',
      toppings: ['olives', 'pineapple', 'ham', 'pepperoni'],
      image:
        'https://images.unsplash.com/photo-1617343267017-e344bdc7ec94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      price: 12.99,
    },
    {
      id: '4',
      name: 'Pepperoni Pizza',
      slug: 'pepperoni-pizza',
      description: 'A true classic and always a good decision',
      toppings: ['pepperoni'],
      image:
        'https://images.unsplash.com/photo-1564128442383-9201fcc740eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2002&q=80',
      price: 14.99,
    },
    {
      id: '5',
      name: 'Smoked Sausage Pizza',
      slug: 'smoked-sausage-pizza',
      description: 'Smoke me, daddy',
      toppings: ['sausage', 'tomato', 'olive'],
      image:
        'https://images.unsplash.com/photo-1620374645310-f9d97e733268?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      price: 9.99,
    },
    {
      id: '6',
      name: 'Egg & Sausage Pizza',
      slug: 'egg-and-sausage-pizza',
      description: 'Hey! you got egg in my pizza!',
      toppings: ['sausage', 'egg'],
      image:
        'https://images.unsplash.com/photo-1605591099585-087b3d54cd45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1642&q=80',
      price: 13.99,
    },
  ];
  const pizza = pizzas.filter(pizza => pizza.slug.includes(params.slug));
  const otherPizzas = pizzas.filter(pizza => pizza.slug !== params.slug);

  return {
    props: {
      pizza: pizza[0],
      otherPizzas: otherPizzas.sort(() => Math.random()).slice(0, 3),
    },
  };
};
