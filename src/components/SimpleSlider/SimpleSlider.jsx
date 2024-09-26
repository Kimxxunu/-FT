import React, { Component } from "react";
import Slider from "react-slick";
import "./SimpleSlider.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BoxContent2 from "../../components/BoxContent2/BoxContent2.jsx";
import restaurant1_1 from '../../assets/restaurant/restaurant1-1.png';
import restaurant1_2 from '../../assets/restaurant/restaurant1-2.png';
import restaurant1_3 from '../../assets/restaurant/restaurant1-3.png';
import restaurant1_4 from '../../assets/restaurant/restaurant1-4.png';
import restaurant2_1 from '../../assets/restaurant/restaurant2_1.png';
import restaurant2_2 from '../../assets/restaurant/restaurant2_2.png';
import restaurant2_3 from '../../assets/restaurant/restaurant2_3.png';
import restaurant2_4 from '../../assets/restaurant/restaurant2_4.png';
import restaurant3_1 from '../../assets/restaurant/restaurant3_1.png';
import restaurant3_2 from '../../assets/restaurant/restaurant3_2.png';
import restaurant3_3 from '../../assets/restaurant/restaurant3_3.png';
import restaurant4_1 from '../../assets/restaurant/restaurant4_1.png';
import restaurant4_2 from '../../assets/restaurant/restaurant4_2.png';
import restaurant4_3 from '../../assets/restaurant/restaurant4_3.png';
import restaurant5_1 from '../../assets/restaurant/restaurant5_1.png';
import restaurant5_2 from '../../assets/restaurant/restaurant5_2.png';
import restaurant5_3 from '../../assets/restaurant/restaurant5_3.png';
import restaurant6_1 from '../../assets/restaurant/restaurant6_1.png';
import restaurant6_2 from '../../assets/restaurant/restaurant6_2.png';
import restaurant6_3 from '../../assets/restaurant/restaurant6_3.png';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const boxData = [
      {
        "img": restaurant1_1,
        "title": "오월커피",
        "content": "적산가옥을 리모델링해서 만들어진 공간 입니다. 솔향강릉을 본따만든 시그니처 커피인 송화커피는 소나무 꽃에서 송화가루를 추출하여 송화크림으로 만들어 낸 커피입니다. 그외에도 솔잎버터를 사용한 소금빵등 소나무를 활용하여 음료와 디저트를 만들고 있습니다.",
        "nowLocation": "37.750769, 128.893176"
      },
      {
        "img": restaurant1_2,
        "title": "강릉오징어순대",
        "content": "안녕하세요 구독자 천만 유튜버 ’햄지’님이 직접 Pick 한 찐 맛집 오징어순대 & 아바이순대 포장 전문점 ’강릉오징어순대’입니다 저희 가게는 겉은 쫄깃하고 속은 씹을수록 쫀득하고 고소한 맛이 일품인 오징어순대와 속초 아바이 마을의 명물인 아바이순대를 메인으로 하고 있는 순대전문점입니다. 매장에 방문해 보신 분들은 아시겠지만 저희는 매일 청결하게 관리하고 있는 매장 안에서 오징어순대와 아바이순대를 찌고 있습니다. 번거롭더라도 최상의 맛을 위해 매일 찌고 썬 후 주문 즉시 계란 물에 구워드리고 있으며, ’강릉오징어순대’만의 특제 비법이 담긴 청양 마요 소스와 오징어 젓갈, 그리고 무말랭이를 함께 제공해 드립니다. 오직 순대에만 집중한 ’순대전문점’으로 고객님들께 최고의 맛과 서비스로 보답해 드릴 수 있도록 최선을 다하겠습니다. 동해안의 명물인 오징어순대와 아바이순대를 꼭 맛보시길 추천드려요 :) - 전국 택배 이용 안주,반찬,간식으로도 즐기기에 좋은 오징어순대와 아바이순대를 집에서도 간편하게 즐겨보세요 다양한 조리법이 담긴 안내문과 함께 보내드리며, 밀키트보다 조리 방법이 간단해 선물용은 물론, 집들이와 캠핑 음식으로 즐기기에도 좋습니다.",
        "nowLocation": "37.753773, 128.899409"
      },
      {
        "img": restaurant1_3,
        "title": "강릉짬뽕순두부",
        "content": "강릉여행하면 꼭 한번쯤 먹어봐야하는 초당순두부! 너무맛있어서 2TV생생정보에도 소개된 그집! 강릉짬뽕순두부 입니다. 화끈한 불맛이 나는 짬뽕과 순두부의 조화 짬순! 짬뽕순두부 생긴건 무섭지만 맛만큼은 끝내주는 강릉짬뽕순두부의 명물! 망치순두부 고소한 맛이 일품인 하얀순두부 후회하지않도록 해드리겠습니다! 강문해변 5분, 세인트존스호텔5분 거리에 있습니다.",
        "nowLocation": "37.792368, 128.917867"
      },
      {
        "img": restaurant1_4,
        "title": "갤러리밥스",
        "content": "2020년 초당옥수수크림을 직접 개발하여 오직 갤러리밥스에서만 맛볼 수 있는 오리지널 초당옥수수커피는 최고로 당도가 높아 맛좋기로 유명한 해남 초당옥수수로 매일 정성을 다해 만들고 있습니다.",
        "nowLocation": "37.787269, 128.907990"
      }
    ];

    const boxData2 = [
      {
        "img": restaurant2_1,
        "title": "속초항아리물회",
        "content": "저희 속초항아리물회는 맛과 신뢰를 바탕으로 항상 깨끗하고 맛있는 음식을 제공하기 위해 노력하고 있습니다. 오랫동안 공들여 만든 특제육수로 속초항아리물회만의 시원한 맛을 느낄 수 있고싱싱한 푸짐한 모둠회, 다양한 해산물과 채소로 즐거운 맛집 여행이 될 수 있도록 최선을 다하고 있습니다. 쾌적한 분위기와 공간 속에서 맛있는 물회도 맛보고 즐거운 바다여행 되시길 기원합니다. 속초항아리물회는 좋은 재료, 청결, 친절을 가장 최우선으로 하는 음식점입니다. 감사합니다.",
        "nowLocation": "38.191570, 128.601264"
      },
      {
        "img": restaurant2_2,
        "title": "만석닭강정",
        "content": "국내 치킨 시장은 웰빙 추세에 따라 새롭고 다양한 타입의 제품 출시가 잇따르고 있지만 만석닭강정은 1983년 창립 이래 30년에 걸친 전통의 맛을 지켜내며 소비자의 입맛에 딱 맞는 조화로운 맛의 개발과 함께 현재 대한민국 닭강정 대표 브랜드로 우뚝 서고 있습니다. ",
        "nowLocation": "38.204369, 128.590048"
      },
      {
        "img": restaurant2_3,
        "title": "남경막국수",
        "content": "남경막국수 (본점)은 대포항 입니다 속초에서 소스및 각종 양념을 공급 해줍니다! [남경막국수 대포항본점] 속초시 대포항희망길 47 (화요일휴무) [tvN][수요미식회][129회. 17.08.02] 물막국수/비빔막국수 [OliveTV][2015테이스티로드][42회. 15.12.05] 물막국수 [중앙일보][소비자 투표 막국수 맛집 1위][2105.03.14] [홍콩TVB][동시간대시청률1위][2017.11.13]",
        "nowLocation": "38.172804, 128.606324"
      },
      {
        "img": restaurant2_4,
        "title": "추필여국시",
        "content": "안녕하세요! 추필여 국시 입니다🥰https://www.instagram.com/cupilyeogugsi/ 추필여국시가 인스타그램 계정을 만들었습니다. 앞으로 추필여국시에 관한 이야기들은 인스타그램을 통해서 많이 알려드리겠습니다❣️ 오늘은 월요일임으로 금일휴업입니다! 내일 화요일은 정상영업하니 많이 와주세요😘",
        "nowLocation": "38.188841, 128.591881"
      }
    ];

    const boxData3 = [
      {
        "img": restaurant3_1,
        "title": "춘천통나무집닭갈비",
        "content": "저춘천 닭갈비의 자존심! 46년 전통의 통나무집닭갈비 입니다.~",
        "nowLocation": "37.933060, 127.793229"
      },
      {
        "img": restaurant3_2,
        "title": "룡의부활",
        "content": "춘천에서 가장 맛있는 중국집! 룡~~~의 부활!!! 여기는 볶음밥이 최고 맛있죠! 값싸고 양많은 중국집! 룡의 부활로 식사하러오세요! ",
        "nowLocation": "37.881182, 127.739129"
      },
      {
        "img":  restaurant3_3,
        "title": "감자밭",
        "content": "Life is Gamza! 감자밭 위치 특성상 멀리서 방문하시는 고객이 감자빵 구매를 하지 못하셨을때 실망감 발생을 방지하고자 예약서비스를 오픈합니다 고객님들께서 더욱 편리하게 매장을 이용하고 빵을 구매할 수 있도록, 감자밭 예약 선결제 픽업서 비스를 도입함으로써 고객님 매장 방문 시 불필요한 대기 시간을 최소화하였습니다 미리 결제하고, 원활한 구매를 해보세요 그럼 오늘도 '일상의 소중함'을 전하는 감자밭에서 만나요!",
        "nowLocation": "37.929576, 127.784531"
      }
      
    ];

    const boxData4 = [
      {
        "img":  restaurant4_1,
        "title": "원주복숭아빵",
        "content": "365일 원주특산품, 원주복숭아를 만나보세요 :) 강원도 원주지역에서 생산된 치악산 복숭아를 그대로 말린뒤 갈아넣어 복숭아의 맛과 향, 로컬푸드의 신선함까지 그대로 담아 만들었습니다. 국내산 쌀을 이용하여 담백하고 건강하게 드실 수 있으며 복숭아 모양을 꼭 닮아 눈으로도 즐거운 원주대표 디저트, 원주복숭아빵입니다. 커피,차,우유 등과 함께하시면 더 맛있게 즐기실 수 있습니다. 정성스럽고 꼼꼼한 패키지를 더해 답례품, 선물용으로 추천드립니다. (명절선물 / 각종행사답례품 / 입학,졸업선물 / 집들이선물 / 감사한 마음을 담아 스승의날, 어버이날 선물) * 단체주문 전화문의 부탁드립니다 * * 보관방법 * - 본 제품은 탈산소제를 사용함으로 봉지내 산소를 제거하여 미생물의 번식을 막아 장기보존이 가능케 한 특수포장입니다. (탈산소제는 섭취하시면 안되니 주의해주시기 바랍니다.) - 직사광선을 피해 서늘한 곳에 보관하시고 장기간 보관시, 냉동보관 후 자연해동하여 드세요 - 개봉 후엔 가급적 이틀 안으로 드시길 바랍니다.",
        "nowLocation": "37.336914, 127.933893"
      },
      {
        "img":  restaurant4_2,
        "title": "원조남원추어탕",
        "content": "이곳이 추워탕의 원조다!!! 최상급 미꾸라지만 사용합니다!!",
        "nowLocation": "37.328837,  127.961285"
      },
      {
        "img":   restaurant4_3,
        "title": "토지옹심이",
        "content": "매주 수요일은 정기휴무일입니다. 공휴일/설(당일 휴무)/추석(당일휴무)은 정상 영업합니다. 매일 저녁 100% 국내산 생감자를 갈아 만든 수제옹심이입니다~!",
        "nowLocation": "37.322911, 127.958464"
      }
      
    ];

    const boxData5 = [
      {
        "img": restaurant5_1,
        "title": "영월장어마을",
        "content": "장어포장,택배가능(소스,생강만 제공) 저희업소는 저렴한 가격으로 장어를 제공하기 위하여 가족끼리 운영하는 소규모 가게입니다. 고객님들의 편의를 위하여 방문시 미리 예약바랍니다.",
        "nowLocation": "37.210153, 128.476446"
      },
      {
        "img": restaurant5_2,
        "title": "감자바우 옹심이",
        "content": "건강한 강원도 감자로 만든 쫄깃한 '옹심이' 옹심이에 칼국수까지 맛보는 '옹칼(옹심이 칼국수)' 집에서 생각날 때, '감자떡'으로 직접 만들어 먹어요 ^^",
        "nowLocation": "37.176012, 128.477610"
      },
      {
        "img": restaurant5_3,
        "title": "장릉식당",
        "content": "매곤드레나물을 넣고 지은 곤드레밥이 유명한 곳입니다. 양념간장에 비벼 먹는 곤드레밥은 다른 반찬이 필요없어요. 곤드레는 영양가도 풍부하고 부드럽게 씹히는 맛이 밥과 잘 어울려 강원도의 추천 음식입니다. 산채비빔밥, 보리밥, 청국장 등의 메뉴도 인기가 많습니다.",
        "nowLocation": "37.194764, 128.455042"
      }
      
    ];

    const boxData6 = [
      {
        "img": restaurant6_1,
        "title": "우와담",
        "content": "횡성한우전문점 ! 횡성에서 직접 한우를 키우는 아들과 오랜세월 식당운영 및 직접 장까지 담그는 어머니의 음식이 함께하는 곳 ,진짜 횡성한우를 좋은가격에 맛볼 수 잇는 곳 ,전망좋고 채광좋은 한우전문점",
        "nowLocation": "37.497648, 127.990639"
      },
      {
        "img": restaurant6_2,
        "title": "7080만두찐빵도너츠",
        "content": "7080만두찐빵도너츠 7080만두찐빵도너츠 7080만두찐빵도너츠 7080만두찐빵도너츠 7080만두찐빵도너츠 7080만두찐빵도너츠",
        "nowLocation": "37.307605, 127.816929"
      },
      {
        "img": restaurant6_3,
        "title": "저문강에 삽을 씻고",
        "content": "저문강에삽을씻고는 1994년 8월 25일 영업을 시작한 이래 30년이 넘도록 2대째 내려오는 횡성에 유일 전통 경양식 레스토랑입니다.",
        "nowLocation": "37.499358, 127.992293"
      }
    ];

    return (
      <div className="SliderContents">
        <div className="SliderContents-Wrap">
          <div className="SliderContents-Title">
            <p>강릉</p>
          </div>
          <div className="SliderContents-Body">
            <Slider {...settings}>
              {boxData.map((data, index) => (
                <BoxContent2
                  key={index}
                  img={data.img}
                  title={data.title}
                  content={data.content}
                  nowLocation={data.nowLocation}
                />
              ))}
            </Slider>
          </div>
        </div>
        <div className="SliderContents-Wrap">
          <div className="SliderContents-Title">
            <p>속초</p>
          </div>
          <div className="SliderContents-Body">
            <Slider {...settings}>
              {boxData2.map((data, index) => (
                <BoxContent2
                  key={index}
                  img={data.img}
                  title={data.title}
                  content={data.content}
                  nowLocation={data.nowLocation}
                />
              ))}
            </Slider>
          </div>
        </div>
        <div className="SliderContents-Wrap">
          <div className="SliderContents-Title">
            <p>영월</p>
          </div>
          <div className="SliderContents-Body">
            <Slider {...settings}>
              {boxData5.map((data, index) => (
                <BoxContent2
                  key={index}
                  img={data.img}
                  title={data.title}
                  content={data.content}
                  nowLocation={data.nowLocation}
                />
              ))}
            </Slider>
          </div>
        </div>
        <div className="SliderContents-Wrap">
          <div className="SliderContents-Title">
            <p>원주</p>
          </div>
          <div className="SliderContents-Body">
            <Slider {...settings}>
              {boxData4.map((data, index) => (
                <BoxContent2
                  key={index}
                  img={data.img}
                  title={data.title}
                  content={data.content}
                  nowLocation={data.nowLocation}
                />
              ))}
            </Slider>
          </div>
        </div>
        <div className="SliderContents-Wrap">
          <div className="SliderContents-Title">
            <p>춘천</p>
          </div>
          <div className="SliderContents-Body">
            <Slider {...settings}>
              {boxData3.map((data, index) => (
                <BoxContent2
                  key={index}
                  img={data.img}
                  title={data.title}
                  content={data.content}
                  nowLocation={data.nowLocation}
                />
              ))}
            </Slider>
          </div>
        </div>
        <div className="SliderContents-Wrap">
          <div className="SliderContents-Title">
            <p>횡성</p>
          </div>
          <div className="SliderContents-Body">
            <Slider {...settings}>
              {boxData6.map((data, index) => (
                <BoxContent2
                  key={index}
                  img={data.img}
                  title={data.title}
                  content={data.content}
                  nowLocation={data.nowLocation}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
