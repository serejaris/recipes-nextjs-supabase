'use client'

import { useActionState } from 'react'
import { createRecipe } from '@/app/actions/recipes'
import Link from 'next/link'

const initialState = {
  message: '',
}

export function AddRecipeForm() {
  const [state, formAction, pending] = useActionState(createRecipe, initialState)

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <form action={formAction} className="space-y-6">
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

        {state?.message && (
          <div
            className="p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm"
            role="alert"
            aria-live="polite"
          >
            {state.message}
          </div>
        )}

        <div className="flex items-center justify-end space-x-4">
          <Link
            href="/"
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Отмена
          </Link>
          <button
            type="submit"
            disabled={pending}
            className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {pending ? 'Добавление...' : 'Добавить рецепт'}
          </button>
        </div>
      </form>
    </div>
  )
}

