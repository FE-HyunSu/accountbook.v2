import React from 'react';
import SampleItem from '../item/index';
import { SectionBox } from './style';

const SampleTest = () => {
  const testData = [
    { text: 'active 클래스가 있다면 모션효과 적용', data: 10000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 20000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 30000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 40000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 50000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 60000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 70000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 110000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 120000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 130000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 110000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 70000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 110000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 120000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 130000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 110000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 1230000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 110000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 120000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 130000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 110000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 70000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 110000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 120000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 130000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 110000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 1230000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 110000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 120000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 130000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 110000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 70000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 110000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 120000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 130000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 110000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 1230000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 110000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 120000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 130000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 110000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 70000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 110000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 120000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 130000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 110000 },
    { text: 'active 클래스가 있다면 모션효과 적용', data: 1230000 },
  ];

  return (
    <>
      <SectionBox>
        <ul>
          {testData &&
            testData.map((item: any, idx: number) => {
              return (
                <li key={idx}>
                  <SampleItem price={item.data} description={item.text} />
                </li>
              );
            })}
        </ul>
      </SectionBox>
    </>
  );
};

export default SampleTest;
