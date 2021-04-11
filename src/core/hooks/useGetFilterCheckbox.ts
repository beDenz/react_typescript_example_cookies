import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type useGetFilterCheckboxType = {
  id: string
  value: string
  checked?: boolean
}

const useGetFilterCheckbox = (): [
  useGetFilterCheckboxType[],
  (id: string) => void
] => {
  const location = useLocation()

  // Здесь мы можем запросить актальный список

  const fetchResult = [
    {
      id: '1',
      value: 'Caribbean',
    },

    {
      id: '2',
      value: 'Greek',
    },
    {
      id: '3',
      value: 'French',
    },
    {
      id: '4',
      value: 'Chinese',
    },

    {
      id: '5',
      value: 'Indian',
    },
  ]

  const initFilterCheckbox = (
    data: useGetFilterCheckboxType[]
  ): useGetFilterCheckboxType[] => {
    if (new URLSearchParams(location.search).get('cuisine')) {
      const ids = new URLSearchParams(location.search)
        ?.get('cuisine')
        ?.split(',')

      return data.map((item: useGetFilterCheckboxType) =>
        ids?.includes(item.id)
          ? { ...item, checked: true }
          : { ...item, checked: false }
      )
    } else return data.map((item) => ({ ...item, checked: true }))
  }

  const [list, setList] = useState<useGetFilterCheckboxType[]>(
    initFilterCheckbox(fetchResult)
  )

  const onToogleCheckbox = (id: string) => {
    setList((prev: useGetFilterCheckboxType[]): useGetFilterCheckboxType[] =>
      prev.map((item: useGetFilterCheckboxType) =>
        item.id == id ? { ...item, checked: !item.checked } : item
      )
    )
  }

  useEffect(() => {
    if (!location.search) {
      setList((prev: useGetFilterCheckboxType[]): useGetFilterCheckboxType[] =>
        prev.map((item: useGetFilterCheckboxType) => ({
          ...item,
          checked: true,
        }))
      )
    }
  }, [location.search])

  return [list, onToogleCheckbox]
}

export { useGetFilterCheckbox }
