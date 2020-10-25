import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Header } from './components/Header';
import { Step1 } from './Step1.jsx';
import { Step2 } from './Step2.jsx';
import { Step3 } from './Step3';
import {Result} from './Result'



function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={Step1} />
          <Route path='/step2' component={Step2} />
          <Route path='/step3' component={Step3} />
          <Route path='/result' component={Result} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
