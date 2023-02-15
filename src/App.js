import logo from './logo.svg';
import './App.css';
import { useState, useEffect ,useLayoutEffect} from 'react';

function App() {
  const [count, setCount] = useState(0)
  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0)}},[count])
return (
  <div className="App">
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>Count</button>
  </div>
);
}

export default App;
