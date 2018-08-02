import React from "react";
import "./images.css"

const Images = props => (
 
                <div className="img-container card bg-light" onClick={() => props.shuffleImage(props.id)}>
                    <img alt={props.name} src={props.image} />
                </div>
        

);

export default Images