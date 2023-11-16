export default function Row(props) {
  return (
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
  );
}
