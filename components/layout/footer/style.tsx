import styled from "styled-components";

export const FooterBox = styled.footer`
  display: block;
  height: 5rem;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0;
    padding: 0;
    font-weight: 300;
    font-size: 1.4rem;
    color: #1a1a1a;
    background-color: #fff;
    text-align: center;
    a {
      display: inline-block;
      opacity: 0.5;
      transition: 0.3s;
      svg {
        width: 80%;
      }
      &:hover {
        opacity: 1;
      }
    }
  }
`;
