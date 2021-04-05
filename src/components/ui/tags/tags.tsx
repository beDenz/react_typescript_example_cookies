import { Chip, List, ListItem } from '@material-ui/core'
import { TagListProps } from './tag.d'
import { useTagStyles } from './style'

const Tags: React.FC<TagListProps> = ({ data }) => {
  const styles = useTagStyles()

  return (
    <List className={styles.ul}>
      {data.map(({ id, value }) => (
        <ListItem className={styles.padding} key={id}>
          <Chip label={value} className={styles.chip} />
        </ListItem>
      ))}
    </List>
  )
}

export { Tags }
