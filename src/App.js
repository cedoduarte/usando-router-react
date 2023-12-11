import './App.css';
import { useParams, Link, Route, Routes, Outlet } from 'react-router-dom';
import { NavigationLink } from './components/NavigationLink';

const Home = () => {
  return (<h1>Home</h1>);
}

const SearchPage = () => {
  const tacos = [
    "cohinita",
    "chili",
    "carnita",
    "quesadilla"
  ];
  return (
    <div>
      <h1>Search Page</h1>
      <ul>
        {tacos.map(taco => {
          return (
            <li key={taco}>
              <Link to={`/tacos/${taco}`}>{taco}</Link>
            </li>
          );
        })}
      </ul>      
    </div>
  );
}

const Tacos = () => {
  const { tacoName } = useParams();
  return (
    <div>
      <h1>Tacos</h1>
      {tacoName}
      <Link to="details">Ir a los detalles</Link>
      <Outlet/>
    </div>
  );
}

const TacoDetails = () => {
  const { tacoName } = useParams();
  return (
    <h1>Taco Details {tacoName}</h1>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><NavigationLink to="/">Home</NavigationLink></li>
            <li><NavigationLink to="/search-page">Search Page</NavigationLink></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search-page" element={<SearchPage/>} />  
        <Route path="/tacos/:tacoName" element={<Tacos/>}>
          <Route path="details" element={<TacoDetails/>} />
        </Route>
        <Route path="/tacos/cedotaco" element={<h1 style={{ color: "red" }}>CEDO taco</h1>} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
