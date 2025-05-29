import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Whatsapp from "@/components/sub/Whatsapp";
import "@/styles/globals.css";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="">
        <Component {...pageProps} />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}