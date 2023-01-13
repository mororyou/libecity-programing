import { useQuery } from 'react-query'
import { Tag } from '../../types/master'
import { supabase } from '../../utils/supbase'

export default function useQueryTags() {
  const getTags = async () => {
    const { data, error } = await supabase
      .from('pg_event_tags')
      .select('*')
      .order('name', { ascending: true })

    if (error) throw Error(error.message)

    return data
  }

  return useQuery<Tag[], Error>({
    queryKey: ['tags'],
    queryFn: getTags,
    staleTime: Infinity,
  })
}
