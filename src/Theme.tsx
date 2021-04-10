import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: 64,
      lineHeight: 1.25,
      fontWeight: 800,
      fontFamily: 'Gilroy, sans-serif',
    },
    h2: {
      fontSize: 40,
      lineHeight: 1.2,
      fontWeight: 800,
      fontFamily: 'Gilroy, sans-serif',
    },
    h3: {
      fontSize: 24,
      lineHeight: 1.17,
      fontWeight: 800,
      fontFamily: 'Gilroy, sans-serif',
    },
    body1: {
      fontSize: 16,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: 12,
      lineHeight: 1.33,
    },
    caption: {
      fontSize: 9,
      lineHeight: '11px',
    },
  },
  palette: {
    base0: {
      main: '#000000',
    },
    base1: {
      main: '#ffffff',
    },
    shade20: {
      main: '#DDDDDD',
    },
    shade40: {
      main: '#A9A9A9',
    },
    shade50: {
      main: '#82786A',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#ffffff',
        },
      },
    },
  },
})

export { theme }
