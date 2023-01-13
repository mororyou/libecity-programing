import { useQuery } from 'react-query'
import { User } from '../../types/master'
import { supabase } from '../../utils/supbase'

export default function useQueryUsers() {
  const getUsers = async () => {
    const { data, error } = await supabase
      .from('pg_users')
      .select('*')
      .order('name', { ascending: true })

    if (error) {
      throw Error(error.message)
    }
    return data
  }

  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: getUsers,
    staleTime: Infinity,
  })
}
