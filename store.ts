import { atom } from "recoil";

export const userData = atom({
  key: "userData",
  default: [
    {
      id: undefined,
      userId: undefined,
      userImg: undefined,
      userName: undefined,
    },
  ],
});

export const updateCheckState = atom({
  key: "updateCheckState",
  default: false,
});
