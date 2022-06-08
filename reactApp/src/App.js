import './App.css';
import Feed from "./Feed/Feed";
import Sidebar from "./SidebarOption/Sidebar";
import Widgets from "./Widgets/Widgets";
import 'react-notifications-component/dist/theme.css'
import Login from './Login/Login';

function App() {

  return (
    <div className="app">
      <Login />
      {/* <Sidebar />
      <Feed />
      <Widgets /> */}
    </div>
  );

}

export default App;
