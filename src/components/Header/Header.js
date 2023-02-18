import "./Header.scss";
import logo from "../../images/logo-white.svg";
import Link from "../Link/Link";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <img src={logo} alt="logo" />
        <div className="header__buttons">
          <Link>Недвижимость</Link>
          <Link>Контакты</Link>
          <Link>Избранное</Link>
          <Link>О компании</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
