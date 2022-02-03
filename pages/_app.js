import "../styles/globals.css";
import AppLayout from "../components/common/Layout/appLayout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}

export default MyApp;
