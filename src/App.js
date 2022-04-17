import axios from "axios";
import { useState, useEffect } from "react";
import Tweet from './Tweet';
import './App.css';

function App() {
  const [tweets, setTweets] = useState([]);
  const [clickId, setClickId] = useState(null);
  const [selectId, setSelectId] = useState(true);
   
  useEffect(()=>{
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
    <div className="App">
      <header className="App-header">
      Twitter tweets
      </header>
      <div className="tweets">
        {tweets.sort((a, b) => a.author.localeCompare(b.author))
               .map((data, index)=> clickId !== data.id 
               ?<Tweet key={data.id} data={data} setClickId={setClickId} index={index+1} setTweets={setTweets}/>
               :<Tweet key={data.id} data={data} selectId={selectId} setClickId={setClickId} index={index+1} setTweets={setTweets}/>)}
			</div>
    </div>
  );
}

export default App;
