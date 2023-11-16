import Link from "next/link";

export default function Row(props) {
  return (
    <tr>
      <td className="px-4 py-4">{props.date}</td>
      <td className="px-4 py-4">{props.artist}</td>
      <td className="px-4 py-4">{props.venue}</td>
      <td className="px-4 py-4">{props.price}€</td>
      <td className="px-4 py-4">
        <Link href={props.tickets}>
          <Image
            className="inline mx-2"
            src="/tickets.png"
            alt="Tickets"
            width={16}
            height={16}
          />
        </Link>
        {/* <Image
          className="inline"
          src="/instagram.png"
          alt="Instagram"
          width={16}
          height={16}
        /> */}
      </td>
    </tr>
  );
}
