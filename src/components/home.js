import React from 'react';
import Footeer from './footer';
import Navv from './nav';
import Carousel from 'react-bootstrap/Carousel';
import one from '../imges/1.jpg';
import two from '../imges/2.jpg'
import web from '../imges/web.png';
import state from '../imges/state.png'
import '../home.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/esm/Button';

function HomePage() {
    const [posts, setPosts] = useState([]);
    const [anposts, setAnPosts] = useState([]);
    useEffect(()=>{
        axios.get('https://newsapi.org/v2/top-headlines?country=eg&category=health&apiKey=1903f6bd0aa548db8b8a771e1bc02d6d')
        .then(res=> {
            console.log(res)
            setPosts(res.data.articles)
        })
        .catch(err=>{
            console.log(err)
        })
    },[]);
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
    return (
        <>

            <Navv />
            <div>
                <Carousel  >
                    <Carousel.Item className="cimg">
                        <img
                            className="d-block imm"
                            src={one}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2 className="hh2">Your guid to feel better from your home</h2>
                            <input type="text" placeholder="Search.." name="search"  style={{ borderRadius:"10px" , width:"222px"}} />
                            <button type="submit"><i class="fa fa-search"></i></button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="cimg">
                        <img
                            className="d-block w-100 imm"
                            src={two}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h2  className="hh2">The easiest way to check on yourself with proffesional doctors</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <img src={web} width="50px" height="50px" className="m-2 imgtext" />
            <h2 className="newstext m-2">News Feed</h2>
            {//statistics
            <div class="row news m-3">
                <div className="col-4">
            <img src={state} className="tempimg " /></div>
            <div className="col-8">
                     <p  style={{fontSize:"20px",color:"#744646" }} className=" mt-3" ><b>Today Cases: {anposts.todayCases}</b></p>
                     <p  style={{fontSize:"20px",color:"#744646", fontWeight:"bolder" }} className=" " >Total Cases: {anposts.cases}</p>
                     <p  style={{fontSize:"20px",  marginLeft:"230px",color:"#744646", fontWeight:"bolder" }}  >Today Recovered: {anposts.todayRecovered}</p>
                     <p  style={{fontSize:"20px",  marginLeft:"230px",color:"#744646", fontWeight:"bolder" }}  >Total Recovered: {anposts.recovered}</p>
                     <p  style={{ fontSize:"20px",  marginLeft:"550px",color:"#744646", fontWeight:"bolder" }}  >Today deaths: {anposts.todayDeaths}</p>
                     <p  style={{fontSize:"20px", marginLeft:"550px",color:"#744646", fontWeight:"bolder" }}  >Total deaths: {anposts.deaths}</p>
                     </div>
                     </div>
                     
                }
               {//news
                    posts.map(post => <a href={post.url}><div class="row news m-3">
                        <img src={post.urlToImage} className="tempimg" />
                        <pre style={{position:"relative",paddingBottom:"0px"}} key={post.id}>{post.publishedAt}</pre>
                    <p className="temptext mt-3" key={post.id}>{post.title}</p>
                    <p className="temptextdesc " key={post.id}> {post.description}</p>
                    </div></a>)
                }
                
            
            <Footeer />
        </>
    );
}

export default HomePage;