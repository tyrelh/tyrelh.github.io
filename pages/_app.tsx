import "../styles/app.scss";
import { Layout } from "antd";
import { AppProps } from "next/app";
import HeaderW from "../components/layout/HeaderW";
import Footer from "../components/layout/Footer";

const { Content } = Layout;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <Layout className="app">
      <Content className="fadeIn">
        <Component {...pageProps} />
        <Footer/>
      </Content>
      
    </Layout>
  );
}

export default MyApp;
