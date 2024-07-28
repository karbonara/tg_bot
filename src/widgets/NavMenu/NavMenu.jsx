import { Link } from "react-router-dom";
import "./NavMenu.css";
export const NavMenu = () => {
  return (
    <nav>
      <ul className="nav__menu">
        <li>
          <Link to="/payment">
            <img
              src="https://forcedrop.win/public/img/icon_contract.svg?v=7"
              alt=""
              width={18}
            />
            Кейсы
          </Link>
        </li>
        <li>
          <a href="/about">
            <img
              src="https://forcedrop.win/public/img/icon_contract.svg?v=7"
              alt=""
              width={18}
            />
            Кейсы
          </a>
        </li>
        <li>
          <a href="/services">
            <img
              src="https://forcedrop.win/public/img/icon_contract.svg?v=7"
              alt=""
              width={18}
            />
            Кейсы
          </a>
        </li>
        <li>
          <a href="/contact">
            <img
              src="https://forcedrop.win/public/img/icon_contract.svg?v=7"
              alt=""
              width={18}
            />
            Кейсы
          </a>
        </li>
      </ul>
    </nav>
  );
};
