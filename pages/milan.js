import Image from "next/image";
import Header from "@/components/table/header";

export default function Milan() {
  return (
    <>
      <h1 className="mt-20 mb-20 text-center text-3xl uppercase font-black">
        List of gigs in Milan
      </h1>
      <table className="table-fixed m-auto mb-10 text-xl border-separate">
        <Header />
        <tbody className=""></tbody>
      </table>
    </>
  );
}
