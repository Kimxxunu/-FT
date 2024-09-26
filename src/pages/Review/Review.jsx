import React from "react";
import "./Review.css";
import BoxContent from "../../components/BoxContent/BoxContent.jsx";
import TruckImage1 from '../../assets/Review/TruckImage1.png';
import TruckImage2 from '../../assets/Review/TruckImage2.png';
import TruckImage3 from '../../assets/Review/TruckImage3.png';
import TruckImage4 from '../../assets/Review/TruckImage4.png';
import TruckImage5 from '../../assets/Review/TruckImage5.png';
import TruckImage6 from '../../assets/Review/TruckImage6.png';
import TruckImage7 from '../../assets/Review/TruckImage7.png';
import TruckImage8 from '../../assets/Review/TruckImage8.png';
import TruckImage9 from '../../assets/Review/TruckImage9.png';
import TruckImage10 from '../../assets/Review/TruckImage10.png';
import TruckImage11 from '../../assets/Review/TruckImage11.png';
import TruckImage12 from '../../assets/Review/TruckImage12.png';

const Review = () => {

    const boxData = [
        {
            "img":TruckImage1,
            "title":"해링턴 어린이집",
            "content1":"[ 간식차 ]",
            "content2":"어린이 뿐 아니라 학부모님도 좋아하네요!"
        },
        {
            "img":TruckImage2,
            "title":"로제콘서트",
            "content1":"[ 커피차 ]",
            "content2":"팬분들이 준비한 커피차에요!"
        }, {
            "img":TruckImage3,
            "title":"여의도 벚꽃축제",
            "content1":"[ 식사차 ]",
            "content2":"핵존맛 닭강정이 왔습니다!"
        }, {
            "img":TruckImage4,
            "title":"삼양라면",
            "content1":"[ 식사차 ]",
            "content2":"쌀쌀한 날씨, 매콤하고 따듯한 국물!"
        }, {
            "img":TruckImage5,
            "title":"벤처기업협회",
            "content1":"[ 간식차 ]",
            "content2":"만족도가 엄청 높아요."
        }, {
            "img":TruckImage6,
            "title":"영화 '베테랑2' 촬영장",
            "content1":"영화 '베테랑2' 촬영장",
            "content2":"스태프들을 위해 준비한 간식차에요."
        }, {
            "img":TruckImage7,
            "title":"한림대학교 투어",
            "content1":"[ 커피차 ]",
            "content2":"인재모집 홍보를 푸드트럭과 함께."
        }, {
            "img":TruckImage8,
            "title":"신방초등학교",
            "content1":"[ 식사차 ]",
            "content2":"아이들이 좋아하는 음식을 준비했어요!"
        }, {
            "img":TruckImage9,
            "title":"현대건설",
            "content1":"[ 간식차 ]",
            "content2":"올 겨울에도 푸드트럭하우스와 함께 했어요."
        }, {
            "img":TruckImage10,
            "title":"청년정책 공모전",
            "content1":"[ 간식차 ]",
            "content2":"의미 있는 날에는 푸드트럭이 빠질 수 없죠."
        }, {
            "img":TruckImage11,
            "title":"영화 '모라동' 촬영 현장",
            "content1":"[ 식사차 ]",
            "content2":"스태프들이 아주 만족해합니다."
        },{
            "img":TruckImage12,
            "title":"영한석맨파워",
            "content1":"[ 간식차 ]",
            "content2":"임직원들이 아주 행복해합니다!"
        },
    ]

    return(
        <div className="Review">
            <div className="Review-Warp">
                <div className="Review-Warp-Title">
                    <p>강원FT와 함께한</p>
                    <p>고객사를 소개합니다.</p>
                </div>
                
                <div className="Review-Warp-Body">
                    {boxData.map((data)=>(
                        <BoxContent img={data.img} title={data.title} content1={data.content1} content2={data.content2}/>
                        ))
                    }
                </div>        
            </div>
        </div>
    );
}
export default Review;