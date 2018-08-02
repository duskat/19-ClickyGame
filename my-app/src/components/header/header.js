import React, { Component } from 'react';
import "./header.css";



const Header = (props) =>(
    <header>
        <div className="bg-dark">
            <nav>
            <ul>
                <li className="brand"><a href="/">Clicky Game</a></li>
                <li className={props.class}>You guessed correctly!</li> 
                <li>Score: {props.count} | Top Score: {props.topCount} </li>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header