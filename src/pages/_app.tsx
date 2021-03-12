import GlobalStyles from '@components/GlobalStyles';
import { AppProps } from 'next/app';
import TopContainer from '@container/TopContainer';
import FooterContainer from '@container/FooterContainer';
import AppLayout from 'src/layouts/AppLayout';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}
export default App;
