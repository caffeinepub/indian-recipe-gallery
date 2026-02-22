import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import { Recipe } from '../backend';

export function useGetRecipes() {
  const { actor, isFetching } = useActor();

  return useQuery<Recipe[]>({
    queryKey: ['recipes'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getRecipes();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetRecipeByName(name: string) {
  const { actor, isFetching } = useActor();

  return useQuery<Recipe | null>({
    queryKey: ['recipe', name],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getRecipeByName(name);
    },
    enabled: !!actor && !isFetching && !!name,
  });
}
