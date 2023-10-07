import Finder from "components/Finder";
import { usePopUp } from "utils/usePopUp";
import SelectStore from "popUp/SelectStore";
import SelectDateTime from "popUp/SelectDateTime";
import NoticeCarousel from "./NoticeCarousel";
import { useRecoilValue, useRecoilState } from "recoil";
import { useAlert } from "utils/useAlert";
import { userPreferSelector } from "recoil/userAtom";
import { preferOptionAtom } from "recoil/preferOptionAtom";
import CarCard from "components/CarCard";
import PreferOption from "./PreferOption";
import CarDetail from "popUp/CarSearch/CarDetail";
import { useEffect, useState, useRef } from "react";
import { finderAtom } from "recoil/finderAtom";

const CarSearch = () => {
  const storePopUp = usePopUp("CarSearch/SelectStore");
  const dateTimePopUp = usePopUp("CarSearch/SelectDateTime");
  const carDetailPopUp = usePopUp("CarSearch/CarDetail");

  const preferOption = useRecoilValue(preferOptionAtom); // 선호 옵션 데이터
  const [userPreferInfo, setUserPreferInfo] =
    useRecoilState(userPreferSelector); // 사용자의 선호 옵션 정보
  const [preferTitles, _] = useState(["차량 크기", "유종", "구동기"]); // 옵션 타이틀

  const alert = useAlert(); // Alert 제어

  const [currentStore, setCurrentStore] = useState(null);
  const finderInfo = useRecoilValue(finderAtom);

  /* 변경 정보 수집 함수 */
  const gatherInfo = () => {
    let newPrefer = {
      carSizes: [],
      oilTypes: [],
      transmissions: [],
    };
    /* 정보 수집 */
    Object.keys(newPrefer).forEach((v) => {
      preferOption[v].forEach((val) =>
        newPrefer[v].push(document.getElementById(val).checked)
      ); // 체크 여부 확인
    });
    newPrefer.minCount = document.getElementById("minCount").value;
    return newPrefer;
  };

  useEffect(() => {
    setCurrentStore(finderInfo);
  }, []);

  return (
    <>
      <div className="mt-[65px] flex flex-col items-center">
        <div className="w-[860px] h-[70px] rounded-2xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mt-[20px] bg-white flex items-center justify-between z-10">
          <Finder storePopUp={storePopUp} dateTimePopUp={dateTimePopUp} />
        </div>

        <div className="w-[1140px] h-[1281px] mt-[50px] flex justify-around select-none">
          <div className="w-[264px]">
            {/* 사용자 선호 설정 */}
            <div className="w-full h-[530px] bg-blue-200 rounded-xl flex flex-col items-center justify-start">
              <div className="mt-3">
                <div className="mt-2 mb-5 text-xl font-bold text-blue-800">
                  선호 차량 검색
                </div>
                {/* 차량 크기, 유종, 구동기 */}
                {Object.keys(preferOption).map((v, i) => {
                  return (
                    <PreferOption
                      title={preferTitles[i]}
                      content={preferOption[v]}
                      userPrefer={userPreferInfo.prefer[v]}
                      key={i}
                    />
                  );
                })}
                {/* 최소 인원 */}
                <PreferOption title="최소 인원" userInfo={userPreferInfo} />
                <div className="flex justify-around mt-9">
                  {/* 불러오기 버튼 */}
                  <button className="text-[20px] font-semibold w-[135px] h-[44px] rounded-xl bg-blue-500 text-white">
                    나의 선호 옵션
                  </button>
                  {/* 찾기 버튼 */}
                  <button
                    className="text-[20px] font-semibold w-[55px] h-[44px] rounded-xl bg-amber-400"
                    onClick={() => {
                      if (
                        document.getElementById("minCount").value.trim() === ""
                      ) {
                        // 최소 인원 수가 입력되지않은 경우
                        // 왠진 모르겠는데 작동안함
                        alert.onAndOff("최소 인원 수를 입력해주세요.");
                      } else {
                        alert.onAndOff("옵션을 변경하였습니다.");
                        // 해당부분을 검색으로 변경해야 함.
                        // 알람 작동 안함

                        console.log(gatherInfo());
                        setUserPreferInfo(gatherInfo());
                      }
                    }}
                  >
                    찾기
                  </button>
                </div>
              </div>
            </div>
            {/* 공지사항 */}
            <div className="w-full">
              {/* 어떤 지점 공지사항 */}
              <div className="flex flex-col items-center justify-center my-3">
                <span>
                  <span className="font-bold text-blue-600">대구 수성구</span>점
                  <br />
                </span>
                <span className="text-xl font-semibold">공지사항</span>
              </div>

              {/* 공지사항 슬라이더 */}
              <div className="h-[485px]">
                <NoticeCarousel />
              </div>
            </div>
          </div>

          {/* 차량 리스트 */}
          <div className="w-[860px] h-[1000px] pb-5 grid grid-cols-3 overflow-y-scroll">
            {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((v, i) => {
              return (
                <div
                  onClick={() => {
                    carDetailPopUp.toggle();
                  }}
                >
                  <CarCard></CarCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 팝업 구역 */}
      {storePopUp.isClicked ? (
        <SelectStore popUpInfo={storePopUp} />
      ) : undefined}
      {dateTimePopUp.isClicked ? (
        <SelectDateTime popUpInfo={dateTimePopUp} />
      ) : undefined}
      {carDetailPopUp.isClicked ? (
        <CarDetail popUpInfo={carDetailPopUp} />
      ) : undefined}
    </>
  );
};

export default CarSearch;
