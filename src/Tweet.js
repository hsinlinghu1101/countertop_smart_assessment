import  React from "react";
import './Tweet.css';
export default function Tweet(props) {

    const content = props.data.text
    const toShow = content.substring(0,100)+" ...";
    
    
    const showMore =(id)=>{
        props.setClickId(id)
    }
    
    const handleRemove=(id)=>{
        props.setTweets(tweets =>{
            return tweets.filter((item, i) => i !== id-1);
        })
    }
    return (
        <div className={props.selectId ? "clicked tweet" : "tweet"} onClick={()=>showMore(props.data.id)}>
            {props.selectId ? <p>{props.index}</p> : null}
            <p>{props.data.author}</p>
            {content.length<=100 ? <div className="content" > {content} </div> : props.selectId 
                ?<div className="content">{content}</div>
                :<div className="content">{toShow}</div>
            
            }
            <button className='btn' onClick={()=>handleRemove(props.index)}>remove</button>
        </div>
        
    )
}
