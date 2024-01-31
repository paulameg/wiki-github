import { useState } from 'react';
import gitLogo from '../assets/github.png';
import ItemRepo from '../components/ItemRepo';
import Input from '../components/input';
import Button from '../components/Button';

import { api } from '../services/api';

import { Container } from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id) {

      const isExist = repos.find(repo => repo.id === data.id);

      if(!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return
      }
      
    }
    alert('Repositório não encontrado');
  }

  return (
    <Container>
      <img src={gitLogo} alt="Github logo" width={72} height={72}/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo repo={repo} />)}
      
    </Container>
  );
}

export default App;
