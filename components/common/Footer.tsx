import styled from 'styled-components';

const Footer = () => {
  return (
    <>
      <FooterBox>
        <p>KHS. ALL RIGHT RESERVED.</p>
      </FooterBox>
    </>
  );
};
export default Footer;

const FooterBox = styled.footer`
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
  }
`;
