import './App.css';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './style/theme'

import Page from './components/Page'

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Page />
    </ThemeProvider>
  );
}

export default App;
