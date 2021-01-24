import "@fontsource/roboto"
import { withAuthenticator } from "@aws-amplify/ui-react";
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div id="root">
      <Container maxWidth="sm">
    <Button variant="contained" color="primary">
      Hello World
    </Button>
    </Container>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
export default withAuthenticator(App);
