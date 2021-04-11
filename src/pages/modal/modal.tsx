import { Box } from '@material-ui/core'
import { useStyles, useSliderStyles, useCheckboxStyles } from './style'
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
import { useGetFilterCalories, useGetFilterCheckbox } from 'src/core/hooks'

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
