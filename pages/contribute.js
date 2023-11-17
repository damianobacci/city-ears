import Header from "@/components/layout/header";

export default function Contribute() {
  return (
    <>
      <Header>Want to contribute?</Header>
      <p className="m-auto text-center">
        Please fill out this form to request a login.
      </p>
      <form action="" className="text-center border-4">
        <label htmlFor="">Name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="text" />
        <button type="submit"></button>
      </form>
    </>
  );
}
