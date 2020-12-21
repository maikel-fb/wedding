import './App.css';
import Panel1 from './panel1';
import Panel2 from './panel2';
import Panel3 from './panel3';
import Panel4 from './panel4';
import Form from './form';

function App() {
  return (
    <div id='page-wrapper'>
      <div id='wrapper'>
        <Panel1 />
        <Panel2 />
        <Panel3 />
        <Panel4 />
        <Form />
      </div>
    </div>
  );
}

export default App;
