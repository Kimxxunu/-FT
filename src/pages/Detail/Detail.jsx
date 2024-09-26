import React from "react";
import { useLocation } from "react-router-dom";
import "./Detail.css";
import Location from "../../components/Location.js";

const Detail = () => {
    const location = useLocation();
    const { img, title, content, nowLocation } = location.state || { img: "", title: "", content: "", nowLocation: "37.566535, 126.977969" }; // Default to a valid location

    return (
        <div className="Detail">
            <div className="Detail-Warp">
                <div className="Detail-Warp-Title">
                    <p>{title}</p>
                </div>
                <div className="Detail-Warp-Middle">
                    <div className="Detail-Warp-Middle-Image">
                        <img src={img} alt={title || "Detail Image"} />
                    </div>
                    <div className="Detail-Warp-Middle-Map">
                        <Location nowLocation={nowLocation} />
                    </div>
                </div>
                <div className="Detail-Warp-Contents">
                    <div className="Detail-Warp-Contents-Warp">
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
