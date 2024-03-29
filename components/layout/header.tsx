export default function Header({ children }) {
  return (
    <h1 className="m-auto my-16 text-center text-3xl uppercase font-black">
      {children}
    </h1>
  );
}
