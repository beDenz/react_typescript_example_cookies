import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useHeaderHeight = (initHeight: number): number => {
  const [height, setHeight] = useState<number>(initHeight)
  const { pathname } = useLocation()

  // const onScroll = () => {
  //   if (window.pageYOffset > 300 && window.pageYOffset < 600) {
  //     setHeight(900 - window.pageYOffset)
  //   }
  // }

  const onScroll = () => {
    if (window.pageYOffset >= 0 && window.pageYOffset < initHeight) {
      setHeight(initHeight - window.pageYOffset)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', onScroll)
    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    onScroll()
  }, [pathname])

  return height
}
