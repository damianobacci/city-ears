export default function Header(props) {
  return (
    <h1 className="mt-20 mb-20 text-center text-3xl uppercase font-black">
      {props.children}
    </h1>
  );
}
