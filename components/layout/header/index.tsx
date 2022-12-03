import { HeaderBox, BtnThemeColor } from "./style";
import { useRecoilState } from "recoil";
import { themeColor } from "../../../store";

const Header = () => {
  const [isThemeColor, setThemeColor] = useRecoilState(themeColor);
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
  };

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
          <a href="https://reliable-florentine-21f16f.netlify.app">ADMIN</a>
        </h1>
      </HeaderBox>
    </>
  );
};
export default Header;
