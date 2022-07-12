
import './App.css';
import { TypeOfFood} from "./components/food/typeOfFood";
import {Parent} from "./components/parent"

function App() {
  return (
    <div>
      <h1>Hello World</h1>

<p>Lets render this to the DOM</p>
<ul>
<li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
      <Parent/>
      <TypeOfFood />
    </div>
  );
}

export default App;
