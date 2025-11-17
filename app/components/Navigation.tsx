import { createClient } from '@/utils/supabase/server'
import { signOut } from '@/app/actions/auth'
import Link from 'next/link'

export async function Navigation() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Рецепты
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  href="/add-recipe"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Добавить рецепт
                </Link>
                <form action={signOut}>
                  <button
                    type="submit"
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Выйти
                  </button>
                </form>
                <span className="text-sm text-gray-500">{user.email}</span>
              </>
            ) : (
              <Link
                href="/login"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Войти
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

