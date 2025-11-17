'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import type { Recipe } from '@/types/recipe'

export async function createRecipe(formData: FormData) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const data = {
    title: formData.get('title') as string,
    ingredients: formData.get('ingredients') as string,
    instructions: formData.get('instructions') as string,
    user_id: user.id,
  }

  const { error } = await supabase.from('recipes').insert(data)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/')
  redirect('/')
}

export async function getRecipes(): Promise<{ data: Recipe[] | null; error: string | null }> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('recipes')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return { error: error.message, data: null }
  }

  return { data: data as Recipe[], error: null }
}

