export default function Header(props) {
  return (
    <h1 className="m-auto my-16 text-center text-3xl uppercase font-black">
      {props.children}
    </h1>
  );
}
