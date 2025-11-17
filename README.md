# Сайт рецептов на Next.js с Supabase

MVP сайта рецептов, где пользователи могут просматривать рецепты без авторизации, а авторизованные пользователи могут добавлять свои рецепты.

## Установка

1. Установите зависимости:
```bash
npm install
```

2. Настройте переменные окружения:
Создайте файл `.env.local` на основе `.env.local.example` и заполните:
- `NEXT_PUBLIC_SUPABASE_URL` - URL вашего Supabase проекта
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Anon key из настроек Supabase

3. Создайте таблицу в Supabase:
Выполните SQL из файла `supabase/migrations/001_create_recipes_table.sql` в SQL Editor вашего Supabase проекта.

## Запуск

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Структура проекта

- `app/` - Next.js App Router страницы и компоненты
- `utils/supabase/` - Утилиты для работы с Supabase
- `app/actions/` - Server Actions для работы с данными
- `supabase/migrations/` - SQL миграции для базы данных

