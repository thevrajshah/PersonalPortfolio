// import App from "next/app";
import Head from 'next/head';

import Layout from '../Layout';
import { Provider } from '../Context';
import '../sass/app.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Head>
        <script src="https://platform.twitter.com/widgets.js"></script>
        <script
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
