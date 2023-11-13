import Image from "next/image";

export default function Milan() {
  return (
    <>
      <h1 className="mt-20 mb-20 text-center text-3xl uppercase font-black">
        List of gigs in Milan
      </h1>
      <table className="table-fixed m-auto mb-10 text-xl border-separate">
        <thead className="uppercase">
          <tr className="p-4">
            <th className="p-4">Date</th>
            <th>Artist</th>
            <th>Venue</th>
            <th>Price</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody className="">
          <tr>
            <td className="px-4 py-4">March, 22nd</td>
            <td className="px-4 py-4">A Silver Mount Zion</td>
            <td className="px-4 py-4">Magazzini Generali</td>
            <td className="px-4 py-4">23€</td>
            <td className="px-4 py-4">
              <Image
                className="inline mx-2"
                src="/tickets.png"
                alt="Tickets"
                width={16}
                height={16}
              />
              <Image
                className="inline"
                src="/instagram.png"
                alt="Instagram"
                width={16}
                height={16}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
