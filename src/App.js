
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Heroes from './Components/Heroes';
import Card from './Components/Card';
import Carddetails from './Components/CardDetails';

let cards=Carddetails.map((hero)=>{
  return(
  <Card details={{img:hero.img,
    Heroname:hero.Heroname,
    Strength:hero.Strength,
  } 
    }/>
)})
console.log("cards",cards);
function App() {
  return (
    <div className="App">
      <Header/>
      <Heroes/>
      {cards}
      <Footer/>
    </div>
  );
}

export default App;
