import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// create APP component
// function needs to return some markup usually in the form of jsx
// can't return nothing
function App() {
  // each component can only return exactly one element
  // wrapped into <div></div>/<></> can solve multiple elements problem
  return (
    <div className="container">
      <Header />
      {/* reuse components */}
      {/* for nesting, it's not write a function inside another function */}
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // inline styles are defined using a js object (curly brackets)
  // const style = { color: "red", textTransform: "uppercase" };
  const style = {};
  return (
    // it's className instead of class to define a class
    // semantic element is preferred
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  // conditional rendering: only render element when it's available
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* ternary operator */}
      {numPizzas > 0 ? (
        // React fragment groups some elements without leaving trace in dom
        // <React.Fragment> is another option
        // React fragment allows us to have more than just one element inside jsx
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}

      {/* do not use numPizzas only when it's empty because 0 will be shown */}
      {/* {numPizzas > 0 && (
        <ul className="pizzas"> */}
      {/* it's round bracket after arrow */}
      {/* to render one pizza element for each of the objects that are inside the pizza data array */}
      {/* {pizzaData.map((pizza) => (
            // no semi-colon after compomnent
            // good practice: pass in entire object into more specific component
            // each time we render a list with map method
            // each item rendered needs a unique key property
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        // if the content is not a string, apply js mode
        price={10}
      /> */}
    </main>
  );
}

// pass in pizzaObj instead of props is destructuring
// have to add {} for pass-in that is not props
function Pizza({ pizzaObj }) {
  // conditional rendering with multiple returns
  // since it's not inside jsx, we can use if statement
  // if (pizzaObj.soldOut) return null;

  return (
    // conditionally set classes
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/* {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )} */}

        {/* conditionally set texts */}
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  // some js logic in components
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
      {/* conditional rendering is rendering some pieces of UI based on a certain condition */}
      {/* conditional rendering: only show open message when it's within open hour */}
      {/* the boolean value won't be shown on the page*/}
      {/* {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      )} */}
    </footer>
  );
}

// extract jsx into a new component when the jsx is getting too big
function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        {/* if jsx depends on value in parent component, pass in props */}
        We're open from {openHour}:00 until {closeHour}:00. Come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// React v18
// React will render the application inside "root"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// React Strict Mode
// 1. it will render all components twice to find bugs during development
// 2. will check if using outdated parts of React API
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
