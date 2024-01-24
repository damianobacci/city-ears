import Header from "@/components/layout/header";
import Table from "@/components/table/table";
import Row from "@/components/table/row";

import { useEffect, useState } from "react";

export default function Rome() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("api/gigs")
      .then((response) => response.json())
      .then((gigs) => {
        const romeGigs = gigs.data.filter(
          (item) => item.city.toLowerCase() === "rome"
        );
        setComments(romeGigs);
      });
  }, []);

  return (
    <>
      <Header>List of gigs in Rome</Header>
      <Table>
        {comments.map((item) => (
          <Row key={item._id} {...item} />
        ))}
      </Table>
    </>
  );
}
