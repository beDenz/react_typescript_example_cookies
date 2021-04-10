import { Box } from '@material-ui/core'
import { useStyles, useSliderStyles, useCheckboxStyles } from './style'
import { useState, useEffect } from 'react'
import {
  Button,
  Typography,
  ListItem,
  List,
  ListItemText,
  Checkbox,
  ListItemSecondaryAction,
  Slider,
  IconButton,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import clsx from 'clsx'
import { useHistory, useLocation } from 'react-router-dom'

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

const Modal: React.FC = () => {
  const history = useHistory()
  const location = useLocation()
  const styles = useStyles()

  const sliderStyles = useSliderStyles()
  const checkboxStyle = useCheckboxStyles()

  const [sliderValue, onChangeSlider] = useGetFilterCalories({
    min: 100,
    max: 1000,
  })

  const [checkboxes, onToogleCheckbox] = useGetFilterCheckbox()

  // eslint-disable-next-line
  const onClearFiter = () => {
    history.push(location.pathname)
  }

  const createFilterQuery = () => {
    const cuisine =
      'cuisine=' +
      checkboxes
        .filter((item) => item.checked)
        .map((item) => item.id)
        .join(',')

    const cal = 'cal=' + sliderValue.join(',')

    return `?${cuisine}&${cal}`
  }

  // eslint-disable-next-line
  const onSetFilter = () => {
    history.push(createFilterQuery())
  }

  return (
    <Box className={styles.root}>
      <Box className={styles.modal}>
        <IconButton className={styles.closeBtn}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h3" component="h3" className={styles.title}>
          Filter
        </Typography>
        <List disablePadding className={styles.list}>
          {checkboxes.map(({ id, value, checked }) => (
            <ListItem disableGutters divider key={id}>
              <ListItemText id={id} primary={value} />
              <ListItemSecondaryAction className={styles.checkboxWrapper}>
                <Checkbox
                  classes={checkboxStyle}
                  color="default"
                  onChange={() => onToogleCheckbox(id)}
                  checked={checked}
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <Slider
          classes={sliderStyles}
          value={sliderValue}
          aria-labelledby="range-slider"
          step={1}
          valueLabelDisplay="on"
          onChange={onChangeSlider}
          min={100}
          max={1000}
        />
        <Typography id="vertical-slider" gutterBottom>
          Calories, kCal
        </Typography>
        <Box className={styles.buttonsWrapper}>
          <Button
            variant="outlined"
            className={clsx(styles.button, styles.clearBtn)}
            onClick={onClearFiter}
          >
            clear
          </Button>
          <Button
            variant="contained"
            className={clsx(styles.button, styles.confirmBtn)}
            onClick={onSetFilter}
          >
            Show Recipes
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export { Modal }
