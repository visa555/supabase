import supabase from '~/lib/supabaseClient'

export function insert(data) {
  return supabase.from('schedule').insert(data)
}

export function gets() {
  return supabase.from('schedule').select()
}

export function get(id) {
  return supabase.from('schedule').select().eq('id', id)
}

export function update(data) {
  return supabase.from('schedule').upsert(data).select()
}

export function remove(id) {
  return supabase.from('schedule').delete().eq('id', id)
}

export function search(query) {
  const supabaseQuery = supabase.from('schedule').select()
  if (query.date_start) {
    supabaseQuery.gte('date_start', query.date_start)
  }
  return supabaseQuery
}
