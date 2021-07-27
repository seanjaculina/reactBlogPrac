import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';


const App = () =>{
    return(
        <div className="ui container comments">
           <Comment name="Sean"/>
           <Comment name="Jaz"/>
           <Comment name="Kobe"/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));