import { SupabaseRealtimePayload } from '@supabase/supabase-js'
import { useQueryClient } from 'react-query'
import { useEffect } from 'react'
import { Category } from '../../types/master'
import { supabase } from '../../utils/supbase'

export const useSubscribeCategories = () => {
  const queryClient = useQueryClient()

  useEffect(() => {
    const subsc = supabase
      .from('pg_event_categoreis')
      .on('INSERT', (payload: SupabaseRealtimePayload<Category>) => {
        let previousCategories = queryClient.getQueryData<Category[]>([
          'categories',
        ])
        if (!previousCategories) {
          previousCategories = []
        }
        queryClient.setQueryData(
          ['categories'],
          [
            ...previousCategories,
            {
              id: payload.new.id,
              name: payload.new.name,
              order: payload.new.order,
              created_at: payload.new.created_at,
              updated_at: payload.new.updated_at,
              delflg: payload.new.delflg,
            },
          ]
        )
      })
      .on('UPDATE', (payload: SupabaseRealtimePayload<Category>) => {
        let previousCategories = queryClient.getQueryData<Category[]>([
          'categories',
        ])
        if (!previousCategories) {
          previousCategories = []
        }
        queryClient.setQueryData(
          ['categories'],
          previousCategories.map((category) =>
            category.id === payload.new.id
              ? {
                  id: payload.new.id,
                  name: payload.new.name,
                  order: payload.new.order,
                  created_at: payload.new.created_at,
                  updated_at: payload.new.updated_at,
                  delflg: payload.new.delflg,
                }
              : category
          )
        )
      })
      .on('DELETE', (payload: SupabaseRealtimePayload<Category>) => {
        let previousCategories = queryClient.getQueryData<Category[]>([
          'categories',
        ])
        if (!previousCategories) {
          previousCategories = []
        }
        queryClient.setQueryData(
          ['categories'],
          previousCategories.filter(
            (category) => category.id !== payload.old.id
          )
        )
      })
      .subscribe()

    const removeSubscription = async () => {
      await supabase.removeSubscription(subsc)
    }

    return () => {
      removeSubscription()
    }
  }, [queryClient])
}
