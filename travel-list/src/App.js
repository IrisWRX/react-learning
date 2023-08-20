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
  return (
    <div className="add-form">
      <h3>What do you need for your trip? 😍</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">LIST</div>;
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have x items on your list, and you already packed x.</em>
    </footer>
  );
}
