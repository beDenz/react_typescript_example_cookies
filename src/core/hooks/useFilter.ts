import { ICardItem } from 'src/components/blocks'

import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// eslint-disable-next-line
const useFilter = (init: any) => {
  const location = useLocation()
  const [data, setData] = useState(init)

  useEffect(() => {
    if (!data && init) {
      setData(init)
    }
  }, [init])

  useEffect(() => {
    if (!init) return

    const cuisine = new URLSearchParams(location.search)
      ?.get('cuisine')
      ?.split(',')

    const calories = new URLSearchParams(location.search)
      ?.get('cal')
      ?.split(',')
      .map((item) => parseInt(item))

    if (cuisine && calories) {
      const [min, max] = calories

      setData(() =>
        init.filter(
          (item: ICardItem) =>
            cuisine.includes(item.cuisine.id.toString()) &&
            item.caloricity >= min &&
            item.caloricity <= max
        )
      )
    }

    if (cuisine && !calories) {
      setData(() =>
        init.filter((item: ICardItem) =>
          cuisine.includes(item.cuisine.id.toString())
        )
      )
    }

    if (calories && !cuisine) {
      const [min, max] = calories

      setData(() =>
        init.filter(
          (item: ICardItem) => item.caloricity >= min && item.caloricity <= max
        )
      )
    }
  }, [location.search, init])

  return [data]
}

export { useFilter }
