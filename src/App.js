import './App.css';
import { OikuraHeader, MagHead, MagBody, MagBodyCollection, OikuraFooter } from './ui-components';

function App() {
  return (
    <div className="App">
    <OikuraHeader width={{ small: "375px", large: "375px", xl: "375px" }}/>
    <MagHead width={{ small: "375px", large: "375px", xl: "375px" }}/>
    <MagBody/>
    <OikuraFooter width={{ small: "375px", large: "375px", xl: "375px" }}/>
    </div>
  );
}

export default App;
