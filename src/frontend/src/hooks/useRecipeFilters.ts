import { useState, useMemo } from 'react';
import { Recipe } from '../backend';

export function useRecipeFilters(recipes: Recipe[]) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedTimeRange, setSelectedTimeRange] = useState('all');

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      // Search filter
      if (searchQuery && !recipe.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Cuisine filter
      if (selectedCuisine !== 'all' && recipe.cuisineType !== selectedCuisine) {
        return false;
      }

      // Difficulty filter
      if (selectedDifficulty !== 'all' && recipe.difficultyLevel !== selectedDifficulty) {
        return false;
      }

      // Time range filter
      if (selectedTimeRange !== 'all') {
        const cookingTime = Number(recipe.cookingTime);
        switch (selectedTimeRange) {
          case '0-30':
            if (cookingTime > 30) return false;
            break;
          case '30-60':
            if (cookingTime <= 30 || cookingTime > 60) return false;
            break;
          case '60-90':
            if (cookingTime <= 60 || cookingTime > 90) return false;
            break;
          case '90+':
            if (cookingTime <= 90) return false;
            break;
        }
      }

      return true;
    });
  }, [recipes, searchQuery, selectedCuisine, selectedDifficulty, selectedTimeRange]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCuisine('all');
    setSelectedDifficulty('all');
    setSelectedTimeRange('all');
  };

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedCuisine !== 'all' ||
    selectedDifficulty !== 'all' ||
    selectedTimeRange !== 'all';

  return {
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
  };
}
