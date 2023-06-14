import React, { useState, useEffect } from "react";
import Wrong from "./assets/wrong.png";
import Tick from "./assets/tick.png";

const Question = (props) => {
  const [response, setResponse] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [changed, setChanged] = useState(false);

  const handleOptionChange = (event) => {
    setChanged(true);
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    if (props.correctResponse === selectedOption) {
      setResponse(true);
    } else {
      setResponse(false);
    }
  }, [selectedOption, props.correctResponse]);
  console.log(response);

  return (
    <div className="p-10">
      <img
        src={changed === false ? undefined : response === true ? Tick : Wrong}
        alt={changed === false ? undefined : response === true ? "Tick" : "Wrong"}
        className="relative right-12 top-[60px] "
      />
      <p className="text-3xl py-5">{props.question}</p>
      <br />
      <div className="flex items-center mb-4">
        <input
          id="A"
          type="radio"
          value="A"
          // Question.jsx
          checked={selectedOption === "A"}
          onChange={handleOptionChange}
          className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
        />
        <label htmlFor="q1-o1" className="text-xl p-2">
          {props.option1}
        </label>
      </div>

      <div className="flex items-center mb-4">
        <input
          id="B"
          type="radio"
          value="B"
          checked={selectedOption === "B"}
          onChange={handleOptionChange}
          className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
        />
        <label htmlFor="q1-o2" className="text-xl p-2">
          {props.option2}
        </label>
      </div>

      <div className="flex items-center mb-4">
        <input
          id="C"
          type="radio"
          value="C"
          checked={selectedOption === "C"}
          onChange={handleOptionChange}
          className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
        />
        <label htmlFor="q1-o3" className="text-xl p-2">
          {props.option3}
        </label>
      </div>

      <div className="flex items-center mb-4">
        <input
          id="D"
          type="radio"
          value="D"
          checked={selectedOption === "D"}
          onChange={handleOptionChange}
          className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
        />
        <label htmlFor="q1-o4" className="text-xl p-2">
          {props.option4}
        </label>
      </div>
    </div>
  );
};

export default Question;