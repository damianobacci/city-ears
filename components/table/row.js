import Link from "next/link";
import Image from "next/image";

export default function Row(props) {
  return (
    <tr className="text-center">
      <td className="px-2 py-4">{props.date}</td>
      <td className="px-2 py-4">{props.artist}</td>
      <td className="px-2 py-4">{props.venue}</td>
      <td className="px-2 py-4">{props.price}€</td>
      <td className="px-2 py-4">
        {props.tickets && (
          <Link href={props.tickets}>
            <Image src="/tickets.png" alt="Tickets" width={16} height={16} />
          </Link>
        )}
        {props.instagram && (
          <Link href={props.instagram}>
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={16}
              height={16}
            />
          </Link>
        )}
      </td>
    </tr>
  );
}
