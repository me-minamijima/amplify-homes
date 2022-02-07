import './App.css';
import { OikuraHeader, MagHead, MagBody, MagBodyCollection, OikuraFooter } from './ui-components';

function App() {
  return (
    <div className="App">
    <OikuraHeader width={{ small: "340px", large: "340px", xl: "340px" }}/>
    <MagHead width={{ small: "340px", large: "340px", xl: "340px" }}/>
    <MagBody/>
    <OikuraFooter width={{ small: "340px", large: "340px", xl: "340px" }}/>
    </div>
  );
}

export default App;
