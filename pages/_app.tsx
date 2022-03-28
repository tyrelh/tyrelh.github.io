import './app.scss';
import { Layout } from "antd";
import { AppProps } from 'next/app';
import HeaderW from '../components/HeaderW';

const { Header, Footer, Sider, Content } = Layout;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout className="app" style={{ minHeight: '100vh' }}>
      
        {/* <HeaderW/> */}
        <Content>
          <Component {...pageProps} />
        </Content>
        <Footer>Footer</Footer>
    </Layout>
  )
}

export default MyApp
