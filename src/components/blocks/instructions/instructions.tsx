import { useStyles } from './style'
import { Step } from 'src/components/ui'
import { List, ListItem, Typography, Box } from '@material-ui/core'
import { InstructionsProps } from './instructions.d'

const Instructions: React.FC<InstructionsProps> = ({ data }) => {
  if (!data) return null

  const styles = useStyles()

  return (
    <div>
      <Typography gutterBottom variant="h3" component="h3">
        Instructions
      </Typography>
      <List>
        {data.map((item: string, index: number) => (
          <ListItem
            key={index}
            disableGutters
            className={styles.instructionsItem}
          >
            <Box className={styles.stepWrapper}>
              <Step index={index + 1} />
            </Box>
            <Typography variant="body1" component="span">
              {item}
            </Typography>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export { Instructions }
