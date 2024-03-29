import Header from "@/components/layout/header";
import Table from "@/components/table/table";
import Row from "@/components/table/row";

import { useEffect, useState } from "react";

export default function Milan() {
  const [gigs, setGigs] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch("api/gigs")
      .then((response) => response.json())
      .then((data) => {
        const milanGigs = data.data.filter(
          (item) => item.city.toLowerCase() === "milan"
        );
        setGigs(milanGigs);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <>
        <Header>List of gigs in Milan</Header>
        <div>Loading.....</div>
      </>
    );
  }

  return (
    <>
      <Header>List of gigs in Milan</Header>
      <Table>
        {gigs.map((item) => (
          <Row key={item._id} {...item} />
        ))}
      </Table>
    </>
  );
}
