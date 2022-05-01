import AppRouter from './router/AppRouter';
import AuthContextProvider from './context/AuthContext';
import BlogContextProvider from './context/BlogContext';
import { ToastContainer } from 'react-toastify';
import './App.css'

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BlogContextProvider>
          <AppRouter />
          <ToastContainer />
        </BlogContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;