import LayoutComponent from "./Layout/index";
import PageTitle from "./components/PageTitle";
import AppHeader from "./components/AppHeader";

const App: React.FC = () => {
  return (
    <LayoutComponent>
      <PageTitle>TODO List</PageTitle>
      <AppHeader></AppHeader>
    </LayoutComponent>
  );
};

export default App;
