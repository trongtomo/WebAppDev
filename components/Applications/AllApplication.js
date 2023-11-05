import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import styles from "./AllApplication.module.css";
import Link from "next/link";

const AllApplication = ({ applications, setApplications }) => {
  const [pageIndex, setPageIndex] = useState(1);
  const [pageCount, setPageCount] = useState(); // Initialize with 1 page by default
  const pageSize = 5; // Number of items to display per page
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error

  // const handleDelete = async (applicationId) => {
  //   try {
  //     // Send a request to your backend API to update the application status to "Disable"
  //     const response = await fetch(
  //       `${"https://smart-parking-server-dev.azurewebsites.net"}/api/applications/${applicationId}`,
  //       {
  //         method: "PUT", // or "PATCH" depending on your API
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           data: {
  //             attributes: {
  //               Status: "Disable", // Set the new status here
  //             },
  //           },
  //         }),
  //       }
  //     );
  //     // Update the application's status in the frontend
  //     setApplications((prevApplications) => {
  //       return prevApplications.map((app) => {
  //         if (app.id === applicationId) {
  //           return {
  //             ...app,
  //             attributes: {
  //               ...app.attributes,
  //               Status: "Disable",
  //             },
  //           };
  //         }
  //         return app;
  //       });
  //     });
  //   } catch (error) {
  //     console.error("Error disabling application:", error);
  //   }
  // };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://smart-parking-server-dev.azurewebsites.net/api/applications?_page=${pageIndex}&_limit=${pageSize}`
        );
        const {
          meta: { pagination },
        } = res.data;
        // Calculate the page count based on the total data count
        setPageCount(Math.ceil(pagination.total / pageSize));
        setLoading(false); // Set loading to false after data is fetched successfully
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, [pageIndex]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const startIndex = (pageIndex - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const currentPage = applications.slice(startIndex, endIndex);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Bike</th>
            <th>Card</th>
          </tr>
        </thead>
        <tbody>
          {currentPage
            .filter(
              (application) => application.attributes.Status !== "Disable"
            )
            .map((application) => (
              <tr key={application.id}>
                <td>
                  <Link href={`/Applications/${application.id}`}>
                    {application.id}
                  </Link>
                </td>
                <td>{application.attributes.Status}</td>
                <td>
                  {
                    application.attributes.bike.data.attributes
                      .RegistrationNumber
                  }
                </td>
                <td>
                  {application?.attributes?.card?.data?.attributes?.ownerships?.data
                    ?.map(
                      (ownership) =>
                        ownership?.attributes?.family?.data?.attributes
                          ?.FamilyName
                    )
                    .join(", ")}
                </td>
                <td>
                  <Link href={`/Applications/${application.id}`}>Edit</Link>
                </td>
                <td>
                  {/* <button onClick={() => handleDelete(application.id)}>
                    Delete
                  </button> */}
                  <button>Disable</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div>
        <button
          disabled={pageIndex === 1}
          onClick={() => setPageIndex(pageIndex - 1)}
        >
          {""}
          Previous
        </button>
        <button
          disabled={pageIndex === pageCount}
          onClick={() => setPageIndex(pageIndex + 1)}
        >
          {""}
          Next
        </button>
        <span>{`${pageIndex} of ${pageCount}`}</span>
      </div>
    </div>
  );
};
export default AllApplication;
