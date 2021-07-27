import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import Approval from './Approval';
import faker from "faker";

const App = () =>{
    return(
        <div className="ui container comments">
            <Approval>
               <Comment
                   name="Sean"
                   timeAgo="Today at 7:18PM"
                   image={faker.image.avatar()}
                   comment="Hey nice blog man!"
               />
            </Approval>
            <Approval>
           <Comment
               name="Jaz"
               timeAgo="Today at 2:00AM"
               image={faker.image.avatar()}
               comment="Keep up the good work I love this website!"/>
            </Approval>
           <Approval>
           <Comment
               name="Kobe"
               timeAgo="Yesterday at 5:00PM"
               image={faker.image.avatar()}
               comment="Whats up Sean!"/>
           </Approval>
        </div>

    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));