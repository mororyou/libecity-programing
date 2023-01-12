import { useMutation } from 'react-query'
import useStore from '../../store'
import { Category, EditedCategory } from '../../types/master'
import { supabase } from '../../utils/supbase'

export const useMutateCategory = () => {
  const reset = useStore((state) => state.resetEditedCategory)

  // Insert
  const createCategoryMutation = useMutation(
    async (
      category: Omit<Category, 'id' | 'updated_at' | 'created_at' | 'delflg'>
    ) => {
      const { data, error } = await supabase
        .from('pg_event_categoreis')
        .insert(category)

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
  const updateCategoryMutation = useMutation(
    async (category: EditedCategory) => {
      const { data, error } = await supabase
        .from('pg_event_categoreis')
        .update({
          name: category.name,
          order: category.order,
        })
        .eq('id', category.id)

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

  return { createCategoryMutation, updateCategoryMutation }
}
