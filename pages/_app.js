import { Provider } from "react-redux";
import Layout from "../components/layout/Layout";
import store from "../components/Store/index";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
