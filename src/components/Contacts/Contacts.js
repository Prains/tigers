import "./Contacts.scss";
import background from "../../images/contacts-background.png";

const Contacts = () => {
  return (
    <section
      className="contacts"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="contacts__content">
        <h2 className="contacts__title">Получить детальную информацию</h2>
        <div className="contacts__buttons">
          <p className="contacts__button">WHATSAPP</p>
          <p className="contacts__button">TELEGRAM</p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
