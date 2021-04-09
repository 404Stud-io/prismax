
// Routes
import Routes from '../route';
// Material global style
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ee8d8c',
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