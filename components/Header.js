
import Link from "next/link";
export default function Header(props) {
  return (
    <header className=" items-center  flex justify-between p-4 font-medium bg-green-500">
      <h1 className="ml-9 text-xl border-gray 50">{props.title}</h1>
      <div>
        {/*<button className="bg-white  px-5 py-2  rounded">
        <Link href="/Overview">Overview</Link>
      </button> */}
        <p className="inline p-2 m-1 rounded-md bg-green-100">
          {props.username}
        </p>
        <Link href="/">
          <a
            onClick={props.logoutHandler}
            className="inline p-2 m-1 rounded-md bg-green-700 text-white	"
          >
            Sign Out
          </a>
        </Link>

        <Link href="/overview">
          <a className="inline p-2 m-1 rounded-md bg-green-100">Overview</a>
        </Link>
      </div>

    </header>
  );
}
