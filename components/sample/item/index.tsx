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
  const isVisible = !!entry?.isIntersecting; // !! 는 확실한 논리결과를 가지기 위해 사용. 예를 들어 정의되지 않은 변수 undefined 값을 가진 내용의 논리 연산 시에도 확실한 true / false를 가지도록 하는게 목적.

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
