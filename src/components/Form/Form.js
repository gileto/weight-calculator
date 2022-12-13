import "./Form.css";
import { useState } from "react";
export default function Form() {
 let [weight, setWeight] = useState(0);
 let [height, setHeight] = useState(0);
 let [result, setResult] = useState(0);
 function getResult() {
  setResult(
   (result = Math.trunc(Math.trunc(weight) / Math.pow(height / 100, 2)))
  );
 }
 return (
  <>
   <form className="form">
    <input
     type="number"
     className="weight"
     placeholder="Вес в кг"
     onChange={(event) => setWeight((weight = event.target.value))}
    />
    <input
     type="number"
     className="height"
     placeholder="Рост в см"
     onChange={(event) => setHeight((height = event.target.value))}
    />
    <button type="button" className="button" onClick={getResult}>
     Рассчитать
    </button>
   </form>
   <p>
    {result <= 0
     ? ""
     : result < 18.5
     ? result + " Дефицит веса"
     : result < 24.9
     ? result + " Норма"
     : result < 29.9
     ? result + " Предожирение"
     : result + " Ожирение"}
   </p>
  </>
 );
}
