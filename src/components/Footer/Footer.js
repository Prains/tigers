import "./Footer.scss";
import headphones from "../../images/footer-image.svg";
import wa from "../../images/whatsapp.svg";
import yt from "../../images/youtube.svg";
import tg from "../../images/telegram.svg";
import ig from "../../images/instagramm.svg";
import logo from "../../images/logo-footer.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={headphones} alt="" className="footer__headphones" />
      <div className="footer__content">
        <div className="footer__columnfirst">
          <p>Связь с нами</p>
          <div className="footer__socials">
            <img src={tg} alt="" />
            <img src={wa} alt="" />
          </div>
        </div>
        <div className="footer__columnsecond">
          <p>Подпишись на нас</p>
          <div className="footer__socials">
            <img src={ig} alt="" />
            <img src={yt} alt="" />
          </div>
        </div>
      </div>
      <img src={logo} alt="" />
    </footer>
  );
};

export default Footer;
