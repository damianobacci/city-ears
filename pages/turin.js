import Header from "@/components/layout/header";
import Table from "@/components/table/table";
import Row from "@/components/table/row";

import { useEffect, useState } from "react";

export default function Turin() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch("api/gigs")
      .then((response) => response.json())
      .then((gigs) => {
        const turinGigs = gigs.data.filter(
          (item) => item.city.toLowerCase() === "turin"
        );
        setComments(turinGigs);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <>
        <Header>List of gigs in Milan</Header>
        <div>Loading...</div>
      </>
    );
  }

  return (
    <>
      <Header>List of gigs in Turin</Header>
      <Table>
        {comments.map((item) => (
          <Row key={item._id} {...item} />
        ))}
      </Table>
    </>
  );
}
