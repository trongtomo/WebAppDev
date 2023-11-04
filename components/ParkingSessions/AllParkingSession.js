import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import styles from "./AllParkingSession.module.css";
import Link from "next/link";

const AllParkingSession = ({ sessions, setSessions }) => {
  const [pageIndex, setPageIndex] = useState(1);
  const [pageCount, setPageCount] = useState();
  const pageSize = 5;
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `${process.env.SERVER_ENDPOINT}/api/parking-sessions?_page=${pageIndex}&_limit=${pageSize}`
        );
        const {
          meta: { pagination },
        } = res.data;
        setPageCount(Math.ceil(pagination.total / pageSize));
        setLoading(false); // Set loading to false after data is fetched successfully
      } catch (error) {
        console.error("Error fetching parking sessions:", error);
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

  const currentPage = sessions.slice(startIndex, endIndex);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <th>ID</th>
            <th>Current Status</th>
            <th>Checkin Face Image</th>
            <th>Checkin Plate Number Image</th>
            <th>Checkin Time</th>
            <th>Checkout Face Image</th>
            <th>Checkout Plate Number Image</th>
            <th>Checkout Time</th>
          </tr>
        </thead>
        <tbody>
          {currentPage
            .filter((session) => session.attributes.Status !== "Disable")
            .map((session) => (
              <tr key={session.id}>
                <td>
                  <Link href={`/ParkingSessions/${session.id}`}>
                    {session.id}
                  </Link>
                </td>
                <td>{session.attributes.Status}</td>
                <td>{session.attributes.CheckinFaceImage}</td>
                <td>{session.attributes.CheckinPlateNumberImage}</td>
                <td>{session.attributes.CheckinTime}</td>
                <td>{session.attributes.CheckoutFaceImage}</td>
                <td>{session.attributes.CheckoutPlateNumberImage}</td>
                <td>{session.attributes.CheckoutTime}</td>
                <td>
                  <Link href={`/ParkingSessions/${session.id}`}>
                    {" "}
                    View details{" "}
                  </Link>
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
          Previous
        </button>
        <button
          disabled={pageIndex === pageCount}
          onClick={() => setPageIndex(pageIndex + 1)}
        >
          Next
        </button>
        <span>{`${pageIndex} of ${pageCount}`}</span>
      </div>
    </div>
  );
};

export default AllParkingSession;
