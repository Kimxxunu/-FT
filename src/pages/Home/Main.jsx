import React from "react";
import "./Main.css";
import CallLogo from '../../assets/Home/callLogo.png';
import TruckImg from '../../assets/Home/TruckImg.png';
import BoxContent from "../../components/BoxContent/BoxContent.jsx";
import SchoolTruck from '../../assets/Home/SchoolTruck.jpg';
import Truck333 from '../../assets/Review/TruckImage2.png';
import Truck111 from '../../assets/Review/TruckImage5.png';
 

const Main = () => {

    const boxData = [
        {
            "img": Truck111,
            "title":"기업",
            "content1":"일하느라 지친 임직원들에게",
            "content2":"맛있는 빵과 커피를 선물하세요."
        },
        {
            "img": SchoolTruck,
            "title":"학교",
            "content1":"공부에 지친 학생들을 위해",
            "content2":"든든한 간식을 선물하세요."
        },{
            "img":Truck333,
            "title":"축제/행사",
            "content1":"많은 인원들이 모이는 축제",
            "content2":"힘나는 음식을 선물하세요."
        }
    ]

    return(
        <div className="Main">
        
            <div className="Main-Block1">
                <div className="Main-Block1-Contents">
                    <div className="Main-Block1-Contents-Content">
                        <div  className="Main-Block1-Contents-Content-call">
                            <img src={CallLogo} alt="CallLogo" />
                        </div>
                        <div  className="Main-Block1-Contents-Content-BigFont">
                            <p>강원을 가득 싣고 가는 트럭</p>
                            <p>소중한 분들에게 강원도를 선물하세요.</p>
                        </div>
                        <div  className="Main-Block1-Contents-Content-SmallFont">
                            <p>신속 정확하게, 전국 어디든 강원FT는</p>
                            <p>강원도의 맛집 음식을 가득 싣고 찾아갑니다!</p>
                        </div>
                    </div>
                    <div className="Main-Block1-Contents-Image">
                        <img src={TruckImg} alt="TruckImg" />
                    </div>
                </div>
            </div>

            <div className="Main-Block2">
                <div className="Main-Block2-Wrap">
                <div className="Main-Block2-Header">
                    <div className="Main-Block2-Header-Title">
                        <p>강원 FT는 신속하게</p>
                        <p>여러분을 찾아갑니다.</p>
                    </div>
                    <div className="Main-Block2-Header-Content">
                        <p>회사, 학교, 행사 등 단테 식사, 간식이 필요할 때 푸드트럭을 불러주세요.</p>
                    </div>
                </div>

                <div className="Main-Block2-Body">
                    <div className="Main-Block2-Body-Blue">
                        <div className="Main-Block2-Body-Blue-ContentsBlock1">
                        <div className="Main-Block2-Body-Blue-ContentsBlock1-Contents">
                            <div className="Main-Block2-Body-Blue-ContentsBlock1-Contents-Title">
                                <p># 서비스소개</p>
                            </div>
                            <div className="Main-Block2-Body-Blue-ContentsBlock1-Contents-Content">
                                <p>강원FT의</p>
                                <p>서비스를 소개해드립니다.</p>
                            </div>
                            </div>
                        </div>
                        <div className="Main-Block2-Body-Blue-ContentsBlock2">
                            <div className="Main-Block2-Body-Blue-ContentsBlock2-Contents">
                            <div className="Main-Block2-Body-Blue-ContentsBlock2-Contents-Title">
                                <p># 요금안내</p>
                            </div>
                            <div className="Main-Block2-Body-Blue-ContentsBlock2-Contents-Content">
                                <p>합리적인 비용으로</p>
                                <p>강원FT를 이용해보세요.</p>
                            </div>
                            </div>
                        </div>
                        <div className="Main-Block2-Body-Blue-ContentsBlock3">
                        <div className="Main-Block2-Body-Blue-ContentsBlock3-Contents">
                            <div className="Main-Block2-Body-Blue-ContentsBlock3-Contents-Title">
                                <p># 이용 안내</p>
                            </div>
                            <div className="Main-Block2-Body-Blue-ContentsBlock3-Contents-Content">
                                <p>전체적인 서비스 진행과정을</p>
                                <p>친절하게 알려드립니다.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="Main-Block2-Body-White">
                        <div className="Main-Block2-Body-White-ContentsBlock1">
                        <div className="Main-Block2-Body-White-ContentsBlock1-Contents">
                            <div className="Main-Block2-Body-White-ContentsBlock1-Contents-Title">
                                <p># 메뉴</p>
                            </div>
                            <div className="Main-Block2-Body-White-ContentsBlock1-Contents-Content">
                                <p>강원FT의</p>
                                <p>메뉴를 소개해드려요.</p>
                            </div>
                            </div>
                        </div>
                        <div className="Main-Block2-Body-White-ContentsBlock2">
                        <div className="Main-Block2-Body-White-ContentsBlock2-Contents">
                            <div className="Main-Block2-Body-White-ContentsBlock2-Contents-Title">
                                <p># 후기</p>
                            </div>
                            <div className="Main-Block2-Body-White-ContentsBlock2-Contents-Content">
                                <p>만족도 높은</p>
                                <p>서비스 후기를 확인하세요</p>
                            </div>
                            </div>
                        </div>
                        <div className="Main-Block2-Body-White-ContentsBlock3">
                        <div className="Main-Block2-Body-White-ContentsBlock3-Contents">
                            <div className="Main-Block2-Body-White-ContentsBlock3-Contents-Title">
                                <p># 인스타 후기 바로가기</p>
                            </div>
                            <div className="Main-Block2-Body-White-ContentsBlock3-Contents-Content">
                                <p>강원FT 인스타그램에서는</p>
                                <p>매일 최신 소식이 업로드됩니다.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                </div>

                <div className="Main-Block3">
                <div className="Main-Block3-wrap">
                    <div className="Main-Block3-Header">
                        <div className="Main-Block3-Header-Title">
                            <p>푸드트럭,</p>
                            <p>어디서 주로 이용하나요?</p>
                        </div>
                        <div className="Main-Block3-Header-Content">
                            <p>회사, 학교 축제 및 행사 등 사람들이 모이는 곳에 맛있는 음식이 필요하죠 ♬</p>
                        </div>
                    </div>
                    <div className="Main-Block3-body">
                        {boxData.map((data)=>(
                            
                            <BoxContent img={data.img} title={data.title} content1={data.content1} content2={data.content2}/>
                            
                        ))

                        }
                    </div>
                    
                </div>
                </div>
                
            </div>
        
        
    );
}
export default Main;