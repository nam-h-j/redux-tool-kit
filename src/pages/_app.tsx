import type { AppProps } from "next/app";

//redux
import { Provider } from "react-redux";
import store from "../store/store";

function RdxTkApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default RdxTkApp;
