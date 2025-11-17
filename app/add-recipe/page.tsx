import { createClient } from '@/utils/supabase/server'
import { Navigation } from '@/app/components/Navigation'
import { redirect } from 'next/navigation'
import { AddRecipeForm } from '@/app/components/AddRecipeForm'

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

        <AddRecipeForm />
      </main>
    </div>
  )
}

