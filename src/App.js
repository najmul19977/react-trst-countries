
import './App.css';
import Countries from './component/Countries/Countries';
import Footer from './component/Footer/Footer';
import Nav from './component/Nav/Nav';
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Countries></Countries>
      <Footer></Footer>
      
      


    </div>
  );


}









/* function LoadCountry(){
  const [countries,setCountries] = useState([])
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res =>res.json())
    .then(data=>setCountries(data));
  },[])
  return(
    <div>
      <h2>Visiting Every Country of the world!!</h2>
      <h3>Available Countries:{countries.length}</h3>
      {
        countries.map(country=> <Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )
}
function Country(props){
  return(
    <div>
      <h2>Name:{props.name}</h2>
      <h3>population:{props.population}</h3>
    </div>
  )
}
 */
 
 
 
export default App;
