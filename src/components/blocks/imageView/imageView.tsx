import React, { useEffect, useState, cloneElement } from 'react'
import { Box, CardMedia } from '@material-ui/core'
import { useStyles } from './style'
import './style.scss'
import clsx from 'clsx'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { MainImageType, ImageViewProps } from './imageView.d'

const usePreloadImages = (images: string[]): void => {
  useEffect(() => {
    images.forEach((src) => {
      const image = new Image()

      image.src = src
    })
  }, [])
}

const ImageView: React.FC<ImageViewProps> = ({ data }) => {
  if (!data || !data.length) return null

  const styles = useStyles()

  usePreloadImages(data)

  const [initImage] = data
  const [mainImage, setMainImage] = useState<MainImageType>({
    id: 1,
    src: initImage,
  })
  const [animClass, setAnimClass] = useState('right')

  const onSetMainImage = (obj: MainImageType): void => {
    setAnimClass(() => (obj.id > mainImage.id ? 'right' : 'left'))
    setMainImage(() => obj)
  }
  const isActiveThumbnail = (src: string): boolean => mainImage.src === src

  const childFactoryCreator = (classNames: string) => (
    child: React.ReactElement
  ) =>
    cloneElement(child, {
      classNames,
    })

  return (
    <Box className={styles.container}>
      <TransitionGroup
        className={styles.main}
        childFactory={childFactoryCreator(`slider-${animClass}`)}
      >
        <CSSTransition
          classNames={`slider-${animClass}`}
          timeout={1000}
          key={mainImage.id}
        >
          <CardMedia image={mainImage.src} className={styles.img} />
        </CSSTransition>
      </TransitionGroup>
      <Box className={styles.thumbnails}>
        {data.map((item, index) => (
          <Box
            key={item}
            onClick={() =>
              onSetMainImage({
                id: index + 1,
                src: item as string,
              })
            }
            className={styles.thumbnail}
          >
            <CardMedia image={item} className={styles.img}>
              <Box
                className={clsx(styles.activeThumbnai, {
                  [styles.on]: isActiveThumbnail(item),
                })}
              ></Box>
            </CardMedia>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export { ImageView }
