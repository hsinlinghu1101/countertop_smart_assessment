import React from 'react';
import Tweet from './Tweet';
import './Tweets.css';

export default function Tweets(props) {
    return(
    <div className = "tweets" > 
    
     { 
        props.tweets.sort((a, b) => a.author.localeCompare(b.author))
        .map((data, index) => ( 
            <Tweet key = {data.id} data = {data} setClickId = {props.setClickId} index = {index + 1} tweets = {props.tweets} setTweets = {props.setTweets}/> 
        ))
         }  
        
    </div>
    )
}
