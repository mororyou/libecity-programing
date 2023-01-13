import { useMutation } from 'react-query'
import useStore from '../../store'
import { EditedUser, User } from '../../types/master'
import { supabase } from '../../utils/supbase'

export const useMutateUser = () => {
  const reset = useStore((state) => state.resetEditedUser)

  // Insert
  const createUserMutation = useMutation(
    async (user: Omit<User, 'id' | 'updated_at' | 'created_at' | 'delflg'>) => {
      const { data, error } = await supabase.from('pb_event_users').insert(user)

      if (error) throw new Error(error.message)

      return data
    },
    {
      onSuccess: () => {
        reset()
      },
      onError: (err: any) => {
        alert(err.message)
        reset()
      },
    }
  )

  // Update
  const updateUserMutation = useMutation(
    async (user: EditedUser) => {
      const { data, error } = await supabase
        .from('pg_users')
        .update({
          name: user.name,
          url: user.url,
          avatar: user.avatar,
        })
        .eq('id', user.id)

      if (error) throw new Error(error.message)

      return data
    },
    {
      onSuccess: () => {
        reset()
      },
      onError: (err: any) => {
        alert(err.message)
        reset()
      },
    }
  )

  return { createUserMutation, updateUserMutation }
}
