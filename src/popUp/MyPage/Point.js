import { useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useRecoilValue } from "recoil";
import { userAtom } from "recoil/userAtom";
import { usePopUp } from "utils/usePopUp";

const Point = () => {
  const popUpPoint = usePopUp("MyPage/Point"); // Point 팝업 제어
  const pointRecord = useRecoilValue(userAtom).pointRecord; // 사용자 포인트 내역
  useEffect(() => {
    // 적립이냐 차가밍
    for (let i = 0; i < pointRecord.length; i++) {
      let item = document.getElementById(i);
      if (!pointRecord[i].type) {
        item.classList.add("bg-blue-300"); // 적립인 경우의 디자인
        item.textContent = `+${pointRecord[i].ammount}P`;
      } else {
        item.classList.add("bg-amber-300"); // 차감인 경우의 디자인
        item.textContent = `-${pointRecord[i].ammount}P`;
      }
    }
  }, []);
  return (
    <div className="fixed top-0 left-0 z-40 flex items-center justify-center w-screen h-screen bg-black bg-opacity-40">
      <div className="w-[1000px] h-[680px] rounded-2xl bg-white flex justify-center items-center">
        <div className="w-[942px] h-[631px] rounded-2xl bg-blue-100 px-8">
          <div className="flex justify-between mt-4">
            {/* 타이틀 */}
            <div className="font-extrabold text-[40px] text-blue-600 mt-4">
              포인트 사용 내역
            </div>
            {/* 팝업 끄기 위한 아이콘 */}
            <MdOutlineClose
              size={35}
              color="gray"
              onClick={() => popUpPoint.toggle()}
            />
          </div>
          <div className="w-[870px] h-[500px] rounded-2xl bg-sky-50 mt-4 pt-2">
            {/* 포인트 적립 / 차감 내역 */}
            {pointRecord.map((v, i) => {
              return (
                <div
                  className="w-[818px] h-[73px] flex justify-around items-center mx-auto mt-4"
                  key={i}
                >
                  {/* 날짜 + 사유 */}
                  <div className="w-[540px] h-full rounded-2xl bg-blue-100 font-bold text-xl flex justify-center items-center">
                    {`${v.date} ${v.reason}`}
                  </div>
                  {/* 적립 / 차감 포인트 */}
                  <div
                    className="w-[226px] h-full rounded-2xl font-bold text-xl flex justify-center items-center"
                    id={i}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Point;
