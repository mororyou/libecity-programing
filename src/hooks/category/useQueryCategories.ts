import { useQuery } from 'react-query'
import { Category } from '../../types/master'
import { supabase } from '../../utils/supbase'

export default function useQueryCategories() {
  const getCategories = async () => {
    const { data, error } = await supabase
      .from('pg_event_categoreis')
      .select('*')
      .order('name', { ascending: true })

    if (error) {
      throw Error(error.message)
    }
    return data
  }

  return useQuery<Category[], Error>({
    queryKey: ['categories'],
    queryFn: getCategories,
    staleTime: Infinity,
  })
}
