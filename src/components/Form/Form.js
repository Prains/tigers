import "./Form.scss";

const Form = () => {
  return (
    <section className="form">
      <div className="form__content">
        <div className="form__textcolumn">
          <h2 className="form__title">Оставить свой запрос</h2>
          <p className="form__subtitle">Как мы можем вам помочь?</p>
        </div>
        <form className="form__form">
          <input type="email" placeholder="Ваш e-mail" />
          <input type="phone" placeholder="Ваш телефон" />
          <input type="name" placeholder="Ваше имя" />
          <textarea />
          <div>
            <input type="checkbox" />
            <p>
              Нажимая “Отправить” Вы даете свое согласие на
              <span>обработку персональных данных</span>
            </p>
          </div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
