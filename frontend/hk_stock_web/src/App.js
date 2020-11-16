import logo from './logo.svg';
import './App.css';
import SearchAppBar from './components/SearchAppBar'
import {Make_caro} from './components/Carousel'
// constructor() {
//   this.Make_caro = this.Make_caro.bind(this);
// }

function App() {

  return (
    <div className="App">
      <header className="App-header">
      PlaceHolder
      </header>
      <SearchAppBar/>
      {Make_caro()}
    </div>
  );
}

export default App;
