import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Gradebook from './components/Gradebook';
import Assignment from './components/Assignment';
import CreateAssignment from './components/CreateAssignment';
import {BrowserRouter, Switch,  Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
           <Typography variant="h6" color="inherit">
            <a href="/">
              <h4 style={{ display: "center", marginLeft: '3rem' }}>Gradebook</h4>
            </a>
            
           </Typography>
           <br></br>
           <a href="/createAssignment">
            <h4 style={{ display: "center", marginLeft: '3rem' }}>Create New Assignment</h4>
            </a>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
       <Switch>
        <Route exact path='/' component={Assignment} />
        <Route path='/gradebook' component={Gradebook} />
        <Route path='/createAssignment' component={CreateAssignment}/>
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
