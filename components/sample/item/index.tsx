import { AccountCard } from './style';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver'; // Observer hooks 호출.
import React, { useRef } from 'react';

interface sampleItems {
  price: number;
  description: string;
}

const SampleItem = ({ price, description }: sampleItems) => {
  const itemRef = useRef<HTMLDListElement | null>(null); // 타겟 ref 선언.
  const entry = useIntersectionObserver(itemRef, {}); // import 한 useIntersectionObserver 함수에, ref와 빈 객체를 인자로 담는다.(기본값으로 적용하겠다는 의미) { threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false }
  const isVisible = !!entry?.isIntersecting; // isIntersecting 값으로 노출 여부 판단.

  return (
    <>
      <AccountCard ref={itemRef} className={isVisible ? `active` : ``}>
        <dt>
          <strong>{description}</strong>
        </dt>
        <dd className={Number(price) > 0 ? `plus` : `minus`}>{price}</dd>
      </AccountCard>
    </>
  );
};

export default SampleItem;
