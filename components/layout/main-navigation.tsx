import Link from "next/link";
import City from "./city";

export default function MainNavigation({ children }) {
  return (
    <>
      <ul className="flex justify-center m-6 flex-wrap">
        <Link className="m-2 mx-16" href="/milan">
          <City src="/milan.png" alt={"Milan"} />
        </Link>
        <Link className="m-2 mx-16" href="/turin">
          <City src="/turin.png" alt={"Turin"} />
        </Link>
        <Link className="m-2 mx-16" href="/rome">
          <City src="/rome.png" alt={"Rome"} />
        </Link>
      </ul>
      {children}
      <Link className="flex justify-center" href="/contribute">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full uppercase">
          Want to contribute?
        </button>
      </Link>
    </>
  );
}
