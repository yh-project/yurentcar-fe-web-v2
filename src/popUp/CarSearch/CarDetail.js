import { MdOutlineClose } from "react-icons/md";
import { useEffect, useState, useRef } from "react";
import {
  MdEditRoad,
  MdLocalCarWash,
  MdDirectionsCar,
  MdSettings,
  MdPeople,
} from "react-icons/md";

const CarDetail = ({ popUpInfo, selectedStore, selectedTime }) => {
  const detailTemplate = [
    {
      title: "주행거리",
      icons: <MdEditRoad />,
    },
    {
      title: "차량 크기",
      icons: <MdDirectionsCar />,
    },
    {
      title: "유종",
      icons: <MdLocalCarWash />,
    },
    {
      title: "구동기",
      icons: <MdSettings />,
    },
    {
      title: "승차인원",
      icons: <MdPeople />,
    },
  ];

  const dummy = ["50000km", "중형", "전기", "자동", "5인승"];

  return (
    <>
      {/* 팝업 뒤의 어두운 화면 */}
      <div className="fixed top-0 left-0 z-40 flex items-center justify-center w-screen h-screen bg-black select-none bg-opacity-40">
        {/* 팝업 본체 */}
        <div className="bg-white w-[1050px] h-[640px] rounded-2xl flex justify-center items-center ">
          <div className="bg-sky-50 w-[1000px] h-[600px] rounded-xl relative flex flex-col items-center justify-around">
            {/* 닫기 버튼 */}
            <button
              className="absolute top-2 left-2"
              onClick={() => {
                popUpInfo.toggle();
              }}
            >
              <MdOutlineClose size={49} color="gray" />
            </button>

            <div className="w-[839px] h-[250px] bg-white rounded-xl shadow-figma flex items-center justify-around">
              {/* 차량 사진 */}
              <div className="w-[345px] h-[210px] bg-blue-200 rounded-2xl">
                <img
                  className="object-fill w-full h-full rounded-2xl"
                  src="https://thecatapi.com/api/images/get?format=src&type=gif"
                  alt=""
                />
              </div>
              {/* 차량 설명 */}
              <div className="w-[345px] h-[210px] flex flex-col items-start">
                <div>
                  <div className="font-bold text-[30px]">GRANDEUR HG</div>
                  <div className="font-semibold text-[24px] text-gray-500 -mt-2">
                    58부 7792
                  </div>
                </div>
                <p className="mt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
            </div>

            {/* 차량 정보 */}
            <div className="w-[839px] h-[300px] bg-blue-200 rounded-xl grid grid-cols-3 gap-3 p-3">
              {/* 차량 특징 */}
              <div className="grid grid-cols-2 col-span-2 gap-3 p-3 bg-white rounded-xl">
                {detailTemplate.map((v, i) => {
                  return (
                    <div className="flex flex-col items-center justify-center rounded-xl bg-sky-100">
                      <div className="flex items-center text-[20px] font-semibold self-start px-4">
                        <span>{v.title}</span>
                        <span className="ml-4 text-[28px]">{v.icons}</span>
                      </div>
                      <div className="text-[24px] font-semibold text-blue-900 self-end px-4">
                        {dummy[i]}
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* 차량 결제 정보 */}
              <div className="flex flex-col justify-around col-span-1 px-5 bg-white rounded-xl">
                <div className="text-[20px] font-semibold text-blue-900 mt-[15px]">
                  결제정보
                </div>
                <div>
                  <div className="text-[14px] font-medium">대구 수성구점</div>
                  <div className="text-[20px] font-semibold -mt-2">
                    9/10 10:00 ~ 9/11 11:00
                  </div>
                </div>
                <div className="flex justify-between mt-2">
                  <div>
                    <div className="text-[16px] font-medium">할인</div>
                    <div className="-mt-1 font-semibold text-gray-400 line-through text-[20px]">
                      ₩270000
                    </div>
                  </div>
                  <div className="flex flex-col items-end mt-1">
                    <div className="text-[12px] font-medium">
                      성수기 할인 이벤트
                    </div>
                    <div className="-mt-1 font-semibold text-red-500">-30%</div>
                  </div>
                </div>
                <div className="mt-2 ">
                  <div className="text-[16px] font-medium">예상 결제액</div>
                  <div className="text-[24px] -mt-1 font-semibold text-blue-500">
                    ₩200000
                  </div>
                </div>
                <button className="w-[110px] h-[44px] bg-amber-400 rounded-xl font-semibold text-[20px] self-end mb-[10px] -mr-2">
                  예약하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetail;
