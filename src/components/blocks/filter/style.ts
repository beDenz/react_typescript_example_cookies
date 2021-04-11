import { makeStyles } from '@material-ui/core/styles'

// eslint-disable-next-line
const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: 32,
    backgroundColor: '#ffffff',
    width: 440,
    boxShadow:
      '0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2)',
  },
  buttonsWrapper: {
    marginTop: 62,
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 1.25,
    textTransform: 'uppercase',
  },
  closeBtn: {
    position: 'absolute',
    top: 9,
    right: 9,
  },
  confirmBtn: {
    color: theme.palette.base1.main,
    backgroundColor: theme.palette.shade50.main,
    boxShadow:
      '0px 3px 1px -2px rgb(0 0 0 / 0%), 0px 2px 2px 0px rgb(0 0 0 / 0%), 0px 1px 5px 0px rgb(0 0 0 / 0%)',
  },
  clearBtn: {
    color: theme.palette.shade50.main,
    borderColor: theme.palette.shade20.main,
  },
  title: {
    marginBottom: 16,
  },
  list: {
    marginBottom: 52,
  },
  checkboxWrapper: {
    right: 0,
  },
}))

const useCheckboxStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.shade50.main,
  },
}))

const useSliderStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.shade50.main,
  },
  valueLabel: {
    '& span': {
      fontSize: 12,
    },
  },
}))

export { useStyles, useSliderStyles, useCheckboxStyles }
