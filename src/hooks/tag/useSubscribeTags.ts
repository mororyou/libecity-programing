import { SupabaseRealtimePayload } from '@supabase/supabase-js'
import { useEffect } from 'react'
import { useQueryClient } from 'react-query'
import { Tag } from '../../types/master'
import { supabase } from '../../utils/supbase'

export const useSubscribeTags = () => {
  const queryClient = useQueryClient()

  useEffect(() => {
    const subsc = supabase
      .from('pg_event_tags')
      .on('INSERT', (payload: SupabaseRealtimePayload<Tag>) => {
        let previousTags = queryClient.getQueryData<Tag[]>(['tags'])
        if (!previousTags) {
          previousTags = []
        }
        queryClient.setQueryData(
          ['tags'],
          [
            ...previousTags,
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
      .on('UPDATE', (payload: SupabaseRealtimePayload<Tag>) => {
        let previousTags = queryClient.getQueryData<Tag[]>(['tags'])
        if (!previousTags) {
          previousTags = []
        }
        queryClient.setQueryData(
          ['tags'],
          previousTags.map((tag) =>
            tag.id === payload.new.id
              ? {
                  id: payload.new.id,
                  name: payload.new.name,
                  order: payload.new.order,
                  created_at: payload.new.created_at,
                  updated_at: payload.new.updated_at,
                  delflg: payload.new.delflg,
                }
              : tag
          )
        )
      })
      .on('DELETE', (payload: SupabaseRealtimePayload<Tag>) => {
        let previousTags = queryClient.getQueryData<Tag[]>(['tags'])
        if (!previousTags) {
          previousTags = []
        }
        queryClient.setQueryData(
          ['tags'],
          previousTags.filter((tag) => tag.id !== payload.old.id)
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
