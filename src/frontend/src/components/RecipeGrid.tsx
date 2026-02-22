import { Recipe } from '../backend';
import RecipeCard from './RecipeCard';

interface RecipeGridProps {
  recipes: Recipe[];
}

export default function RecipeGrid({ recipes }: RecipeGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-in fade-in duration-500">
      {recipes.map((recipe, index) => (
        <RecipeCard
          key={recipe.name}
          recipe={recipe}
          index={index}
        />
      ))}
    </div>
  );
}
