'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import RecipeDetail from '../../../components/RecipeDetail';

const RecipeDetailPage = () => {
  const params = useParams();
  const { id } = params;
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchRecipe = async () => {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/recipes/${id}`,
        );
        const data = await res.json();
        setRecipe(data.meals[0]);
        setLoading(false);
      };

      fetchRecipe();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return <RecipeDetail recipe={recipe} />;
};

export default RecipeDetailPage;
