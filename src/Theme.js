import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EECA1C',
      contrastText: '#2E3742',
    },
    secondary: {
      main: '#1D2333',
      contrastText: '#E1E6F5',
    },
    error: red,

    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  },
  typography: {
    useNextVariants: true
  }
});

export default Theme;