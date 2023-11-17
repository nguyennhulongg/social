import Layout from "@/components/Layout";
import LoginModal from "@/components/ModalComponent/LoginComponent";
import RegisterModal from "@/components/ModalComponent/RegisterComponent";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <RegisterModal />
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
