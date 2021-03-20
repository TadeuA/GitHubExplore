import {FC} from 'react'
import { Container } from "./styles";
import { RepositoryItemProps } from '../../@types'

const RepositoryItem: FC<RepositoryItemProps> = ({ repository }) => {
  return (
    <Container>
      <strong>{repository.name}</strong>
      <p>{repository?.description}</p>
      <a target="_blank" href={repository.html_url}>
        Acessar repositórios
      </a>
    </Container>
  );
}

export default RepositoryItem