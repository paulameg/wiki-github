import gitLogo from '../assets/github.png';

import { Container } from './styles';

function App() {
  return (
    <Container>
      <img src={gitLogo} alt="Github logo" width={72} height={72}/>
    </Container>
  );
}

export default App;
