import "./Catalog.scss";
import CatalogItem from "../Catalogitem/CatalogItem";
import rightarrow from "../../images/arrow-right.svg";

const Catalog = () => {
  return (
    <section className="catalog">
      <CatalogItem />
      <CatalogItem />
      <CatalogItem />
      <CatalogItem />
      <CatalogItem />
      <CatalogItem />
      <div className="numberfields">
        <p className="numberfields__number numberfields__number-active">1</p>
        <p className="numberfields__number">2</p>
        <p className="numberfields__number">3</p>
        <p className="numberfields__number">4</p>
        <p className="numberfields__number">5</p>
        <p className="numberfields__number">
          <img src={rightarrow} alt="rightarrow" />
        </p>
      </div>
    </section>
  );
};

export default Catalog;
