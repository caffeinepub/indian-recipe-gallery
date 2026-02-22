import { useState } from 'react';
import RecipeGrid from '../components/RecipeGrid';
import RecipeFilters from '../components/RecipeFilters';
import { useGetRecipes } from '../hooks/useQueries';
import { useRecipeFilters } from '../hooks/useRecipeFilters';
import { Loader2 } from 'lucide-react';

export default function RecipeGallery() {
  const { data: recipes, isLoading, error } = useGetRecipes();
  const {
    filteredRecipes,
    searchQuery,
    setSearchQuery,
    selectedCuisine,
    setSelectedCuisine,
    selectedDifficulty,
    setSelectedDifficulty,
    selectedTimeRange,
    setSelectedTimeRange,
    clearFilters,
    hasActiveFilters,
  } = useRecipeFilters(recipes || []);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-12 h-12 animate-spin text-saffron" />
          <p className="text-muted-foreground">Loading delicious recipes...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
          <p className="text-destructive">Failed to load recipes. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <RecipeFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCuisine={selectedCuisine}
        onCuisineChange={setSelectedCuisine}
        selectedDifficulty={selectedDifficulty}
        onDifficultyChange={setSelectedDifficulty}
        selectedTimeRange={selectedTimeRange}
        onTimeRangeChange={setSelectedTimeRange}
        onClearFilters={clearFilters}
        hasActiveFilters={hasActiveFilters}
        totalRecipes={recipes?.length || 0}
        filteredCount={filteredRecipes.length}
      />

      {filteredRecipes.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-muted-foreground">
            No recipes found matching your criteria.
          </p>
          <button
            onClick={clearFilters}
            className="mt-4 text-saffron hover:text-saffron/80 transition-colors font-medium"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <RecipeGrid recipes={filteredRecipes} />
      )}
    </div>
  );
}
