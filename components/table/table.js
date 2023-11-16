import TableHeader from "./table-header";

export default function Table(props) {
  return (
    <table className="table-auto m-auto mb-10 text-base md:text-xl border-separate">
      <TableHeader />
      <tbody>{props.children}</tbody>
    </table>
  );
}
