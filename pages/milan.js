import Header from "@/components/layout/header";
import Table from "@/components/table/table";
import Row from "@/components/table/row";
import Loading from "@/components/layout/loading";

import { useEffect, useState } from "react";

export default function Milan() {
  const [gigs, setGigs] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    try {
      fetch("api/gigs")
        .then((response) => response.json())
        .then((data) => {
          const milanGigs = data.data.filter(
            (item) => item.city.toLowerCase() === "milan"
          );
          setGigs(milanGigs);
          setIsLoading(false);
        });
    } catch (error) {
      throw new Error("Could not fetch the gigs!");
    }
  }, []);

  if (isLoading) {
    return (
      <>
        <Header>List of gigs in Milan</Header>
        <Loading />
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
