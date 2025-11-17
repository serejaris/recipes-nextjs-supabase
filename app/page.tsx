import { getRecipes } from '@/app/actions/recipes'
import { Navigation } from '@/app/components/Navigation'
import Link from 'next/link'
import type { Recipe } from '@/types/recipe'

export default async function Home() {
  const { data: recipes, error } = await getRecipes()

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Все рецепты</h1>
          <p className="text-gray-600">Просматривайте рецепты от наших пользователей</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            Ошибка загрузки рецептов: {error}
          </div>
        )}

        {!error && (!recipes || recipes.length === 0) && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">Пока нет рецептов</p>
            <Link
              href="/add-recipe"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700"
            >
              Добавить первый рецепт
            </Link>
          </div>
        )}

        {!error && recipes && recipes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe: Recipe) => (
              <div
                key={recipe.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{recipe.title}</h2>
                  
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Ингредиенты:</h3>
                    <p className="text-gray-600 whitespace-pre-line">{recipe.ingredients}</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Инструкции:</h3>
                    <p className="text-gray-600 whitespace-pre-line">{recipe.instructions}</p>
                  </div>

                  <div className="text-xs text-gray-400 mt-4">
                    {new Date(recipe.created_at).toLocaleDateString('ru-RU', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
