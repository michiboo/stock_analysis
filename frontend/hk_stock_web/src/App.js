import logo from './logo.svg';
import './App.css';
import SearchAppBar from './components/SearchAppBar'
import {Make_caro} from './components/Carousel'

var left_caro_sty={style : { width:'50%', display: 'inline-block'}, height: '40vh'}
var right_caro_sty={style : { width:'100%'}}
var top_caro_sty={style : { width:'100%'}}

function App() {

  return (
    <div className="App">
      <SearchAppBar/>
      {Make_caro(top_caro_sty)}
      {Make_caro(left_caro_sty)}
      <div style={{float: 'right', width:"50%"}}>
      {Make_caro(right_caro_sty)}
      {Make_caro(right_caro_sty)}
      </div>
    </div>
  );
}

export default App;
