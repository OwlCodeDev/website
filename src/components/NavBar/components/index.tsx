import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";

function NavBarDropDownComponent() {
  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <Bars3BottomLeftIcon width={24} />
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a>Homepage</a>
        </li>
        <li>
          <a>Portfolio</a>
        </li>
        <li>
          <a>About</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBarDropDownComponent;
