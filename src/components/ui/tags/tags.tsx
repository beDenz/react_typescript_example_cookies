import { Chip, List, ListItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

type TypeListItem = {
  id: string | number
  value: string | number
}

export type TagListProps = {
  data: TypeListItem[]
}

const useTagStyles = makeStyles({
  ul: {
    display: 'inline-flex',
    paddingRight: 16,
  },
  padding: {
    paddingLeft: 8,
    paddingRight: 0,
  },
  chip: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
})

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
