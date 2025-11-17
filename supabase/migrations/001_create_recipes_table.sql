-- Create recipes table
create table public.recipes (
  id uuid primary key default gen_random_uuid() not null,
  title text not null,
  ingredients text not null,
  instructions text not null,
  user_id uuid references auth.users(id) on delete cascade not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table public.recipes enable row level security;

-- Policy: Everyone can read recipes
create policy "Anyone can view recipes"
  on public.recipes
  for select
  using (true);

-- Policy: Only authenticated users can insert recipes
create policy "Authenticated users can insert recipes"
  on public.recipes
  for insert
  to authenticated
  with check (true);

