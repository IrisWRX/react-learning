export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  return (
    <div>
      <BillInput />
      <SelectPercentage>How did you like the service?</SelectPercentage>
      <SelectPercentage>How did your friend like the service?</SelectPercentage>
      <Output />
      <Reset />
    </div>
  );
}

function BillInput() {
  return (
    <div>
      <p>How much was the bill?</p>
      <input type="text" placeholder="Bill value" />
    </div>
  );
}

function SelectPercentage({ children }) {
  return (
    <div>
      <p>{children}</p>
      <select>
        <option>Dissatisfied (0%)</option>
        <option>It was okay (5%)</option>
        <option>It was good (10%)</option>
        <option>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output() {
  return <h3>You pay x (x + x tip)</h3>;
}

function Reset() {
  return <button>Reset</button>;
}
