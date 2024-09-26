import React from "react";
import "./BoxContent.css";

const BoxContent = ({img, title, content1, content2}) => {
    return (
        <div className="BoxContent">
            <div className="BoxContent-img">
                <img src={img} alt="image" />
            </div>
            <div className="BoxContent-contents">
                <div className="BoxContent-contents-title">
                    <p>{title}</p>
                </div>
                <div className="BoxContent-contents-content">
                    <p>{content1}</p>
                    <p>{content2}</p>
                </div>
            </div>
        </div>
    );
}
export default BoxContent;