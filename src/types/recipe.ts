export interface Recipe {
  id: number
  name: string
  image: string
  rating: number
  cuisine: string
  cookTimeMinutes: number
  difficulty: string
  mealType: string[]
}

export interface RecipeResponse {
  recipes: Recipe[]
  total: number
  skip: number
  limit: number
}