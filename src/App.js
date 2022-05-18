import './App.css';
import Todo from './components/Todo';

// 3 Main Operations in To do list 
// --> Read Input
// --> Update todos list 
// --> re-render todo list when updated

function App() {
  return (
    <div className="App">
        <Todo/>
    </div>
  );
}

export default App;
