const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  // to write emoji, hit windows plus .
  return <h1>🌴 Far Away 👜</h1>;
}

function Form() {
  function handleSubmit(e) {
    // avoid reloading
    e.preventDefault();
  }

  return (
    // submit event happens if button is clicked or enter is hit
    // usually involves a brief flash and page reload
    // onSubmit include click and enter while onClick only deals with click
    <div className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 😍</h3>
      <select>
        {/* (_, i) is like a map function. inside it, _ is the current value, i is the index */}
        {/* when rendering a list, need to give each element a unique key */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
      <button>ADD</button>
    </div>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          // <name of component / name of prop / object itself (argument in each iteration over the array)
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have x items on your list, and you already packed x.</em>
    </footer>
  );
}
