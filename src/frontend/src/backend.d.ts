import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Recipe {
    difficultyLevel: string;
    cookingTime: bigint;
    name: string;
    cuisineType: string;
    description: string;
    videoUrl: string;
    ingredients: Array<string>;
}
export interface backendInterface {
    getRecipeByName(name: string): Promise<Recipe | null>;
    getRecipes(): Promise<Array<Recipe>>;
}
