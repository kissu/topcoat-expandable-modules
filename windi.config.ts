import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  // darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,
  theme: {
    colors: {
      neutral: {
        50: 'hsla(210, 40%, 98%, 1)',
        100: 'hsla(210, 40%, 96%, 1)',
        200: 'hsla(214, 32%, 91%, 1)',
        300: 'hsla(213, 27%, 84%, 1)',
        400: 'hsla(215, 20%, 65%, 1)',
        500: 'hsla(215, 16%, 47%, 1)',
        600: 'hsla(215, 19%, 35%, 1)',
        700: 'hsla(215, 25%, 27%, 1)',
        800: 'hsla(217, 33%, 17%, 1)',
        900: 'hsla(222, 47%, 11%, 1)'
      },
      primary: {
        50: 'hsla(224, 70%, 95%, 1)',
        100: 'hsla(224, 70%, 84%, 1)',
        200: 'hsla(224, 71%, 74%, 1)',
        300: 'hsla(224, 71%, 64%, 1)',
        400: 'hsla(224, 71%, 53%, 1)',
        500: 'hsla(224, 76%, 48%, 1)',
        600: 'hsla(224, 77%, 38%, 1)',
        700: 'hsla(224, 77%, 29%, 1)',
        800: 'hsla(225, 76%, 19%, 1)',
        900: 'hsla(224, 76%, 10%, 1)'
      },
      secondary: {
        50: 'hsla(46, 89%, 96%, 1)',
        100: 'hsla(45, 93%, 89%, 1)',
        200: 'hsla(46, 92%, 81%, 1)',
        300: 'hsla(46, 91%, 74%, 1)',
        400: 'hsla(46, 92%, 66%, 1)',
        500: 'hsla(46, 92%, 62%, 1)',
        600: 'hsla(46, 56%, 50%, 1)',
        700: 'hsla(46, 56%, 37%, 1)',
        800: 'hsla(46, 56%, 25%, 1)',
        900: 'hsla(46, 56%, 12%, 1)'
      },
      success: {
        50: 'hsla(152, 81%, 96%, 1)',
        100: 'hsla(149, 80%, 90%, 1)',
        200: 'hsla(152, 76%, 80%, 1)',
        300: 'hsla(156, 72%, 67%, 1)',
        400: 'hsla(158, 64%, 52%, 1)',
        500: 'hsla(160, 84%, 39%, 1)',
        600: 'hsla(161, 94%, 30%, 1)',
        700: 'hsla(163, 94%, 24%, 1)',
        800: 'hsla(163, 88%, 20%, 1)',
        900: 'hsla(164, 86%, 16%, 1)'
      },
      warning: {
        50: 'hsla(48, 100%, 96%, 1)',
        100: 'hsla(48, 96%, 89%, 1)',
        200: 'hsla(48, 97%, 77%, 1)',
        300: 'hsla(46, 97%, 65%, 1)',
        400: 'hsla(43, 96%, 56%, 1)',
        500: 'hsla(38, 92%, 50%, 1)',
        600: 'hsla(32, 95%, 44%, 1)',
        700: 'hsla(26, 90%, 37%, 1)',
        800: 'hsla(23, 82%, 31%, 1)',
        900: 'hsla(22, 78%, 26%, 1)'
      },
      error: {
        50: 'hsla(0, 86%, 97%, 1)',
        100: 'hsla(0, 93%, 94%, 1)',
        200: 'hsla(0, 96%, 89%, 1)',
        300: 'hsla(0, 94%, 82%, 1)',
        400: 'hsla(0, 91%, 71%, 1)',
        500: 'hsla(0, 84%, 60%, 1)',
        600: 'hsla(0, 72%, 51%, 1)',
        700: 'hsla(0, 74%, 42%, 1)',
        800: 'hsla(0, 70%, 35%, 1)',
        900: 'hsla(0, 63%, 31%, 1)'
      },
      white: 'hsla(0, 0%, 100%, 1)',
      black: 'hsla(0, 0%, 0%, 1)',
      // dark mode not listed here yet, will it later on https://www.figma.com/file/fo2cq0m7EcsFfjngXk8m8g/TopCoat-Design-System-v1.0?node-id=36%3A535
    },
    fontFamily: {
      inter: "Inter, sans-serif",
    },
    //todo fonts, especially line heights etc... https://youtu.be/cZc4Jn5nK3k?t=273
    //todo grids
    dropShadow: {
      none: '0',
      xs: '0px 4px 8px hsla(0, 0%, 0%, 0.1)',
      sm: '0px 6px 12px hsla(0, 0%, 0%, 0.1)',
      md: '0px 9px 18px hsla(0, 0%, 0%, 0.2)',
      lg: '0px 13px 37px hsla(0, 0%, 0%, 0.2)',
      xl: '0px 20px 56px hsla(0, 0%, 0%, 0.3)'
    }
  }
})
