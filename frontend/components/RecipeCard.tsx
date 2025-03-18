import { useRouter } from 'next/navigation';

interface RecipeCardProps {
  id: string;
  name: string;
  imageUrl: string;
}

const RecipeCard = ({ id, name, imageUrl }: RecipeCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/recipes/${id}`);
  };

  return (
    <div
      className="max-w-xs rounded overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
      onClick={handleClick}
    >
      <img className="w-full h-56 object-cover" src={imageUrl} alt={name} />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-center">{name}</h3>
      </div>
    </div>
  );
};

export default RecipeCard;
