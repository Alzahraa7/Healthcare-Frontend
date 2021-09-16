import {Route, BrowserRouter, Switch} from 'react-router-dom';
import './scrolbar.css'
import APItry from './components/api';
import SignIn from './components/signIn';
import LogIn from './components/login';
import Navv from './components/nav';
import Footeer from './components/footer';
import HomePage from './components/home';
import DoctorProfile from './components/doctorprofile';
import PatientProfile from './components/patientprofile';
import PDoctorView from './components/pdoctorview';
import DPatientView from './components/dpatientview';
import DFiltration from './components/dfiltration';
import Settings from './components/settings';
import Survey from './components/survey';
import LandPage from  './components/landpage';
import BloodBank from './components/bloodbank';
import DonorList from './components/donor-list';
import NeederList from './components/needer-list';
import NeederReg from  './components/neederRej';
import DonorReg from  './components/donorRej';
import Chat from './components/chat';
import Toasst from './components/toast';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignInd from './components/signind';
import MoreSignupD from './components/moresignupd';
toast.configure()

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/SignIn">
        <SignIn />
      </Route>
    <Route path="/SignInd">
        <SignInd />
      </Route>
      <Route path="/moresignupd">
        <MoreSignupD />
      </Route>
      <Route path="/login">
        <LogIn />
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/BloodBank">
        <BloodBank />
      </Route>
      <Route path="/DonorReg">
        <DonorReg />
      </Route>
      <Route path="/NeederReg">
        <NeederReg />
      </Route>
      <Route exact path="/DonorList">
      <DonorList />
      </Route>
      <Route exact path="/NeederList">
      <NeederList />
      </Route>
      <Route exact path="/chat">
      <Chat />
      </Route>
      <Route exact path="/">
      <LandPage />
      </Route>
      <Route path="/survey">
        <Survey />
      </Route>
      <Route path="/doctorprofile">
      <Toasst message="Hello Doctor, You are doing a great job" />
        <DoctorProfile />
      </Route>
      <Route path="/patientprofile">
        <PatientProfile />
      </Route>
      <Route path="/dfiltration">
        <DFiltration />
      </Route>
      <Route path="/dpatientview">
        <DPatientView />
      </Route>
      <Route exact path="/settings">
        <Settings />
      </Route>
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
