import React from "react";
import "./BoxContent2.css";
import { Link } from 'react-router-dom';

const BoxContent2 = ({ img, title, content, nowLocation }) => {
    return (
        <Link to='/detail' state={{ img, title, content, nowLocation }}>
            <div className="BoxContent2">
                <div className="BoxContent-img">
                    <img src={img} alt={title || "Box Content Image"} />
                </div>
                <div className="BoxContent-contents">
                    <div className="BoxContent-contents-title">
                        <p>{title}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default BoxContent2;
