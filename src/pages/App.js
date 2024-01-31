import gitLogo from '../assets/github.png';
import ItemRepo from '../components/ItemRepo';
import Input from '../components/input';

import { Container } from './styles';

function App() {
  return (
    <Container>
      <img src={gitLogo} alt="Github logo" width={72} height={72}/>
      <Input />
      <ItemRepo />
    </Container>
  );
}

export default App;
