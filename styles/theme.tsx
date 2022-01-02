import { createTheme, responsiveFontSizes  } from '@mui/material/styles';
import { red } from '@mui/material/colors';


// Create a theme instance.
let theme = createTheme({
    typography: {
        fontFamily: 'Poppins',
        button: {
            textTransform: "none"
          },
          
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: `
            @font-face {
              font-family: 'Poppins';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('Poppins'), local('Poppins-Regular'), url('/fonts/Poppins-Regular.tff') format('ttf');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
        },
    },
  palette: {
    primary: {
      main: '#4F6A14',
    },
    secondary: {
      main: '#5C800D',
    },
    error: {
      main: red.A400,
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;