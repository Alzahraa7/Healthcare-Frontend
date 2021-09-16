import '../home.css';
import axios from 'axios';
import React , {useState, useEffect} from 'react';


function APItry (){
    const [anposts, setAnPosts] = useState([]);
    
    var config = {
        method: 'get',
        url: 'https://corona.lmao.ninja/v2/countries/Egypt?yesterday=true&strict=true&query =',
        headers: { }
      };
    useEffect(()=>{
        axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    setAnPosts(response.data)
  })
  .catch(function (error) {
    console.log(error);
  })
    },[])
    return(
        <div>
            <ul>
                {
                     <li >{anposts.updated}</li>
                }
            </ul>
        </div>
    );
}

export default APItry;


/*function APItry (){
    const [posts, setPosts] = useState([]);
    var config = {
        method: 'get',
        url: 'https://corona.lmao.ninja/v2/countries?yesterday&sort',
        headers: { }
      };
    useEffect(()=>{
        axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    setPosts(response.data)
  })
  .catch(function (error) {
    console.log(error);
  })
    },[])
    return(
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.cases}>{post.country}<br/>{post.todayCases}</li>)
                }
            </ul>
        </div>
    );
}

export default APItry;*/