import { DefaultTheme } from "styled-components";
import { useRecoilValue } from "recoil";
import { themeColor } from "../store";

export const theme: DefaultTheme = {
  color: {
    purple: "#8661de",
    gray: "#f6f6f6",
    green: "#07b495",
    lightGreen: "#99ecdd",
    darkGray: "#54595d",
  },
  boxShadow: {
    normal: "0 3px 8px 0 rgb(0 0 0 / 10%)",
    purple: "0 3px 8px 0 #d6c9ff",
    blue: "0 3px 8px 0 #b3e2e6",
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};

export const themeColorSet = () => {
  const colorCode = useRecoilValue(themeColor);
  return colorCode;
};
