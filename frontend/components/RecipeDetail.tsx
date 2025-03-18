'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Recipe } from '@/_types';

interface RecipeDetailProps {
  recipe: Recipe;
}

const RecipeDetail = ({ recipe }: RecipeDetailProps) => {
  const { strMeal, strArea, strMealThumb, strInstructions, strCategory } =
    recipe;

  const [categoryRecipes, setCategoryRecipes] = useState([]);
  const [ingredients, setIngredients] = useState<string[]>([]);

  useEffect(() => {
    const ingredientList = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      if (ingredient && ingredient.trim() !== '') {
        ingredientList.push(ingredient);
      }
    }
    setIngredients(ingredientList);
  }, [recipe]);

  useEffect(() => {
    if (strCategory) {
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/recipes?filter=category=${strCategory}`,
      )
        .then((res) => res.json())
        .then((data) => {
          setCategoryRecipes(data.meals ?? []);
        });
    }
  }, [strCategory]);

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row">
      <div className="md:w-3/4">
        <div className="flex flex-col md:flex-row">
          <img
            src={strMealThumb}
            alt={strMeal}
            className="w-full md:w-1/3 h-48 object-cover rounded-lg"
          />
          <div className="md:ml-6 flex flex-col justify-between">
            <h2 className="text-4xl font-semibold">{strMeal}</h2>
            <Link href={`/recipes?country=${strArea}`}>
              <span className="text-lg text-gray-600 cursor-pointer hover:text-blue-500">
                {strArea}
              </span>
            </Link>
            <h3 className="text-2xl mt-4">Instructions</h3>
            <p className="text-lg">{strInstructions}</p>

            <h3 className="text-2xl mt-4">Ingredients</h3>
            <ul className="list-disc pl-5">
              {ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="text-lg text-gray-600 hover:text-blue-700"
                >
                  <Link href={`/recipes?ingredient=${ingredient}`}>
                    {ingredient}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="md:w-1/4 md:ml-8 border-l pl-4">
        <h3 className="text-2xl font-semibold mb-4">More from {strCategory}</h3>
        <ul>
          {categoryRecipes.map((item: any) => (
            <li key={item.idMeal} className="mb-2">
              <Link href={`/recipes/${item.idMeal}`}>
                <span className="text-blue-500 hover:text-blue-700 cursor-pointer">
                  {item.strMeal}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetail;
