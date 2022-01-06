import './components/List.css';
import './App.css'
import { Form } from './components/Form';
import {List} from './components/List';
import {useState,useEffect} from "react"
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./components/Recipe";
import Alert from "./components/Alert";
function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  var getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("No food with such name");
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Please fill the form");
    }
  };

  var onChange = e => setQuery(e.target.value);

   var onSubmit = e => {
    e.preventDefault();
    getData();
  };
  const [data,setData]=useState([]);
  useEffect(()=>{
    getDData();
  },[])
 var  getDData=()=>{
    fetch(" http://localhost:3001/formData")
    .then(d=>d.json())
    .then(res=>{
        console.log("res",res);
        setData(res);
    })
    console.log(data);
  }
  return (<>
   <h1>BONUS SEARCH FOOD BY EDAAM</h1>
      <form onSubmit={onSubmit} className="search-form">
        {alert !== "" && <Alert alert={alert} />}
        <input
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          autoComplete="off"
          placeholder="Search Food"
        />
        <input type="submit" value="Search" />
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
    <h1 className="App">IDHAR RECIPE DAALNE KA </h1>
    <div className="box">
      <Form getDData={getDData}/>
      <List data={data}/>
    </div>
    </>
  );
}

export default App;