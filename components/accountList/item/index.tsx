import { AccountCard } from './style';

interface accountItems {
  dateTime: string;
  accountName: string;
  price: number;
  description: string;
  itemIndex: number;
}

const AccountItem = ({ dateTime, accountName, price, description, itemIndex }: accountItems) => {
  const addComa = (number: number) => {
    const numberComa = number.toString().split('.');
    numberComa[0] = numberComa[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return numberComa.join('.');
  };

  const shortDate = (date: string) => {
    return date.split('-')[1] + '.' + date.split('-')[2];
  };

  return (
    <>
      <AccountCard style={{ animationDelay: itemIndex * 0.1 + `s` }}>
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
