import Footer from '@components/Footer';
import Top from '@components/Top';
import GlobalStyles from '@components/GlobalStyles';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Top />
      <Component {...pageProps} />
      <Footer />
      <GlobalStyles />
    </>
  );
}
export default App;
