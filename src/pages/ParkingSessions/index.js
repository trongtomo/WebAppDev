import Link from "next/link";
import AllParkingSession from "../../../components/ParkingSessions/AllParkingSession";
import Head from "next/head";
import { GET_PARKINGSESSIONS } from "@/queries/parkingSessionsQueries";

const { request } = require("graphql-request");
export async function getStaticProps() {
  const endpoint =   "https://smart-parking-server-dev.azurewebsites.net/graphql";
  const query = GET_PARKINGSESSIONS;

  try {
    const res = await request(endpoint, query);
    const sessions = res?.parkingSessions?.data;
    return {
      props: {
        sessions,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        sessions: [],
      },
    };
  }
}
const ParkingSessionsPage = ({ sessions }) => {
  return (
    <div>
      <Head>
        <h1>All Parking Session</h1>
        <p>This is a page that displays all Parking Sessions.</p>
      </Head>
      <AllParkingSession sessions={sessions} />
    </div>
  );
};

export default ParkingSessionsPage;
