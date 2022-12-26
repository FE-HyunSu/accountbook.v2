import React, { useState, useEffect } from "react";
import AccountItem from "../item/index";
import { SectionBox } from "./style";
import { getData } from "../../../firebase/firestore";
import { userData } from "../../../store";
import { useRecoilState, useRecoilValue } from "recoil";

interface accountListInit {
  targetId: number;
  dateTime: string;
  description?: string;
  calculation: number;
}

const AccountList = () => {
  const [accountList, setAccountList] = useState<accountListInit[]>([]);
  const [accountListAll, setAccountListAll] = useState<accountListInit[]>([]);
  const [totalPrice, setTotalPrice] = useState<string>("0");
  const [nbbang, setNbbang] = useState<string>("0");
  const [userCount, setUserCount] = useState<number>(0);
  const [allCheck, setAllCheck] = useState<boolean>(true);
  const [userList, setUserList] = useRecoilState(userData);
  const userListData = useRecoilValue(userData);

  const getUserListData = () => {
    let getUserList: any = [];
    getData("userList").then((data) => {
      getUserList = data.docs.map((item: any) => {
        return { ...item.data() };
      });
      setUserCount(getUserList.length);
      setUserList(getUserList);
    });
  };

  const getAccountListData = () => {
    let getAccountList: Array<accountListInit> = [];
    getData("accountList").then((data) => {
      getAccountList = data.docs.map((item: any) => {
        return { ...item.data(), id: item.id };
      });
      setAccountListAll(getAccountList);
      setAccountList(getAccountList);
      totalPriceCalculation(getAccountList);
      setAllCheck(true);
    });
  };

  const getListAll = async () => {
    await getUserListData();
    await getAccountListData();
  };

  const btnActive = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const btnGroup = e.currentTarget.parentNode;
    btnGroup?.querySelectorAll("button").forEach((item) => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  const targetFilter = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    filterId: number
  ) => {
    btnActive(e);
    setAccountList([]);
    setTimeout(() => {
      if (filterId === -1) {
        setAccountList(accountListAll);
        totalPriceCalculation(accountListAll);
        setAllCheck(true);
      } else if (filterId === -2) {
        const returnList = accountListAll.filter((item: accountListInit) => {
          return item.targetId === undefined;
        });
        setAccountList(returnList);
        totalPriceCalculation(returnList);
        setAllCheck(false);
      } else {
        const returnList = accountListAll.filter((item: accountListInit) => {
          return item.targetId === Number(filterId);
        });
        setAccountList(returnList);
        priceCalculation(returnList);
        setAllCheck(false);
      }
    }, 16);
  };

  const addComa = (number: number) => {
    const numberComa = number.toString().split(".");
    numberComa[0] = numberComa[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numberComa.join(".");
  };

  const returnUserName = (targetUserId: number) => {
    return userListData.filter((item) => {
      return item.userId === targetUserId;
    })[0]?.userName;
  };

  const countEffect = (num: number) => {
    let viewCount = 0;
    let gap = (num / 30) * (num > 0 ? 1 : -1);

    let countInterval = setInterval(() => {
      if (viewCount >= Math.abs(num)) {
        clearInterval(countInterval);
        setTotalPrice(addComa(num));
      } else {
        viewCount = viewCount + gap;
        setTotalPrice(addComa(Math.floor(viewCount)));
      }
    }, 16);
  };

  const totalPriceCalculation = (account: Array<accountListInit>) => {
    let returnPrice: number = 0;
    account.forEach(
      (item: accountListInit) => (returnPrice += Number(item.calculation))
    );
    countEffect(returnPrice);
    setNbbang(addComa(returnPrice / userCount));
  };

  const priceCalculation = (filterAccountList: Array<accountListInit>) => {
    let returnPrice = 0;
    filterAccountList.forEach(
      (item: accountListInit) => (returnPrice += Number(item.calculation))
    );
    countEffect(returnPrice);
  };

  useEffect(() => {
    getListAll();
  }, [nbbang]);

  return (
    <>
      <SectionBox>
        <div className="total-price">
          <strong>{totalPrice}</strong>
          <em className={allCheck ? `active` : ``}>1/n 정산 :{nbbang}</em>
          <p>
            <button
              type="button"
              className="btn-listall active"
              onClick={(e) => targetFilter(e, -1)}
            >
              all
            </button>
            {userListData &&
              userListData[0].userId !== undefined &&
              userListData.map((item: any, idx: number) => {
                return (
                  <button
                    key={idx}
                    style={{
                      backgroundImage: `url(${item.userImg})`,
                      animationDelay: idx * 0.07 + `s`,
                    }}
                    onClick={(e) => targetFilter(e, item.userId)}
                  >
                    {item.userName}
                  </button>
                );
              })}
            <button
              type="button"
              className="btn-expenditure"
              onClick={(e) => targetFilter(e, -2)}
            >
              지출
            </button>
          </p>
        </div>
      </SectionBox>
      <SectionBox>
        <ul>
          {accountList &&
            accountList
              .sort(
                (a: any, b: any) =>
                  +new Date(b.dateTime) - +new Date(a.dateTime)
              )
              .map((item: any, idx: number) => {
                return (
                  <li key={idx}>
                    <AccountItem
                      dateTime={item.dateTime}
                      contents={
                        returnUserName(item.targetId) === undefined
                          ? item.description
                          : returnUserName(item.targetId)
                      }
                      price={item.calculation}
                      itemIndex={idx}
                    />
                  </li>
                );
              })}
        </ul>
      </SectionBox>
    </>
  );
};

export default AccountList;
