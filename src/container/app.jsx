
// Routes
import Routes from '../route';
// Material global style
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e88622',
    },
    secondary: {
      main: '#edefee',
    },
  },
});



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  );
}

export default App;