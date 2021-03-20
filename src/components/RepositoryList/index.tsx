import { useState, useEffect, FC } from "react";
import  RepositoryItem  from "../RepositoryItem";
import { Container, UL } from "./styles";
import apiGitHub from "../../services/github";
import { RepositoryItemProps } from '../../@types'

//https://api.github.com/users/TadeuA/repos
//https://api.github.com/orgs/rocketseat/repos
const RepositoryList:FC = () => {
  const [repositories, setRepositories] = useState<RepositoryItemProps[]>([] as RepositoryItemProps);

  useEffect(() => {
    async function getRepositoriesToGitHub() {
      try {
        const { data } = await apiGitHub.orgs.get("/rocketseat/repos");
        setRepositories(data);
      } catch (err) {
        console.log(err);
      }
    }
    getRepositoriesToGitHub();
  }, []);
  return (
    <Container>
      <h1>Lista de repositórios</h1>
      <UL>
        {repositories.map((item) => (
          <RepositoryItem
            key={item.name}
            repository={{
              name: item.name,
              description: item.description,
              html_url: item.html_url,
            }}
          />
        ))}
      </UL>
    </Container>
  );
}

export default RepositoryList