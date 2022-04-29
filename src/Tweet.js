import  React from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import './Tweet.css';
export default function Tweet(props) {
    const navigate = useNavigate();

    let params = useParams();
    console.log(props.data === undefined , props.tweets.length === 0)
    
    const content = params.id ? props.tweets[params.id-1].text :  props.data.text 
    const toShow = content.substring(0,100)+" ...";
    
    const handleRemove=(id)=>{
        props.setTweets(tweets =>{
            return tweets.filter((item, i) => i !== id-1);
        })
        navigate("/")
    }
    return (
        <div className={params.id ? "clicked tweet" : "tweet"} >
            {params.id ? <p>{params.id}</p> : null}
            <p className="author">{params.id ? props.tweets[params.id-1].author: props.data.author}</p>
            {content.length<=100 ? <div className="content" > {content} </div> : params.id 
                ?<div className="content">{content}</div>
                :<div className="content">{toShow}</div>
            
            }
            <div className='btns'>
            {!params.id ? <Link to={`/tweets/${props.index}`} className='btn'>View Details</Link> : <Link to='/' className='btn'>Return</Link>}
            <button className='btn remove' onClick={()=>handleRemove(!params.id? props.index : params.id)}>Remove</button>
            </div>
        </div>
        
    )
}


