import { useEffect } from 'react'
import { useQueryClient } from 'react-query'

export const useInvalidatePostCache = (): void => {
  const queryClient = useQueryClient()
  useEffect(() => {
    return () => {
      queryClient.invalidateQueries('post')
    }
  }, [])
}
