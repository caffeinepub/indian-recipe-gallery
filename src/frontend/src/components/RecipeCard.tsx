import { Recipe } from '../backend';
import { useNavigate } from '@tanstack/react-router';
import { Clock, ChefHat } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface RecipeCardProps {
  recipe: Recipe;
  index: number;
}

const categoryIcons: Record<string, string> = {
  'curry': '/assets/generated/icon-curry.dim_128x128.png',
  'bread': '/assets/generated/icon-bread.dim_128x128.png',
  'dessert': '/assets/generated/icon-dessert.dim_128x128.png',
  'rice': '/assets/generated/icon-rice.dim_128x128.png',
  'appetizer': '/assets/generated/icon-appetizer.dim_128x128.png',
};

function getCategoryIcon(recipe: Recipe): string | null {
  const name = recipe.name.toLowerCase();
  if (name.includes('chicken') || name.includes('paneer') || name.includes('daal') || name.includes('chole') || name.includes('bhaji')) {
    return categoryIcons.curry;
  }
  if (name.includes('dosa') || name.includes('paratha') || name.includes('bhature') || name.includes('idli')) {
    return categoryIcons.bread;
  }
  if (name.includes('rasgulla') || name.includes('gulab')) {
    return categoryIcons.dessert;
  }
  if (name.includes('biryani')) {
    return categoryIcons.rice;
  }
  if (name.includes('samosa') || name.includes('tikka') || name.includes('raita')) {
    return categoryIcons.appetizer;
  }
  return null;
}

export default function RecipeCard({ recipe, index }: RecipeCardProps) {
  const navigate = useNavigate();
  const categoryIcon = getCategoryIcon(recipe);

  const handleClick = () => {
    navigate({ to: '/recipe/$recipeName', params: { recipeName: recipe.name } });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-emerald/20 text-emerald border-emerald/30';
      case 'medium':
        return 'bg-turmeric/20 text-turmeric-dark border-turmeric/30';
      case 'hard':
        return 'bg-terracotta/20 text-terracotta-dark border-terracotta/30';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-card border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4"
      style={{
        animationDelay: `${index * 50}ms`,
        animationFillMode: 'backwards',
      }}
    >
      {/* Video Placeholder */}
      <div className="relative aspect-video bg-gradient-to-br from-saffron/20 via-turmeric/20 to-terracotta/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6">
            <ChefHat className="w-12 h-12 mx-auto text-saffron/60 group-hover:text-saffron transition-colors" />
            <p className="text-xs text-muted-foreground mt-2">Video Preview</p>
          </div>
        </div>
        
        {/* Category Icon Overlay */}
        {categoryIcon && (
          <div className="absolute top-3 right-3 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
            <img src={categoryIcon} alt="Category" className="w-full h-full object-contain" />
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground group-hover:text-saffron transition-colors line-clamp-1 font-display">
            {recipe.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {recipe.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-saffron" />
              <span>{recipe.cookingTime}m</span>
            </div>
          </div>
          <Badge variant="outline" className={`text-xs ${getDifficultyColor(recipe.difficultyLevel)}`}>
            {recipe.difficultyLevel}
          </Badge>
        </div>

        <div className="pt-2 border-t border-border/50">
          <Badge variant="outline" className="text-xs bg-saffron/10 text-saffron border-saffron/30">
            {recipe.cuisineType}
          </Badge>
        </div>
      </div>
    </div>
  );
}
