import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import faker from "faker";

const App = () =>{
    return(
        <div className="ui container comments">
           <Comment name="Sean" timeAgo="Today at 7:18PM" image={faker.image.avatar()} comment="Hey nice blog man!"/>
           <Comment name="Jaz" timeAgo="Today at 2:00AM" image={faker.image.avatar()} comment="Keep up the good work I love this website!"/>
           <Comment name="Kobe" timeAgo="Yesterday at 5:00PM" image={faker.image.avatar()} comment="Whats up Sean!"/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));