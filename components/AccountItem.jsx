import styled from 'styled-components';

export default function AccountItem({ dateTime, accountName, price, description }) {
  const addComa = (number) => {
    const numberComa = number.toString().split('.');
    numberComa[0] = numberComa[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return numberComa.join('.');
  };

  const shortDate = (date) => {
    return date.split('-')[1] + '.' + date.split('-')[2];
  };
  return (
    <>
      <AccountCard>
        <dt>
          <span>{shortDate(dateTime.split(' ')[0])}</span>
          <strong>{Number(price) > 0 ? accountName : description}</strong>
        </dt>
        <dd className={Number(price) > 0 ? `plus` : `minus`}>{addComa(price)}</dd>
      </AccountCard>
    </>
  );
}

const AccountCard = styled.dl`
  display: flex;
  position: relative;
  width: 100%;
  border-top: 1px solid #f4f4f4;
  font-size: 1.6rem;
  transition: 0.2s;
  box-sizing: border-box;
  &:hover {
    padding: 0 4rem;
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
      font-weight: 500;
      color: #3a3a3a;
      letter-spacing: -0.05rem;
    }
    span {
      display: inline-block;
      padding-right: 1.5rem;
      font-weight: 500;
      font-size: 1.2rem;
      color: #777;
      letter-spacing: -0.05rem;
    }
  }
  dd {
    flex: 1 1;
    padding: 2rem;
    font-weight: 500;
    text-align: right;
    letter-spacing: -0.05rem;
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
