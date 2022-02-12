import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

interface Props {
  children?: React.ReactNode;
}

const LayoutComponent: React.FC<Props> = (props) => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content className="w-[1024px] mx-auto">{props.children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default LayoutComponent;
