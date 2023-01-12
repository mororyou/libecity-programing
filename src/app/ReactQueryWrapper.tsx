'use client'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { reactQueryOptions } from '../constant/reactQuery'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      ...reactQueryOptions,
    },
  },
})

const ReactQueryWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default ReactQueryWrapper
