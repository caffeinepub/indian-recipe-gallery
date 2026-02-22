import { Search, X, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

interface RecipeFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCuisine: string;
  onCuisineChange: (cuisine: string) => void;
  selectedDifficulty: string;
  onDifficultyChange: (difficulty: string) => void;
  selectedTimeRange: string;
  onTimeRangeChange: (timeRange: string) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
  totalRecipes: number;
  filteredCount: number;
}

const categoryIcons: Record<string, string> = {
  'North Indian': '/assets/generated/icon-curry.dim_128x128.png',
  'South Indian': '/assets/generated/icon-bread.dim_128x128.png',
  'Bengali': '/assets/generated/icon-dessert.dim_128x128.png',
  'Hyderabadi': '/assets/generated/icon-rice.dim_128x128.png',
  'Punjabi': '/assets/generated/icon-appetizer.dim_128x128.png',
};

export default function RecipeFilters({
  searchQuery,
  onSearchChange,
  selectedCuisine,
  onCuisineChange,
  selectedDifficulty,
  onDifficultyChange,
  selectedTimeRange,
  onTimeRangeChange,
  onClearFilters,
  hasActiveFilters,
  totalRecipes,
  filteredCount,
}: RecipeFiltersProps) {
  return (
    <div className="mb-8 space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search recipes by name..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 pr-12 h-14 text-lg rounded-full border-2 border-border/50 focus:border-saffron/50 bg-card shadow-lg"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 justify-center">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Filter className="w-4 h-4" />
          <span className="font-medium">Filter by:</span>
        </div>

        <Select value={selectedCuisine} onValueChange={onCuisineChange}>
          <SelectTrigger className="w-[180px] bg-card border-border/50 hover:border-saffron/50 transition-colors">
            <SelectValue placeholder="Cuisine Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Cuisines</SelectItem>
            <SelectItem value="North Indian">
              <div className="flex items-center gap-2">
                {categoryIcons['North Indian'] && (
                  <img src={categoryIcons['North Indian']} alt="" className="w-4 h-4" />
                )}
                North Indian
              </div>
            </SelectItem>
            <SelectItem value="South Indian">
              <div className="flex items-center gap-2">
                {categoryIcons['South Indian'] && (
                  <img src={categoryIcons['South Indian']} alt="" className="w-4 h-4" />
                )}
                South Indian
              </div>
            </SelectItem>
            <SelectItem value="Punjabi">
              <div className="flex items-center gap-2">
                {categoryIcons['Punjabi'] && (
                  <img src={categoryIcons['Punjabi']} alt="" className="w-4 h-4" />
                )}
                Punjabi
              </div>
            </SelectItem>
            <SelectItem value="Bengali">
              <div className="flex items-center gap-2">
                {categoryIcons['Bengali'] && (
                  <img src={categoryIcons['Bengali']} alt="" className="w-4 h-4" />
                )}
                Bengali
              </div>
            </SelectItem>
            <SelectItem value="Hyderabadi">
              <div className="flex items-center gap-2">
                {categoryIcons['Hyderabadi'] && (
                  <img src={categoryIcons['Hyderabadi']} alt="" className="w-4 h-4" />
                )}
                Hyderabadi
              </div>
            </SelectItem>
            <SelectItem value="Maharashtrian">Maharashtrian</SelectItem>
            <SelectItem value="Pan-Indian">Pan-Indian</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedDifficulty} onValueChange={onDifficultyChange}>
          <SelectTrigger className="w-[160px] bg-card border-border/50 hover:border-saffron/50 transition-colors">
            <SelectValue placeholder="Difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="Easy">Easy</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Hard">Hard</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedTimeRange} onValueChange={onTimeRangeChange}>
          <SelectTrigger className="w-[180px] bg-card border-border/50 hover:border-saffron/50 transition-colors">
            <SelectValue placeholder="Cooking Time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any Duration</SelectItem>
            <SelectItem value="0-30">Under 30 min</SelectItem>
            <SelectItem value="30-60">30-60 min</SelectItem>
            <SelectItem value="60-90">60-90 min</SelectItem>
            <SelectItem value="90+">90+ min</SelectItem>
          </SelectContent>
        </Select>

        {hasActiveFilters && (
          <Button
            onClick={onClearFilters}
            variant="ghost"
            size="sm"
            className="text-saffron hover:text-saffron/80 hover:bg-saffron/10"
          >
            <X className="w-4 h-4 mr-1" />
            Clear Filters
          </Button>
        )}
      </div>

      {/* Results Count */}
      <div className="text-center">
        <Badge variant="outline" className="text-sm px-4 py-2 bg-card border-border/50">
          Showing {filteredCount} of {totalRecipes} recipes
        </Badge>
      </div>
    </div>
  );
}
