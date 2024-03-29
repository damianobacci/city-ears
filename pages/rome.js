import Header from "@/components/layout/header";
import Table from "@/components/table/table";
import Row from "@/components/table/row";
import Loading from "@/components/layout/loading";
import useFetchGigsByCity from "@/hooks/UseFetchGigsByCity";

export default function Rome() {
  const { isLoading, gigs, error } = useFetchGigsByCity("rome");

  if (isLoading) {
    return (
      <>
        <Header>List of gigs in Rome</Header>
        <Loading />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header>List of gigs in Rome</Header>
        <p className="m-auto my-16 text-center ">Error: {error}</p>
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
