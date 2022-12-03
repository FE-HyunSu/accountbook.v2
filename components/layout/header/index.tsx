import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { themeColor } from "../../../store";
import { useCookies } from "react-cookie";
import { HeaderBox, BtnThemeColor } from "./style";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [isThemeColor, setThemeColor] = useRecoilState(themeColor);
  const [cookies, setCookie, removeCookie] = useCookies(["themeCode"]);
  const themeList = [
    {
      name: "pink",
      colorCode: "#ffa5ac",
    },
    {
      name: "blue",
      colorCode: "#9ec2df",
    },
    {
      name: "yellow",
      colorCode: "#f8d346",
    },
    {
      name: "gray",
      colorCode: "#bcbcbc",
    },
  ];
  const themeChange = (colorCode: string) => {
    setThemeColor(colorCode);
    setCookie("themeCode", colorCode);
  };
  const paramCheck = (key: string) => {
    const themeParam = router.asPath;
    return themeParam.split(key + `=`)[1]?.split("&")[0];
  };
  useEffect(() => {
    setThemeColor(
      paramCheck("themeCode") !== undefined
        ? paramCheck("themeCode")
        : cookies.themeCode !== undefined
        ? cookies.themeCode
        : "#ffa5ac"
    );
  }, []);
  return (
    <>
      <HeaderBox>
        <h1>
          <strong>
            {themeList &&
              themeList.map((item, idx) => (
                <BtnThemeColor
                  key={idx}
                  style={{ backgroundColor: item.colorCode }}
                  onClick={() => themeChange(item.colorCode)}
                >
                  {item.name}
                </BtnThemeColor>
              ))}
          </strong>
          <a
            href={
              `https://reliable-florentine-21f16f.netlify.app?themeCode=` +
              isThemeColor
            }
          >
            ADMIN
          </a>
        </h1>
      </HeaderBox>
    </>
  );
};
export default Header;
