import mind from "../assets/socheat.jpg";
export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 font-QuickSand">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Skill</a>
              </li>
              <li>
                <a>Work</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center gap-10">
          <a className="text-md hidden xl:block">Home</a>
          <a className="text-md hidden xl:block">Skill</a>
          <a className="text-md hidden xl:block">Work</a>
          <a className="text-md hidden xl:block">About</a>
          <a className="text-md hidden xl:block">Contact</a>
        </div>
        <div className="navbar-end ">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={mind} />
              </div>
            </div>
            {/* <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
}
