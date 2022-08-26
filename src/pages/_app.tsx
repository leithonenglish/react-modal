/* eslint-disable canonical/filename-match-exported */
import { type AppProps } from 'next/app';
// eslint-disable-next-line import/no-unassigned-import
import 'app.css';
// eslint-disable-next-line import/no-unassigned-import
import '@fontsource/inter';
// eslint-disable-next-line import/no-unassigned-import
import '@fontsource/inter/600.css';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link href="/favicon.ico" rel="icon" />
        <title>Simply Modals</title>
        <meta
          content="A simple app that showcases a modal component"
          name="description"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
