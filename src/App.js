import { store } from "./Features/store";
import Main from "./components/Main/Main";

const App = () => {

    return ( 
    <div store={store} >
      <Main />
    </div>
     );
}
 
export default App;