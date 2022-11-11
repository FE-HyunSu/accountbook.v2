import styled from 'styled-components';

export const SectionBox = styled.section`
  display: block;
  position: relative;
  .total-price {
    padding: 5rem 0 7rem;
    background-color: #ffa5ac;
    text-align: center;
    strong {
      display: inline-block;
      padding-bottom: 0.5rem;
      font-weight: 700;
      font-size: 3.8rem;
      color: #111;
      transition: 0.3s;
      &:after {
        content: '원';
        font-weight: 700;
      }
      &:hover {
        transform: scale(1.1, 1.1);
        @media only screen and (max-width: 992px) {
          transform: scale(1, 1);
        }
      }
    }
    em {
      display: block;
      padding-bottom: 0;
      font-size: 1.4rem;
      text-align: center;
      transition: 0.3s;
      opacity: 0;
      &.active {
        padding-bottom: 1rem;
        opacity: 0.4;
      }
      &:before {
        content: '(';
      }
      &:after {
        content: '원)';
      }
      &:hover {
        transform: scale(1.1, 1.1);
        @media only screen and (max-width: 992px) {
          transform: scale(1, 1);
        }
      }
    }
    button {
      display: inline-block;
      width: 4rem;
      height: 4rem;
      margin-right: 0rem;
      background-size: 100% auto;
      border-radius: 100%;
      text-indent: -999rem;
      border: 0rem solid #fff;
      transition: 0.2s;
      opacity: 1;
      &.active {
        border: 0.1rem solid #fff;
        transform: scale(1.4) rotate(-8deg) !important;
        z-index: 2;
      }
      &.btn-listall {
        position: relative;
        background-color: #999;
        opacity: 0.7;
        &:before {
          content: 'ALL';
          display: block;
          position: absolute;
          width: 100%;
          font-weight: 500;
          font-size: 1.2rem;
          color: #fff;
          line-height: 1.2;
          text-indent: 0;
        }
      }
      &.btn-expenditure {
        position: relative;
        background-color: #999;
        opacity: 0.7;
        &:before {
          content: '지출';
          display: block;
          position: absolute;
          width: 100%;
          font-weight: 500;
          font-size: 1.2rem;
          color: #fff;
          line-height: 1.2;
          text-indent: 0;
        }
      }
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        transform: scale(1.2);
        @media only screen and (max-width: 992px) {
          transform: scale(1, 1);
        }
      }
    }
  }
`;
