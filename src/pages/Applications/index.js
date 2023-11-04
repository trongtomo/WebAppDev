import React, { useEffect, useState } from "react";
import AllApplication from "../../../components/Applications/AllApplication";
import Head from "next/head";
import { GET_APPLICATIONS } from "@/queries/applicationsQueries";
const { request } = require("graphql-request");
const ApplicationsPage = ({ applications }) => {
  return (
    <div>
      <Head>
        <h1>All Applications</h1>
        <p>This is a page that displays all applications.</p>
      </Head>
      <AllApplication applications={applications} />
    </div>
  );
};
export async function getStaticProps() {
  const endpoint = process.env.GRAPHQL_ENDPOINT;
  const query = GET_APPLICATIONS;
  try {
    const res = await request(endpoint, query);
    const applications = res.applications.data;
    return {
      props: {
        applications,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        applications: [],
      },
    };
  }
}
export default ApplicationsPage;
