import Header from "@/components/layout/header";
import Table from "@/components/table/table";
import Row from "@/components/table/row";
import Loading from "@/components/layout/loading";

import { useEffect, useState } from "react";

export default function Turin() {
  const [gigs, setGigs] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch("api/gigs")
      .then((response) => response.json())
      .then((gigs) => {
        const turinGigs = gigs.data.filter(
          (item) => item.city.toLowerCase() === "turin"
        );
        setGigs(turinGigs);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <>
        <Header>List of gigs in Turin</Header>
        <Loading />
      </>
    );
  }

  return (
    <>
      <Header>List of gigs in Turin</Header>
      <Table>
        {gigs.map((item) => (
          <Row key={item._id} {...item} />
        ))}
      </Table>
    </>
  );
}
