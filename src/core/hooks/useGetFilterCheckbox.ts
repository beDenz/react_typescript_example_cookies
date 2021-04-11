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

  const [list, setList] = useState<useGetFilterCheckboxType[]>([
    {
      id: '1',
      value: 'Caribbean',
      checked: true,
    },

    {
      id: '2',
      value: 'Greek',
      checked: true,
    },
    {
      id: '3',
      value: 'French',
      checked: true,
    },
    {
      id: '4',
      value: 'Chinese',
      checked: true,
    },

    {
      id: '5',
      value: 'Indian',
      checked: true,
    },
  ])

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
    } else if (new URLSearchParams(location.search).get('cuisine')) {
      const ids = new URLSearchParams(location.search)
        ?.get('cuisine')
        ?.split(',')

      setList((prev: useGetFilterCheckboxType[]): useGetFilterCheckboxType[] =>
        prev.map((item: useGetFilterCheckboxType) =>
          ids?.includes(item.id) ? { ...item, checked: true } : item
        )
      )
    }
  }, [location.search])

  return [list, onToogleCheckbox]
}

export { useGetFilterCheckbox }
