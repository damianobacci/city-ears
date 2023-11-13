import Link from "next/link";

export default function MainNavigation(props) {
  return (
    <>
      <ul className="flex justify-center ">
        <Link className="m-4 " href="/">
          Home
        </Link>
        <Link className="m-4" href="/milan">
          Milan
        </Link>
        <Link className="m-4" href="/rome">
          Rome
        </Link>
      </ul>
      {props.children}
    </>
  );
}
