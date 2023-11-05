// pages/applications/[id].js
import Link from "next/link";
const { request } = require("graphql-request");
import { GET_CARDS } from "@/queries/cardsQueries";
const CardDetailPage = ({ card }) => {
  if (!card) {
    return <div>No Cards</div>;
  }
  return (
    <div>
      <h1>Card Details</h1>
      <p>ID: {card.id}</p>
      <p>Status: {card.attributes.CurrentStatus}</p>
      {/* Add more details here */}
      <Link href="/Cards">Back to Cards Management</Link>
    </div>
  );
};
export async function getStaticPaths() {
  // Fetch the list of available application IDs from your API or database
  const endpoint =   "https://smart-parking-server-dev.azurewebsites.net/graphql";
  const query = GET_CARDS;
  const res = await request(endpoint, query);
  const cards = res.cards.data;

  // Create paths for each application ID
  const paths = cards.map((card) => ({
    params: { id: card.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch application data based on the ID
  const card = {
    id: params.id, // Fetch application data from your API or database
    attributes: {
      CurrentStatus: "Active", // Example data
    },
  };

  return {
    props: {
      card,
    },
  };
}

export default CardDetailPage;
