import React, { useState } from "react";
import Die from "./Die";
const Tenzi = () => {
  const getAllNewDices = () => {
    const diceArray = [];
    for (let i = 1; i <= 10; i++) {
      diceArray.push(Math.ceil(Math.random() * 6));
    }
    return diceArray;
  };
  const [diceArray, setDiceArray] = useState(getAllNewDices());
  const diceElement = diceArray.map((dice, index) => <Die key={index} value={dice} />);
  return (
    <main className="border text-center p-6 w-lg h-105 bg-white rounded-xl">
      <h1 className="font-bold text-2xl">Tenzi</h1>
      <p className="my-4">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls. Try to get the fastest time!
      </p>
      <section className="grid grid-cols-5 gap-3 my-4 w-full m-auto p-4">
        {diceElement}
      </section>
    </main>
  );
};

export default Tenzi;
