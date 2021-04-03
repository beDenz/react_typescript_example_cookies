import styles from './step.module.scss'

export type StepProps = {
  index: string | number
}

const Step: React.FC<StepProps> = ({ index }) => {
  return (
    <div className={styles.container}>
      <span className={styles.index}>{index}</span>
    </div>
  )
}

export { Step }
