import '../styles/globals.css';
import { Layout } from "antd";
import { AppProps } from 'next/app';
import HeaderW from '../components/HeaderW';

const { Header, Footer, Sider, Content } = Layout;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      
      <Layout>
        {/* <HeaderW/> */}
        <Content>
          <Component {...pageProps} />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  )
}

export default MyApp
