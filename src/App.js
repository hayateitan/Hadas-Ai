import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login/Login'
import Container from './Container'
import Home from './Home/Home'
import Notebook from './Notebook/Notebook'
import Repository from './Notebook/RepositoryNotebook'
import CreateNotebook from './CreateNotebook/CreateNotebook'
import "bootstrap/dist/css/bootstrap.min.css";
import BlockCode from "./Notebook/BlockCode";
import TESTFORM from './Notebook/TestForm'
import Account from "./account/Account";
import Database from "./Database/Database";
import NbIp from "./NoteBookInProgress/NbIp";
import Slack from "./Slack/Slack";
import CreateDtabase from "./Database/CreateDtabase"
import Outpout from "./Notebook/Outpout";
import FormDatabase from "./Database/FormDatabase";
import Mydatabase from "./Database/Mydatabase";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Home" component={() => <Container><Home /></Container>} />
          <Route exact path="/Notebook" component={() => <Container><Notebook /></Container>} />
          <Route exact path="/Predict" component={() => <Container><BlockCode /></Container>} />
          <Route exact path="/Repository" component={() => <Container><Repository /></Container>} />
          <Route exact path="/CreateNoteBook" component={() => <Container><CreateNotebook /></Container>} />
          <Route exact path="/Testform" component={() => <Container><TESTFORM /></Container>} />
          <Route exact path="/Account" component={() => <Container><Account /></Container>} />
          <Route exact path="/DataBase" component={() => <Container><Database /></Container>} />
          <Route exact path="/NbIp" component={() => <Container><NbIp /></Container>} />
          <Route exact path="/Slack" component={() => <Container><Slack /></Container>} />
          <Route exact path="/createdtabase" component={() => <Container><CreateDtabase /></Container>} />
          <Route exact path="/testoutpout" component={() => <Container><Outpout/> </Container>} />
          <Route exact path="/formpostgree" component={() => <Container><FormDatabase/> </Container>} />
          <Route exact path="/mydatabase" component={() => <Container><Mydatabase/> </Container>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
