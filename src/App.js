import './App.css';
import CreateServey from './components/CreateServey';
import Form from './components/Form';
import {Routes, Route} from 'react-router-dom'
import UserSurvey from './components/UserSurvey';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Form />}/>
      <Route path='createsurvey' element={<CreateServey />} />
      <Route path='createsurvey/createsurvey' element={<CreateServey />} />
      <Route path='/createsurvey/confirmsurvey' element={<UserSurvey />}/>
      <Route path='usersurvey' element={<UserSurvey />}/>

    </Routes>
  );
}

export default App;
