import './App.css';
import {signInWithGoogle}from './utils/fireBase'

function App() {

  const handleClickFunction = () => {
   signInWithGoogle()
}

  return (
    <div className="App">
      <button onClick={handleClickFunction}>Google sign in</button>
      
    </div>
  );
}

export default App;
