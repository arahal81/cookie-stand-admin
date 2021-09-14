import Link from "next/link";
export default function Header(props) {
  return (
    <header className="flex items-center justify-between p-4 font-medium bg-green-500">
      <h1 className="border-gray 50">{props.title}</h1>
      <button className="bg-white  px-5 py-2  rounded">
        <Link href="/Overview">Overview</Link>
      </button>
    </header>
  );
}
