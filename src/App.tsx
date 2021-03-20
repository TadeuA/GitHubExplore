import Provider from "./hook";
import RepositoryList from "./components/RepositoryList";

export function App() {
  return (
    <Provider>
      <RepositoryList />
    </Provider>
  );
}
