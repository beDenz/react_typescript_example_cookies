import styles from './step.module.scss'
import { StepProps } from './step.d'

const Step: React.FC<StepProps> = ({ index }) => {
  return (
    <div className={styles.container}>
      <span className={styles.index}>{index}</span>
    </div>
  )
}

export { Step }
