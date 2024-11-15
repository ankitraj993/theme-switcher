import './App.css';
import ThemeProvider from './context.jsx/theme-switcher-context';
import AppContent from './compnents/AppContent';

function App() {

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
