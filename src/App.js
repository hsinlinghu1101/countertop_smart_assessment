import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {
  useState,
  useEffect
} from "react";
import Tweets from './Tweets';
import Tweet from './Tweet';
import Header from './Header';
import './App.css';

function App() {
  const [tweets, setTweets] = useState([]);
  const [clickId, setClickId] = useState(null);


  useEffect(() => {
    axios.get("/tweets")
      .then((response) => {
        const data = response.data.data
        setTweets(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])



  return ( 
    <BrowserRouter>
    <div className = "App" >
    <Header/>
    <Routes >
    <Route path = '/'
    element = {
      
      <>
      {tweets.length > 0 ? (
      <Tweets tweets={tweets} setClickId = {setClickId} setTweets = {setTweets}/>
      ): <div>No Tweets To Show</div>}
      </>
    }
    /> 
    <Route 
    path = "/tweets/:id"
    element = {
      <Tweet tweets = {tweets} setClickId = {setClickId} setTweets = {setTweets}
      />} />

      </Routes>  
      </div> 
      </BrowserRouter>
    );
  }

  export default App;