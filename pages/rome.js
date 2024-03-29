import Header from "@/components/layout/header";
import Table from "@/components/table/table";
import Row from "@/components/table/row";
import Loading from "@/components/layout/loading";

import { useEffect, useState } from "react";

export default function Rome() {
  const [gigs, setGigs] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch("api/gigs")
      .then((response) => response.json())
      .then((gigs) => {
        const romeGigs = gigs.data.filter(
          (item) => item.city.toLowerCase() === "rome"
        );
        setGigs(romeGigs);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <>
        <Header>List of gigs in Rome</Header>
        <Loading />
      </>
    );
  }

  return (
    <>
      <Header>List of gigs in Rome</Header>
      <Table>
        {gigs.map((item) => (
          <Row key={item._id} {...item} />
        ))}
      </Table>
    </>
  );
}
