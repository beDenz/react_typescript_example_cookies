import { useState } from 'react'
import { Box, CardMedia } from '@material-ui/core'
import { useStyles } from './style'
import clsx from 'clsx'

export type ImageViewProps = {
  data: string[]
}

const ImageView: React.FC<ImageViewProps> = ({ data }) => {
  if (!data || !data.length) return null

  const styles = useStyles()

  const [initImage] = data
  const [mainImage, setMainImage] = useState<string>(initImage)
  const onSetMainImage = (src: string) => setMainImage(src)

  const isActiveThumbnail = (src: string): boolean => mainImage === src

  return (
    <Box className={styles.container}>
      <Box className={styles.main}>
        <CardMedia image={mainImage} className={styles.img} key={mainImage} />
      </Box>
      <Box className={styles.thumbnails}>
        {data.map((item) => (
          <Box
            key={item}
            onClick={() => onSetMainImage(item)}
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
