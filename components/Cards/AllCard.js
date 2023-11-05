import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import styles from "./AllCard.module.css";
import Link from "next/link";

const AllCard = ({ cards, setCards }) => {
  const [pageIndex, setPageIndex] = useState(1);
  const [pageCount, setPageCount] = useState(); // Initialize with 1 page by default
  const pageSize = 5; // Number of items to display per page
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error

  // const handleDisable = async (cardId) => {
  //   try {
  //     // Send a request to your backend API to update the card status to "Disable"
  //     const response = await fetch(
  //       `${"https://smart-parking-server-dev.azurewebsites.net"}/api/cards/${cardId}`,
  //       {
  //         method: "PUT", // or "PATCH" depending on your API
  //         headers: {
  //           "Content-Type": "card/json",
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
  //     // Update the card's status in the frontend
  //     setCards((prevApplications) => {
  //       return prevApplications.map((app) => {
  //         if (app.id === cardId) {
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
  //     console.error("Error disabling card:", error);
  //   }
  // };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://smart-parking-server-dev.azurewebsites.net/api/cards?_page=${pageIndex}&_limit=${pageSize}`
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

  const currentPage = cards.slice(startIndex, endIndex);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <th>ID</th>
            <th>Current Status</th>
          </tr>
        </thead>
        <tbody>
          {currentPage
            .filter((card) => card.attributes.CurrentStatus !== "Disable")
            .map((card) => (
              <tr key={card.id}>
                <td>
                  <Link href={`/Cards/${card.id}`}>{card.id}</Link>
                </td>
                <td>{card.attributes.CurrentStatus}</td>
                <td>
                  <Link href={`/Cards/${card.id}`}>View Details</Link>
                </td>
                <td>
                  {/* <button onClick={() => handleDisable(card.id)}>
                    Disable
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
export default AllCard;
