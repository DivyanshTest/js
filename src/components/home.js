import React, { Component } from 'react'
import { post } from 'selenium-webdriver/http';
import {Link, NavLink, withRouter } from 'react-router-dom';
// import pokeball from ' /pokeball.png';

export default class home extends Component {

    state={
        posts:[ ]
    }

componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp=>{
        console.log(resp);
        return resp.json();
    
    })
    
    .then(data=>{
        this.setState({
        posts:data.slice(0,10)
        })
        
        console.log(data);
    });

    }

    render() {

        const {posts}=this.state;
        const postList=posts.length ?  (posts.map(data=>{
            return (
                <div className="post card" key={data.id}>
                    {/* <img src="pokeball" alt=""/> */}
                    <div className="card-content">
                        <Link to={'/' + data.id}>
                        <span className="card-title red-text">
                            {data.title}
                        </span>
                        </Link>
                        <p>{data.body}</p>
                    </div>
                </div>
            )
        })): (<div className='center'> posts object is empty</div>)

                return (
                <div className='conatiner'>
                    <h1 className='center'>Home</h1>
                    {postList}
                    
                </div>
            )
    }
}
