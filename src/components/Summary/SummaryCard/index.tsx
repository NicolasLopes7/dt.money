interface SummaryCardProps {
  title: string;
  image: string;
  amount: number | string;
  highlighted?: boolean;
}

export const SummaryCard = ({
  title,
  image,
  amount,
  highlighted = false,
}: SummaryCardProps) => {
  return (
    <div className={highlighted ? 'highlighted' : ''}>
      <header>
        <p>{title}</p>
        <img src={image} alt="Summary item" />
      </header>
      <strong>R$ {amount}</strong>
    </div>
  );
};
