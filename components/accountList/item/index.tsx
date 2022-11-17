import { AccountCard } from './style';
import { useRef, useState, useEffect } from 'react';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

interface accountItems {
  dateTime: string;
  accountName: string;
  price: number;
  description: string;
  itemIndex: number;
}

const AccountItem = ({ dateTime, accountName, price, description, itemIndex }: accountItems) => {
  const itemRef = useRef<HTMLDListElement | null>(null); // 타겟 ref 선언.
  const entry = useIntersectionObserver(itemRef, {}); // import 한 useIntersectionObserver 함수에, ref와 빈 객체를 인자로 담는다.(기본값으로 적용하겠다는 의미) { threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false }
  const isVisible = !!entry?.isIntersecting; // isIntersecting 값으로 노출 여부 판단.
  const [motionDelay, setMotionDelay] = useState<number>(0);
  const addComa = (number: number) => {
    const numberComa = number.toString().split('.');
    numberComa[0] = numberComa[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return numberComa.join('.');
  };

  const shortDate = (date: string) => {
    return date.split('-')[1] + '.' + date.split('-')[2];
  };

  useEffect(() => {
    setMotionDelay(itemIndex * 0.05);
  }, []);

  return (
    <>
      <AccountCard
        ref={itemRef}
        className={isVisible ? `active` : ``}
        style={{ animationDelay: (isVisible ? motionDelay : 0) + `s` }}
      >
        <dt>
          <span>{shortDate(dateTime.split(' ')[0])}</span>
          <strong>{Number(price) > 0 ? accountName : description}</strong>
        </dt>
        <dd className={Number(price) > 0 ? `plus` : `minus`}>{addComa(price)}</dd>
      </AccountCard>
    </>
  );
};

export default AccountItem;
