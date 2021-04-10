declare module '*.scss' {
  const content: {
    [className: string]: string
  }
  export = content
}

declare module '*.png' {
  const value: any
  export = value
}

import '@material-ui/core/styles'

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    base0: Palette['primary']
    base1: Palette['primary']
    shade20: Palette['primary']
    shade40: Palette['primary']
    shade50: Palette['primary']
  }
  interface PaletteOptions {
    base0: PaletteOptions['primary']
    base1: PaletteOptions['primary']
    shade20: PaletteOptions['primary']
    shade40: PaletteOptions['primary']
    shade50: PaletteOptions['primary']
  }
}
