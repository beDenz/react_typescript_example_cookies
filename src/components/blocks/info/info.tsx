import { useStyles } from './style'
import { Difficulty, DifficultyKeyList } from 'src/components/ui'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { InfoProps } from './info.d'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import LanguageIcon from '@material-ui/icons/Language'

const Info: React.FC<InfoProps> = ({
  difficulty,
  time,
  cuisine,
  caloricity,
}) => {
  const styles = useStyles()

  return (
    <List className={styles.info}>
      <ListItem disableGutters className={styles.marginRight}>
        <Difficulty type={difficulty as DifficultyKeyList} />
      </ListItem>
      <ListItem disableGutters className={styles.marginRight}>
        <AccessTimeIcon className={styles.icon} />
        <ListItemText primary={`${time / 60} min`} />
      </ListItem>
      <ListItem disableGutters className={styles.marginRight}>
        <WhatshotIcon className={styles.icon} />
        <ListItemText primary={`${caloricity} kCal`} />
      </ListItem>
      <ListItem disableGutters className={styles.marginRight}>
        <LanguageIcon className={styles.icon} />
        <ListItemText primary={cuisine.title} />
      </ListItem>
    </List>
  )
}

export { Info }
