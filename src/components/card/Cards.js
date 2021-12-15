import React from 'react'
import { data } from "../../helper/data"
import "./Card.css"

const Cards = () => {
    return (
        <div className='container-card'>
            <h1 >Language</h1>
            {
                data.map((card, index) => {
                    return(
                        
                        <div className='card' key={index}>
                            
                            <img src={card.img} alt="" />
                            <h4>{card.name}</h4>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cards;
