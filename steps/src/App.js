import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // useState is a function and it takes an argument
  // we need to specify the argument with default value of state varibale
  // useState function will return an array
  // step is the state variable
  // useState function is called a hook which starts with "use"
  // we can only call hook on the top level of the App function
  // we can only update the state using setStep (setter function)
  // we shouldn't change the state manually because react is about immutability
  // setStep is tied with step
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: "Iris" });

  // third step: update state in event handler
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      // setStep(step + 1);
      // it's better to always use a callback when wanting to update state based on the current value
      // intead of value, pass in a function, which will receive the current value of state as arguement
      setStep((s) => s + 1);
    }

    // bad practice
    // test.name = "Victoria";
    // good practice
    // setTest({ name: "Victoria" });
  }

  return (
    // use fragment to let jsx return two elements
    <>
      {/* js mode can only be entered inside element */}
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 ? "active" : ""}>1</div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            {/* onClick has to be camel-cased */}
            {/* need a callback function instead of immediately call the fucntion */}
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              // just pass in the function value
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
