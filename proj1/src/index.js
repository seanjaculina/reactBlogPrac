import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import faker from "faker";

const App = () =>{
    return(
        <div className="ui container comments">
           <Comment name="Sean" timeAgo="Today at 7:18PM" image={faker.image.avatar()}/>
           <Comment name="Jaz" timeAgo="Today at 2:00AM" image={faker.image.avatar()}/>
           <Comment name="Kobe" timeAgo="Yesterday at 5:00PM" image={faker.image.avatar()}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));