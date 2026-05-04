import type { RecipeResponse } from '../types/recipe'

export const getRecipes = async (): Promise<RecipeResponse> => {
  const response = await fetch('https://dummyjson.com/recipes')

  if (!response.ok) {
    throw new Error('Failed to fetch recipes')
  }

  return response.json()
}