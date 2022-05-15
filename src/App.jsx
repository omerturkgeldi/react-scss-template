import './App.css';
import './styles/_styles.scss'
import MainLayout from './layouts/MainLayout';
import { useSelector } from "react-redux";

function App() {
  const {dark} = useSelector(state => state.site)


  return (
    <div className={dark ? 'dark': 'light'} >
      <MainLayout />
    </div>
  );
}

export default App;


