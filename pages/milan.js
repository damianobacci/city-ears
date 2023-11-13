export default function Milan() {
  return (
    <>
      <h1 className="mt-20 mb-20 text-center text-3xl uppercase font-black">
        List of gigs in Milan
      </h1>
      <table className="table-auto text-center m-auto mb-10">
        <thead className="uppercase">
          <tr className="p-4">
            <th className="p-4">Date</th>
            <th>Artist</th>
            <th>Venue</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody className="">
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>Witchy Woman</td>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Shining Star</td>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
