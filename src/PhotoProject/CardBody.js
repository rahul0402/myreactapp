import React from "react";
export default function CardBody(props){
    return(
        <div>
            <img className="cardImage" src={`../assets/${props.img}`}></img>
            <div className="card-stats">
                <img className="StarImage" src={`../assets/${props.small_img}`}></img>
                <span>{props.rating}</span>
                <span>{props.tot_rat} . </span>
                <span>Orange</span>
            </div>
            <p className="CardPara">{props.card_para}</p>
        </div>
    )
}