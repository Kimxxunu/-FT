import React from "react";
import "./Information.css";
import InformationImage from '../../assets/Information/InformationImage.png';
import InformationContent from "../../components/Information/InformationContent.jsx";


const Information = () => {

    const InformationData = [
        {
            "title": "01. 상담하기",
            "middle1": "고객님의 행사에 맞춤 상담을 도와드립니다.",
            "middle2": "원활한 상담을 위해 사전에 아래 필수 사항을 체크해주세요!",
            "black1": "Q. 최소 수량은 어떻게 되나요?",
            "blue1": "A. 최소 수량은 음식 값 기준 600,000원 이상부터 가능합니다",
            "black2": "Q. 행사 진행이 불가능한 지역이 있나요?",
            "blue2": "A. 강원FT는 고객님이 원하신다면 24시간 전국 어디든 달려갑니다.",
        },{
            "title": "02. 견적 확인",
            "middle1": "상담 내용을 토대로 견적서를 작성하여 보내드립니다.",
            "middle2": "견적서를 확인하시고 진행 여부를 결정해주세요!",
            "black1": "Q. 출장비는 어떻게 되나요?",
            "blue1": "A. 기본 출장비(서울, 경기 남부권)는 10만원이며, 거리에 따라 상이할 수 있습니다.",
            "black2": "Q. 타견적서도 발행이 가능한가요?",
            "blue2": "A. 비교견적, 타견적 등 필요하시면 전부 발송해드립니다.",
        },{
            "title": "03. 예약금 및 계약서",
            "middle1": "고객님의 행사에 맞춤 상담을 도와드립니다.",
            "middle2": "원활한 상담을 위해 사전에 아래 필수 사항을 체크해주세요!",
            "black1": "Q. 최소 수량은 어떻게 되나요?",
            "blue1": "A. 최소 수량은 음식 값 기준 600,000원 이상부터 가능합니다",
            "black2": "Q. 행사 진행이 불가능한 지역이 있나요?",
            "blue2": "A. 강원FT는 고객님이 원하신다면 24시간 전국 어디든 달려갑니다.",
        },{
            "title": "01. 상담하기",
            "middle1": "견적서 내용을 토대로 본격적인 진행을 위해",
            "middle2": "계약서를 작성하고 예약금을 입금해주시면 푸드트럭이 최종 확정됩니다.",
            "black1": "Q. 예약금이 꼭 필요한가요?",
            "blue1": "A. 결제 정산 이슈로 애매하시면 예약금을 따로 안받고 있습니다.",
            "black2": "Q. 예약금은 얼마인가요?",
            "blue2": "A. 예약금은 전체 금액의 10% 입니다.",
        },{
            "title": "04. 디자인물 제작",
            "middle1": "행사에 사용할 출력물이 필요하시다면, 상담 과정에서 말씀해주세요.",
            "middle2": "원하시는 디자인으로 직접 제작하셔도 되고, 디자인 대행 또한 해드립니다.",
            "black1": "Q. 디자인물은 어떤게 있나요?",
            "blue1": "A. 현수막(차량에 부착), 엑스배너, 스티커, 영상 출력(가능차량/불가능차량) 등이 있습니다.",
            "black2": "Q. 디자인물은 필수인가요?",
            "blue2": "A. 디자인물은 선택 사항이며, 기본 출력물 1장씩 제공됩니다.",
        },{
            "title": "05. 행사 진행",
            "middle1": "원활한 행사 진행을 위해 본 행사 전 담당자가 한번 더 연락을 드립니다.",
            "middle2": "행사 당일, 푸드트럭 하우스가 현장에서 맛있는 음식을 선물해드립니다.",
            "black1": "Q. 푸드트럭은 언제 도착하나요?",
            "blue1": "A. 행사 시간 약 1시간 전 도착하여 준비합니다.",
            "black2": "Q. 음식 제공수량 카운팅 방법은 어떻게 하나요?",
            "blue2": "A. 음식 용기의 실시간 소진량으로 체크하며 쿠폰 발급 or 명부 확인 등 원하시는 방법으로도 가능합니다.",
        },{
            "title": "06. 잔금 결제",
            "middle1": "행사 종료 후 예약금을 제외한 잔금 결제가 진행됩니다.",
            "middle2": "결제 및 정산 서류 발급까지 완료해드립니다.",
            "black1": "Q. 현장에서 추가된 음식이나 시간은 어떻게 계산하나요?",
            "blue1": "A. 현장에서 추가된 음식은 행사 종료 후 최종 견적서에 추가되어 나간 수량 + 음식값 포함하여 진행됩니다.",
            "black2": "Q. 세금계산서 발행도 가능한가요?",
            "blue2": "A. 발행 가능합니다.",
        },
    ]

    return (
        <div className="Information">
            <div className="Information-White">
                <div className="Information-Warp">
                    <div className="Information-Warp-Header">
                        <div className="Information-Warp-Header-Contents">
                            <div className="Information-Warp-Header-Contents-Title">
                                <p>서비스 진행 과정을 알려드려요!</p>
                            </div>
                            <div className="Information-Warp-Header-Contents-Content">
                                <p>서비스 준비부터 본 행사까지,</p>
                                <p>모두 강원FT에서 준비해드립니다.</p>
                            </div>
                        </div>
                    </div>
                    <div className="Information-Warp-Image">
                        <img src={InformationImage} alt="TInformationImage" />
                    </div>
                </div>
            </div>
            <div className="Information-Warp2">
                <div className="Information-Warp-Body">
                    {InformationData.map((data) => (
                        <InformationContent title={data.title} middle1={data.middle1} middle2={data.middle2} black1={data.black1} blue1={data.blue1} black2={data.black2} blue2={data.blue2} />
                    ))
                    }
                </div>
            </div>



        </div>
    );
}
export default Information;