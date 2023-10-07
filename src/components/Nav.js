import { useRecoilValue } from "recoil";
import { userAtom } from "recoil/userAtom";
import { Link } from "react-router-dom";
import Logo from "assets/Logo.png";

const Nav = () => {
  const userName = useRecoilValue(userAtom).name;
  return (
    <>
      <div className="w-screen h-[65px] fixed z-30 bg-sky-50 border-b-slate-300 border-[1px] flex flex-row justify-center select-none top-0">
        <div className="flex w-[1140px] justify-between items-center">
          <div className="flex items-center pl-4">
            <Link to="/">
              <img src={Logo} alt="logo" className="w-[130px] object-contain" />
            </Link>
            <div className="text-base text-blue-500 font-semibold pl-[60px] mt-[3px]">
              여행하는 즐거움의 발견 유렌카!!
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="w-[200px] flex justify-end items-center mr-3">
              <Link to="center">
                <div className="mx-2 px-1 py-1 hover:px-4 hover:py-2 transition-all ease-in rounded-md hover:shadow-[0_0_5px_1px_rgba(0,0,0,0.2)] hover:text-blue-500">
                  <span className="text-base font-semibold transition-all ease-in">
                    고객센터
                  </span>
                </div>
              </Link>
              <Link to="mypage">
                <div className="mx-2 px-1 py-1 hover:px-4 hover:py-2 transition-all ease-in rounded-md hover:shadow-[0_0_5px_1px_rgba(0,0,0,0.2)] hover:text-blue-500">
                  <span className="text-base font-semibold transition-all ease-in">
                    마이페이지
                  </span>
                </div>
              </Link>
            </div>
            <span className="pr-4 ml-4 text-lg font-bold">
              <span className="text-amber-400">{userName}</span> 고객님
              안녕하세요!
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
