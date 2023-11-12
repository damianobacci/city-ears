import Link from "next/link";

export default function MainNavigation() {
  return (
    <ul>
      <Link href="/">Home</Link>
      <Link href="/milan">Milan</Link>
      <Link href="/rome">Rome</Link>
    </ul>
  );
}
