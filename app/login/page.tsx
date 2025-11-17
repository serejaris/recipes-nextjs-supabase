'use client'

import { useActionState } from 'react'
import { signIn, signUp } from '@/app/actions/auth'
import Link from 'next/link'

const signInInitialState = {
  message: '',
}

const signUpInitialState = {
  message: '',
}

export default function LoginPage() {
  const [signInState, signInFormAction, signInPending] = useActionState(signIn, signInInitialState)
  const [signUpState, signUpFormAction, signUpPending] = useActionState(signUp, signUpInitialState)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Вход / Регистрация
          </h2>
        </div>
        <div className="space-y-4">
          <form action={signInFormAction} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Пароль
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Пароль"
              />
            </div>
            {signInState?.message && (
              <div
                className="p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm"
                role="alert"
                aria-live="polite"
              >
                {signInState.message}
              </div>
            )}
            <div>
              <button
                type="submit"
                disabled={signInPending}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {signInPending ? 'Вход...' : 'Войти'}
              </button>
            </div>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">или</span>
            </div>
          </div>

          <form action={signUpFormAction} className="space-y-4">
            <div>
              <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="signup-email"
                name="email"
                type="email"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">
                Пароль
              </label>
              <input
                id="signup-password"
                name="password"
                type="password"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Пароль"
              />
            </div>
            {signUpState?.message && (
              <div
                className="p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm"
                role="alert"
                aria-live="polite"
              >
                {signUpState.message}
              </div>
            )}
            <div>
              <button
                type="submit"
                disabled={signUpPending}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {signUpPending ? 'Регистрация...' : 'Зарегистрироваться'}
              </button>
            </div>
          </form>

          <div className="text-center">
            <Link
              href="/"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Вернуться на главную
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

