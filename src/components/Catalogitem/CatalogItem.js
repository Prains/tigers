import "./CatalogItem.scss";
import heart from "../../images/heart.svg";
import leftarrow from "../../images/arrow-left.svg";
import rightarrow from "../../images/arrow-right.svg";
import sliderMain from "../../images/slider-main.jpg";
import slider2 from "../../images/slider2.png";
import slider3 from "../../images/slider3.png";
import slider4 from "../../images/slider4.png";
import slider5 from "../../images/slider5.png";
import advantage from "../../images/advantage.svg";

const CatalogItem = () => {
  return (
    <div className="catalog-item">
      <div className="firstpart">
        <div className="firstpart__slider">
          <div className="firstpart__sliderimg">
            <img src={leftarrow} alt="" className="slider-arrow" />
            <img src={sliderMain} alt="" />
            <img src={rightarrow} alt="" className="slider-arrow" />
          </div>
          <div className="firstpart__bottomslides">
            <img src={slider2} alt="" className="bottomslide" />
            <img src={slider3} alt="" className="bottomslide" />
            <img src={slider4} alt="" className="bottomslide" />
            <img src={slider5} alt="" className="bottomslide" />
          </div>
        </div>
        <div className="firstpart__minorbuttons">
          <div className="minorbuttons__id">ID 129</div>
          <div className="minorbuttons__map">Карта</div>
          <img src={heart} alt="сердце" />
        </div>
      </div>
      <div className="secondpart">
        <div className="secondpart__uppercontent">
          <h2 className="uppercontent__title">
            Квартиры в новом проекте в Алтынташ с инфраструктурой 5* отеля
          </h2>
          <div className="uppercontent__bottomcontent">
            <p className="bottomcontent__button">от ??? ??? $</p>
            <p className="bottomcontent__description">
              Lorem ipsum dolor sit amet consectetur. Placerat non pharetra et
              erat suspendisse semper lectus. Ut velit tortor adipiscing at.
              Netus ut consectetur malesuada dui eget neque viverra enim.
            </p>
          </div>
        </div>
        <div className="secondpart__bottomcontent">
          <div className="secondpart__leftcontent">
            <p className="secondpart__description">
              <span>Комнат</span>1+1, 2+1
            </p>
            <p className="secondpart__description">
              <span>Площадь</span>72-95 кв.м
            </p>
            <p className="secondpart__description">
              <span>Район</span>Алтынташ
            </p>
          </div>
          <div className="secondpart__rightcontent">
            <div>
              <p className="secondpart__advantage">
                <img src={advantage} alt="" /> 7/24 охрана
              </p>
              <p className="secondpart__advantage">
                <img src={advantage} alt="" /> Аквапарк
              </p>
              <p className="secondpart__advantage">
                <img src={advantage} alt="" /> Детская игровая площадка
              </p>
            </div>
            <div>
              <p className="secondpart__advantage">
                <img src={advantage} alt="" /> <span>Бассейн 500 m<sup>2</sup></span>
              </p>
              <p className="secondpart__advantage">
                <img src={advantage} alt="" /> Волейбольная, баскетбольная
                площадка
              </p>
              <p className="secondpart__advantage">
                <img src={advantage} alt="" />
                Фитнес центр, раздевалки, душ и туалет
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
