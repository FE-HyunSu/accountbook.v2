import styled, { keyframes } from 'styled-components';

const viewMotion = keyframes`
  0%{transform:translate(-100px); opacity:0;}
  70%{transform:translate(10px); opacity:1;}
  100%{transform:translate(0px); opacity:1;}
`;

export const AccountCard = styled.dl`
  display: flex;
  position: relative;
  width: 100%;
  border-top: 1px solid #f4f4f4;
  font-size: 1.4rem;
  transition: 0.2s;
  box-sizing: border-box;
  animation: ${viewMotion} 0.3s forwards linear alternate;
  opacity: 0;
  &:hover {
    padding: 0 1rem;
    background-color: #f4f4f4;
    transform: scale(1.05);
    @media only screen and (max-width: 992px) {
      padding: 0;
      background-color: #fff;
      transform: scale(1);
    }
  }
  dt {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    strong {
      display: inline-block;
      font-weight: 400;
      color: #3a3a3a;
      letter-spacing: -0.05rem;
    }
    span {
      display: inline-block;
      padding-right: 1.5rem;
      font-weight: 500;
      font-size: 1.2rem;
      color: #777;
    }
  }
  dd {
    flex: 1 1;
    padding: 2rem;
    font-weight: 400;
    text-align: right;
    &.plus {
      color: #0a7ec6;
      &:before {
        content: '+';
      }
    }
    &.minus {
      color: #000;
    }
  }
`;
