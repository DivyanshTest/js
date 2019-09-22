import React, { Component } from 'react'

export default class Post extends Component {

    state={
        insidePostData:[]
    }

componentDidMount(){
    console.log(this.props)
    let id=this.props.match.params.post_id;
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    .then(resp=>resp.json())
    .then(data=>{
        console.log(data);
        this.setState({
            insidePostData:data
        }
            )
            
    })
    

}

    render() {
        const {insidePostData}=this.state;
        let title=insidePostData.title;
        let body=insidePostData.body;
        return (
            <div className="conatiner">
                <h1 className='center'>{title} </h1>
                <p  className='center' >{body}</p>
            </div>
        )
    }
}
