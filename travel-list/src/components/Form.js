import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    // avoid reloading
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    // submit event happens if button is clicked or enter is hit
    // usually involves a brief flash and page reload
    // onSubmit include click and enter while onClick only deals with click
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 😍</h3>
      {/* e.target.value comes from the value={num} in <option> */}
      <select
        value={quantity}
        // to get the number instead of a string
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* (_, i) is like a map function. inside it, _ is the current value, i is the index */}
        {/* when rendering a list, need to give each element a unique key */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}
