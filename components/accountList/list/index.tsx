import React, { useState, useEffect } from 'react';
import AccountItem from '../item';
import { app, database } from '../firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const AccountList = () => {
  const dbInstanceUserList = collection(database, 'userList');
  const [memberListAll, setMemberListAll] = useState([]);
  const [memberList, setMemberList] = useState([]);
  const dbInstanceAccountList = collection(database, 'accountList');
  const [accountList, setAccountList] = useState([]);
  const [accountListAll, setAccountListAll] = useState([]);
  const [totalPrice, setTotalPrice] = useState('0');
  const [nbbang, setNbbang] = useState('0');
  const [allCheck, setAllCheck] = useState(true);

  // 최초 모든 정보를 상태값에 저장. (멤버, 입출금 이력)
  const getListAll = async () => {
    let getUserList = [];₩
    let getAccountList = [];
    await getDocs(dbInstanceUserList).then((data) => {
      getUserList = data.docs.map((item) => {
        return { ...item.data(), id: item.id };
      });
      setMemberListAll(getUserList);
      setMemberList(getUserList);
    });
    await getDocs(dbInstanceAccountList).then((data) => {
      getAccountList = data.docs.map((item) => {
        return { ...item.data(), id: item.id };
      });
      setAccountListAll(getAccountList);
      setAccountList(getAccountList);
    });
    totalPriceCalculation(getUserList, getAccountList);
  };

  // memberList click effect.
  const btnActive = (e) => {
    const btnGroup = e.target.parentNode;
    btnGroup.querySelectorAll('button').forEach((item) => {
      item.classList.remove('active');
    });
    e.target.classList.add('active');
  };

  // member id로 account 목록을 filter 하는 함수.
  const targetFilter = (filterId, e) => {
    btnActive(e);
    if (filterId === -1) {
      setAccountList(accountListAll);
      totalPriceCalculation(memberList, accountListAll);
      setAllCheck(true);
    } else {
      const returnList = accountListAll.filter((item) => {
        return Number(item.targetId) === Number(filterId);
      });
      setAccountList(returnList);
      priceCalculation(returnList);
      setAllCheck(false);
    }
  };

  // 금액 단위로 숫자를 콤마 찍어서 return.
  const addComa = (number: number) => {
    const numberComa = number.toString().split('.');
    numberComa[0] = numberComa[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return numberComa.join('.');
  };

  // userId 값으로, 해당 user의 이름을 return 합니다.
  const returnUserName = (userId: number) => {
    let returnName = '(이름없음)';
    memberList.forEach((item) => {
      if (Number(item.id) === userId) returnName = item.userName;
    });

    return returnName;
  };

  // total 잔액을 표기하는 함수.
  const totalPriceCalculation = (user, account) => {
    let returnPrice = 0;
    account.forEach((item) => (returnPrice += Number(item.calculation)));
    setTotalPrice(addComa(returnPrice));
    setNbbang(addComa(returnPrice / user.length));
  };

  // target 잔액을 표기하는 함수.
  const priceCalculation = (filterAccountList) => {
    let returnPrice = 0;
    filterAccountList.forEach((item) => (returnPrice += Number(item.calculation)));
    setTotalPrice(addComa(returnPrice));
  };

  useEffect(() => {
    getListAll();
  }, []);

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
              onClick={(e) => targetFilter(-1, e)}
            >
              all
            </button>
            {memberList &&
              memberList.map((item, idx) => {
                return (
                  <button
                    key={idx}
                    style={{ backgroundImage: `url(${item.userImg})` }}
                    onClick={(e) => targetFilter(item.id, e)}
                  >
                    {item.userName}
                  </button>
                );
              })}
            <button type="button" className="btn-expenditure" onClick={(e) => targetFilter(0, e)}>
              all
            </button>
          </p>
        </div>
      </SectionBox>
      <SectionBox>
        <ul>
          {accountList &&
            accountList
              .sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))
              .map((item, idx) => {
                return (
                  <li key={idx}>
                    <AccountItem
                      dateTime={item.dateTime}
                      accountName={returnUserName(item.targetId)}
                      price={item.calculation}
                      description={item.description}
                    />
                  </li>
                );
              })}
        </ul>
      </SectionBox>
    </>
  );
};