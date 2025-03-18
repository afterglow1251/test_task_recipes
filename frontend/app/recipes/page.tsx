'use client';

import { useEffect, useState } from 'react';
import RecipeList from '@/components/RecipeList';
import { useSearchParams } from 'next/navigation';
import { Recipe } from '@/_types';

interface ApiResponse {
  meals: Recipe[];
}

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  const country = searchParams.get('country');
  const ingredient = searchParams.get('ingredient');
  const category = searchParams.get('category');

  useEffect(() => {
    const fetchRecipes = async () => {
      let url = `${process.env.NEXT_PUBLIC_API_URL}/recipes`;

      if (country) {
        url += `?filter=country=${country}`;
      } else if (ingredient) {
        url += `?filter=ingredient=${ingredient}`;
      } else if (category) {
        url += `?filter=category=${category}`;
      }

      const res = await fetch(url);
      const data: ApiResponse = await res.json();
      setRecipes(data.meals || []);
      setLoading(false);
    };

    fetchRecipes();
  }, [country, ingredient, category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default RecipesPage;
