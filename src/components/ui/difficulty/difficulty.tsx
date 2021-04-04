import styles from './difficulty.module.scss'
import { SvgIcon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

enum DifficultyDescriptionList {
  easy = 'easy',
  medium = 'medium',
  hard = 'hard',
}

export type DifficultyKeyList = keyof typeof DifficultyDescriptionList

export type DifficultyProps = {
  type: DifficultyKeyList
}

const useStyles = makeStyles({
  root: {
    stroke: 'currentColor',
  },
})

const Icon: React.FunctionComponent = () => {
  const styles = useStyles()

  return (
    <SvgIcon classes={styles}>
      <mask id="path-1-inside-1" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.91742 3.39448C7.7439 1.40166 9.70826 0 12 0C14.2917 0 16.2561 1.40167 17.0826 3.3945C17.3955 3.3325 17.719 3.29999 18.0501 3.29999C20.7839 3.29999 23.0001 5.51618 23.0001 8.24999C23.0001 10.4053 21.6226 12.2388 19.7 12.9183V21.9H4.30003V12.9183C2.37745 12.2388 1 10.4053 1 8.24999C1 5.51618 3.21619 3.29999 5.95 3.29999C6.28107 3.29999 6.60455 3.33249 6.91742 3.39448Z"
        />
      </mask>
      <path
        d="M6.91742 3.39448L6.6259 4.86588L7.83197 5.10483L8.30299 3.96911L6.91742 3.39448ZM17.0826 3.3945L15.697 3.96912L16.168 5.10487L17.3741 4.86589L17.0826 3.3945ZM19.7 12.9183L19.2002 11.5041L18.2 11.8576V12.9183H19.7ZM19.7 21.9V23.4H21.2V21.9H19.7ZM4.30003 21.9H2.80003V23.4H4.30003V21.9ZM4.30003 12.9183H5.80003V11.8576L4.79989 11.5041L4.30003 12.9183ZM8.30299 3.96911C8.90526 2.5169 10.3356 1.5 12 1.5V-1.5C9.08088 -1.5 6.58253 0.286423 5.53185 2.81984L8.30299 3.96911ZM12 1.5C13.6644 1.5 15.0948 2.51691 15.697 3.96912L18.4682 2.81987C17.4175 0.286434 14.9191 -1.5 12 -1.5V1.5ZM17.3741 4.86589C17.5915 4.82281 17.8174 4.79999 18.0501 4.79999V1.79999C17.6206 1.79999 17.1994 1.84218 16.791 1.9231L17.3741 4.86589ZM18.0501 4.79999C19.9555 4.79999 21.5001 6.3446 21.5001 8.24999H24.5001C24.5001 4.68775 21.6123 1.79999 18.0501 1.79999V4.79999ZM21.5001 8.24999C21.5001 9.74981 20.5422 11.0298 19.2002 11.5041L20.1999 14.3326C22.7031 13.4479 24.5001 11.0607 24.5001 8.24999H21.5001ZM18.2 12.9183V21.9H21.2V12.9183H18.2ZM19.7 20.4H4.30003V23.4H19.7V20.4ZM5.80003 21.9V12.9183H2.80003V21.9H5.80003ZM4.79989 11.5041C3.45789 11.0298 2.5 9.7498 2.5 8.24999H-0.5C-0.5 11.0607 1.29701 13.4479 3.80017 14.3326L4.79989 11.5041ZM2.5 8.24999C2.5 6.34461 4.04462 4.79999 5.95 4.79999V1.79999C2.38776 1.79999 -0.5 4.68775 -0.5 8.24999H2.5ZM5.95 4.79999C6.18267 4.79999 6.40852 4.82281 6.6259 4.86588L7.20894 1.92308C6.80058 1.84217 6.37947 1.79999 5.95 1.79999V4.79999Z"
        mask="url(#path-1-inside-1)"
      />
      <path d="M5 16H19" strokeWidth="1.5" />
    </SvgIcon>
  )
}

const Difficulty: React.FC<DifficultyProps> = ({ type }) => {
  return (
    <div className={clsx(styles.container, styles[type])}>
      <Icon />
      <span>{DifficultyDescriptionList[type]}</span>
    </div>
  )
}

export { Difficulty }
