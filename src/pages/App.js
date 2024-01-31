import { useState } from 'react';
import gitLogo from '../assets/github.png';
import ItemRepo from '../components/ItemRepo';
import Input from '../components/input';
import Button from '../components/Button';

import { Container } from './styles';

function App() {

  const [repos, setRepos] = useState([]);

  return (
    <Container>
      <img src={gitLogo} alt="Github logo" width={72} height={72}/>
      <Input />
      <Button />
      <ItemRepo />
    </Container>
  );
}

export default App;
