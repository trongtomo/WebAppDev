// pages/ParkingSessions/[id].js
import { GET_PARKINGSESSIONS } from "@/queries/parkingSessionsQueries";
import Link from "next/link";
const { request } = require("graphql-request");
const ParkingSessionDetailPage = ({ session }) => {
  if (!session) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Session Details</h1>
      <p>ID: {session.id}</p>
      <p>Status: {session.attributes.CurrentStatus}</p>
      <p>Checkin Face Image: {session.attributes.CheckinFaceImage}</p>
      <p>Checkin Plate Number Image: {session.attributes.CheckinPlateNumberImage}</p>
      <p>Checkin Time: {session.attributes.CheckinTime}</p>
      <p>Checkout Face Image: {session.attributes.CheckoutFaceImage}</p>
      <p>Checkout Plate Number Image: {session.attributes.CheckoutPlateNumberImage}</p>
      <p>Checkout Time: {session.attributes.CheckoutTime}</p>
      {/* Add more details here */}
      <Link href="/ParkingSessions">Back to Sessions Management</Link>
    </div>
  );
};
export async function getStaticPaths() {
  // Fetch the list of available application IDs from your API or database
  const endpoint =   "https://smart-parking-server-dev.azurewebsites.net/graphql";
  const query = GET_PARKINGSESSIONS;  
  const res = await request(endpoint, query);
  const sessions = res.parkingSessions.data;

  // Create paths for each application ID
  const paths = sessions.map((session) => ({
    params: { id: session.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch application data based on the ID
  const session = {
    id: params.id, // Fetch application data from your API or database
    attributes: {
      CurrentStatus: "Active", // Example data
    },
  };

  return {
    props: {
      session,
    },
  };
}

export default ParkingSessionDetailPage;
