import React from "react";
import "./Alliance.css";
import SimpleSlider from "../../components/SimpleSlider/SimpleSlider.jsx";

const Alliance = () => {
    return (
        <div className="Alliance">
            <div className="Alliance-Warp">
                <div className="Alliance-Warp-Title">
                    <p>강원FT와 함께하는 제휴 업체입니다.</p>
                </div>
                <div className="Alliance-Warp-Body">
                    <SimpleSlider />
                </div>
            </div>
        </div>
    );
}

export default Alliance;