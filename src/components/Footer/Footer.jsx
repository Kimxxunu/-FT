import React from "react";
import "./Footer.css";
import FooterTruck from '../../assets/Footer/FooterTruck.png'; 

const Footer = () =>{
    return(
        <div className="Footer">
        
        <div className="Footer-Left">
            <div className="Footer-Left-Title">
                <p>강원 FT</p>
            </div>
            <div className="Footer-Left-Content">
                <p>대표 : 김선우</p>
                <p>사업자번호 : 123-45-56789</p>
                <p>대표번호 : 010-2414-6020 / 010-1234-5678</p>
                <p>사업장소재지 : 강원 춘천시 성심로 26-1</p>
            </div>
            <div className="Footer-Left-Copyright">
                <p>Copyright ⓒ 강원 FT All rights reserved.</p>
            </div>
        </div>
        <div></div>
        <div className="Footer-Right">
            <div className="Footer-Right-Image">
                <img src={FooterTruck} alt="FooterTruck" />
            </div>
        </div>
    </div>
);
}
export default Footer;