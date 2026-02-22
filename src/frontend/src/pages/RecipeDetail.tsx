import { useParams, useNavigate } from '@tanstack/react-router';
import { useGetRecipeByName } from '../hooks/useQueries';
import { ArrowLeft, Clock, ChefHat, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function RecipeDetail() {
  const { recipeName } = useParams({ from: '/recipe/$recipeName' });
  const navigate = useNavigate();
  const { data: recipe, isLoading, error } = useGetRecipeByName(recipeName);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-12 h-12 animate-spin text-saffron" />
          <p className="text-muted-foreground">Loading recipe details...</p>
        </div>
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Button
          onClick={() => navigate({ to: '/' })}
          variant="ghost"
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Gallery
        </Button>
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
          <p className="text-destructive">Recipe not found.</p>
        </div>
      </div>
    );
  }

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
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
      <Button
        onClick={() => navigate({ to: '/' })}
        variant="ghost"
        className="mb-6 hover:bg-saffron/10 hover:text-saffron transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Gallery
      </Button>

      <div className="space-y-8">
        {/* Video Section */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-card border border-border/50">
          <div className="aspect-video bg-gradient-to-br from-saffron/10 via-turmeric/10 to-terracotta/10 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-saffron/20 flex items-center justify-center">
                <ChefHat className="w-10 h-10 text-saffron" />
              </div>
              <p className="text-muted-foreground">Video player placeholder</p>
              <p className="text-sm text-muted-foreground/70 mt-2">{recipe.videoUrl}</p>
            </div>
          </div>
        </div>

        {/* Recipe Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground font-display mb-2">
                {recipe.name}
              </h1>
              <p className="text-lg text-muted-foreground">{recipe.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-sm px-3 py-1 bg-saffron/10 text-saffron border-saffron/30">
                {recipe.cuisineType}
              </Badge>
              <Badge variant="outline" className={`text-sm px-3 py-1 ${getDifficultyColor(recipe.difficultyLevel)}`}>
                {recipe.difficultyLevel}
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-saffron" />
              <span className="font-medium">{recipe.cookingTime} minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-saffron" />
              <span className="font-medium">{recipe.ingredients.length} ingredients</span>
            </div>
          </div>
        </div>

        {/* Ingredients & Instructions Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Ingredients */}
          <div className="bg-card border border-border/50 rounded-xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground mb-6 font-display flex items-center gap-2">
              <span className="w-1 h-8 bg-saffron rounded-full" />
              Ingredients
            </h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-foreground/90 group"
                >
                  <span className="w-2 h-2 rounded-full bg-saffron/60 mt-2 group-hover:bg-saffron transition-colors flex-shrink-0" />
                  <span className="leading-relaxed">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions Placeholder */}
          <div className="bg-card border border-border/50 rounded-xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground mb-6 font-display flex items-center gap-2">
              <span className="w-1 h-8 bg-terracotta rounded-full" />
              Instructions
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Watch the video above for detailed step-by-step cooking instructions.
              </p>
              <p className="text-sm leading-relaxed">
                Our video guides will walk you through each stage of preparation, from ingredient prep to the final plating, ensuring you create an authentic {recipe.cuisineType} dish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
