import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import css from "../styles/Home.module.css";
import Services from "../components/Services";
import { client } from "../lib/client";
import Menu from "../components/Menu";

export default function Home({ pizzas }) {
  return (
    <Layout>
      <div className={css.container}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Foodmato</title>
          <meta name="description" content="A food Delievery App" />
          <link rel="icon" href="/Logo.png" />
        </Head>

        {/* body */}
        <main >
          <Hero />
          <Services />
          <Menu pizzas={pizzas} />
        </main>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "pizza"]';
  const pizzas = await client.fetch(query);
  return {
    props: {
      pizzas,
    },
  };
};
