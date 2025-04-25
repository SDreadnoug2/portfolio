import React from "react";
import "./Card.css";

export default function Card ({title, company, link, src}) {
    return (
         <div className="Card">
            <img className="Card__image" src={src} alt={title} href={link} />
            <a className="Card__title" href={link}>{title}</a>
            <p className="Card__subtitle">{company}</p>
         </div>
    )
}