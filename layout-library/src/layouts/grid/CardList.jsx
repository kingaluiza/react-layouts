import { useNavigate } from 'react-router-dom';
import cards from './cardData';

export default function CardList() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {cards.map((card, index) => (
        <div
          key={index}
          onClick={() => navigate(`/layout/${card.path}`)}
          className="cursor-pointer border rounded-xl p-4 shadow hover:shadow-md transition"
        >
          <h3 className="text-xl font-semibold">{card.title}</h3>
          <p className="text-sm text-gray-500">{card.subtitle}</p>
          <p className="mt-2">{card.description}</p>
        </div>
      ))}
    </div>
  );
}