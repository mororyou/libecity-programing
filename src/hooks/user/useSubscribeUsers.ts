import { SupabaseRealtimePayload } from '@supabase/supabase-js'
import { useEffect } from 'react'
import { useQueryClient } from 'react-query'
import { User } from '../../types/master'
import { supabase } from '../../utils/supbase'

export const useSUbscribeUsers = () => {
  const queryClient = useQueryClient()

  useEffect(() => {
    const subsc = supabase
      .from('pg_users')
      .on('INSERT', (payload: SupabaseRealtimePayload<User>) => {
        let previousUsers = queryClient.getQueryData<User[]>(['users'])
        if (!previousUsers) {
          previousUsers = []
        }
        queryClient.setQueryData(
          ['users'],
          [
            ...previousUsers,
            {
              id: payload.new.id,
              name: payload.new.name,
              avatar: payload.new.avatar,
              url: payload.new.url,
              ip: payload.new.ip,
              created_at: payload.new.created_at,
              updated_at: payload.new.updated_at,
              delflg: payload.new.delflg,
            },
          ]
        )
      })
      .on('UPDATE', (payload: SupabaseRealtimePayload<User>) => {
        let previousUsers = queryClient.getQueryData<User[]>(['users'])
        if (!previousUsers) {
          previousUsers = []
        }
        queryClient.setQueryData(
          ['users'],
          previousUsers.map((user) =>
            user.id === payload.new.id
              ? {
                  id: payload.new.id,
                  name: payload.new.name,
                  avatar: payload.new.avatar,
                  url: payload.new.url,
                  ip: payload.new.ip,
                  created_at: payload.new.created_at,
                  updated_at: payload.new.updated_at,
                  delflg: payload.new.delflg,
                }
              : user
          )
        )
      })
      .on('DELETE', (payload: SupabaseRealtimePayload<User>) => {
        let previousUsers = queryClient.getQueryData<User[]>(['users'])
        if (!previousUsers) {
          previousUsers = []
        }
        queryClient.setQueryData(
          ['users'],
          previousUsers.filter((user) => user.id !== payload.old.id)
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
