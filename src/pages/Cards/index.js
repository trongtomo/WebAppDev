import Link from "next/link";
import AllCard from "../../../components/Cards/AllCard";
import Head from "next/head";

import { GET_CARDS } from "@/queries/cardsQueries";
const { request } = require("graphql-request");
export async function getStaticProps() {
  const endpoint = process.env.GRAPHQL_ENDPOINT;
  const query = GET_CARDS;

  try {
    const res = await request(endpoint, query);
    const cards = res.cards.data;
    return {
      props: {
        cards,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        cards: [],
      },
    };
  }
}
const CardsPage = ({ cards }) => {
  return (
    <div>
      <Head>
        <h1>All Cards</h1>
        <p>This is a page that displays all cards.</p>
      </Head>
      <AllCard cards={cards} />
    </div>
  );
};

export default CardsPage;
