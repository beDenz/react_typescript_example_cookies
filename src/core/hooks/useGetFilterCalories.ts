import { useState, useEffect } from 'react'

import { useLocation } from 'react-router-dom'

type useGetFilterCaloriesProps = {
  min: number
  max: number
}

const useGetFilterCalories = ({
  min,
  max,
}: useGetFilterCaloriesProps): [number[], (event: any, value: any) => void] => {
  const location = useLocation()
  const [sliderValue, setSliderValue] = useState([min, max])

  const onChangeSlider = (event: any, value: any): any => {
    setSliderValue(value)
  }

  useEffect(() => {
    if (!location.search) {
      setSliderValue([min, max])
    } else if (new URLSearchParams(location.search).get('cal')) {
      const values = new URLSearchParams(location.search)
        ?.get('cal')
        ?.split(',')

      if (values) {
        setSliderValue(values?.map(Number))
      }
    }
  }, [location.search])
  return [sliderValue, onChangeSlider]
}

export { useGetFilterCalories }
