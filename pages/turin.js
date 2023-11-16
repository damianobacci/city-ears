import Header from "@/components/layout/header";
import Table from "@/components/table/table";
import Row from "@/components/table/row";

const DUMMY_DATA = [
  {
    id: 1,
    artist: "A Silver Mount Zion",
    date: "22nd March",
    venue: "Magazzini Generali",
    price: 23,
    tickets: "/milan",
  },
  {
    id: 1,
    artist: "A Silver Mount Zion",
    date: "22nd March",
    venue: "Magazzini Generali",
    price: 23,
    instagram: "/milan",
  },
  {
    id: 1,
    artist: "A Silver Mount Zion",
    date: "22nd March",
    venue: "Magazzini Generali",
    price: 23,
    facebook: "/milan",
  },
];

export default function Turin() {
  return (
    <>
      <Header>List of gigs in Turin</Header>
      <Table>
        {DUMMY_DATA.map((item) => (
          <Row key={item.id} {...item} />
        ))}
      </Table>
    </>
  );
}
