import { createClient } from '@/utils/supabase/server'
import { createRecipe } from '@/app/actions/recipes'
import { Navigation } from '@/app/components/Navigation'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function AddRecipePage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Добавить рецепт</h1>
          <p className="text-gray-600">Поделитесь своим любимым рецептом</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <form action={createRecipe} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Название рецепта
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Например: Борщ"
              />
            </div>

            <div>
              <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-2">
                Ингредиенты
              </label>
              <textarea
                id="ingredients"
                name="ingredients"
                required
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Перечислите ингредиенты, каждый с новой строки"
              />
            </div>

            <div>
              <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-2">
                Инструкции по приготовлению
              </label>
              <textarea
                id="instructions"
                name="instructions"
                required
                rows={8}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Опишите шаги приготовления"
              />
            </div>

            <div className="flex items-center justify-end space-x-4">
              <Link
                href="/"
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Отмена
              </Link>
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Добавить рецепт
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

