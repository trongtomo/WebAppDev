// pages/applications/[id].js
import { GET_APPLICATIONS } from "@/queries/applicationsQueries";
import Link from "next/link";
const { request } = require("graphql-request");
const ApplicationDetailPage = ({ application }) => {
  if (!application) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Application Details</h1>
      <p>ID: {application.id}</p>
      <p>Status: {application.attributes.Status}</p>
      {/* Add more details here */}
      <Link href="/Applications">Back to Applications</Link>
    </div>
  );
};
export async function getStaticPaths() {
  // Fetch the list of available application IDs from your API or database
  const endpoint = process.env.GRAPHQL_ENDPOINT;
  const query = GET_APPLICATIONS;
  const res = await request(endpoint, query);
  const applications = res.applications.data;

  // Create paths for each application ID
  const paths = applications.map((application) => ({
    params: { id: application.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch application data based on the ID
  const application = {
    id: params.id, // Fetch application data from your API or database
    attributes: {
      Status: "Active", // Example data
    },
  };

  return {
    props: {
      application,
    },
  };
}

export default ApplicationDetailPage;
