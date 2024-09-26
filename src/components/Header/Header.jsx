import React from "react";
import "./Header.css";
import logo from '../../assets/Header/GangwonFtLogo.jpg';
import instagramIcon from '../../assets/Header/InstargramButton.png';
import kakaoIcon from '../../assets/Header/KakaotalkButton.png';
import FooterTruck from '../../assets/Footer/FooterTruck.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="header-wrap">
                <div className="header-left">
                    <Link to={'/'}>
                        <img src={logo} alt="logo" className="header-logo" />
                        <span className="header-title">강원FT</span>
                    </Link>
                </div>
                <div className="header-nav">
                    <Link to={'/information'}>이용 안내</Link>
                    <Link to={'/Find'}>푸드트럭 찾기</Link>
                    <Link to={'/Alliance'}>제휴 업체</Link>
                    <Link to={'/Review'}>후기</Link>
                </div>
                <div className="header-right">
                    <a href="https://www.instagram.com/k_sunu_59/" className="header-icon instagram">
                        <img src={instagramIcon} alt="Instagram" />
                    </a>
                    <a href="http://pf.kakao.com/_JTHwG" className="header-icon kakao">
                        <img src={kakaoIcon} alt="Kakao" />
                    </a>
                    <div className="header-right-checkbox">
                        <input type="checkbox" id="menuicon" />
                        <label htmlFor="menuicon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        <div className="sidebar">
                        <div className="sidebar-Image">
                        <img src={FooterTruck} alt="TruckImg" />
                    </div>
                            <ul id="sidebar_ul">
                                <li><Link to={'/information'}>이용 안내</Link></li>
                                <li><Link to={'/Find'}>푸드트럭 찾기</Link></li>
                                <li><Link to={'/Alliance'}>제휴 업체</Link></li>
                                <li><Link to={'/Review'}>후기</Link></li>
                                <li><a href="https://www.instagram.com/k_sunu_59/" className="header-icon instagram2">
                                        <img src={instagramIcon} alt="Instagram" />
                                    </a></li>
                                <li><a href="http://pf.kakao.com/_JTHwG" className="header-icon kakao2">
                        <img src={kakaoIcon} alt="Kakao" />
                    </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;
