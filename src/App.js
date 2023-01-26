import Header from './components/Header';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#11cb5f'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
