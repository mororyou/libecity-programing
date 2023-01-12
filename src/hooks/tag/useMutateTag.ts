import { useMutation } from 'react-query'
import useStore from '../../store'
import { EditedTag, Tag } from '../../types/master'
import { supabase } from '../../utils/supbase'

export const useMutateTag = () => {
  const reset = useStore((state) => state.resetEditedTag)

  // Insert
  const createTagMutation = useMutation(
    async (tag: Omit<Tag, 'id' | 'updated_at' | 'created_at' | 'delflg'>) => {
      const { data, error } = await supabase.from('pg_event_tags').insert(tag)

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
  const updateTagMutation = useMutation(
    async (tag: EditedTag) => {
      const { data, error } = await supabase
        .from('pg_event_tags')
        .update({
          name: tag.name,
          order: tag.order,
        })
        .eq('id', tag.id)

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

  return { createTagMutation, updateTagMutation }
}
