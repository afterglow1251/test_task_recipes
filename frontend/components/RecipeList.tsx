import { Recipe } from '@/_types';
import RecipeCard from './RecipeCard';
import { useSearchParams } from 'next/navigation';

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList = ({ recipes }: RecipeListProps) => {
  const searchParams = useSearchParams();

  const country = searchParams.get('country');
  const ingredient = searchParams.get('ingredient');
  const category = searchParams.get('category');

  let filterType = '';
  let filterValue = '';

  if (country) {
    filterType = 'country';
    filterValue = country;
  } else if (ingredient) {
    filterType = 'ingredient';
    filterValue = ingredient;
  } else if (category) {
    filterType = 'category';
    filterValue = category;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">
        {filterType
          ? `Recipes filtered by ${filterType}: ${filterValue}`
          : 'All Recipes'}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Array.isArray(recipes) && recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              id={recipe.idMeal}
              name={recipe.strMeal}
              imageUrl={recipe.strMealThumb}
            />
          ))
        ) : (
          <div>No recipes found.</div>
        )}
      </div>
    </div>
  );
};

export default RecipeList;
