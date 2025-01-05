import React, { useState, useRef } from "react";
import img from "../img/photo_2024-04-15_13-32-19.jpg";
import { Link } from "react-router-dom";
import img_misha_all from "../img/misha_all.png";
import img_rai_all from "../img/rai_all.png";

function Home() {
  const scrollContainerRef = useRef(null);
  const scrollLeft = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
          left: -window.innerWidth, // Прокрутка на 200px влево
          behavior: "smooth", // Плавная прокрутка
        });
      }
    };
  
    const scrollRight = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
          left: window.innerWidth, // Прокрутка на 200px вправо
          behavior: "smooth", // Плавная прокрутка
        });
      }
    };

const [formData, setFormData] = useState({
  name: "",
  contact: "",
  characterType: "half-body",
  background: "no",
  characters: 1,
});

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

const handleSubmit = (event) => {
  event.preventDefault();

  // Валидация имени
  if (formData.name.length < 3) {
    alert("Имя должно содержать минимум 3 символа.");
    return;
  }

  // Валидация контакта
  const contactRegex = /^(https?:\/\/.+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  if (!contactRegex.test(formData.contact)) {
    alert("Введите валидный email или ссылку.");
    return;
  }

  // Валидация количества персонажей
  if (formData.characters < 1 || formData.characters > 10) {
    alert("Количество персонажей должно быть от 1 до 10.");
    return;
  }

  alert(`Данные приняты, ${formData.name}!
Контакт: ${formData.contact}
Тип персонажа: ${formData.characterType}
Проработанный фон: ${formData.background}
Кол-во персонажей: ${formData.characters}`);
};

  return (
      <div className="container">
        <div className="fishtank">
          <img className="fishray" src={img}></img>
          <div><Link className="comicstart" to="/Comic">Начать путешествие</Link></div>
        </div>

        <div className="inner_container">
          <button className="scroll-button scroll-left" onClick={scrollLeft}>(</button>
          <div className="horizontal-scroll-container" ref={scrollContainerRef}>
            <div className="horizontal-scroll">
              <div className="scroll-item2">
                <img className="scroll-image" src={img_rai_all}></img>
                <div className="raitext">Рэй</div>
                
              </div>
              <div className="scroll-item2">
                <img className="scroll-image2" src={img_misha_all}></img>
                <div className="mishatext">Мишель</div>
              </div>
            </div>
          </div>
          <button className="scroll-button scroll-right" onClick={scrollRight}>)</button>
        </div>

        <div className="form_body">
          <div className="formbox">
            <h2 className="title">Форма заказа</h2>
            <form onSubmit={handleSubmit} className="form">
            <div className="formGroup">
              <label className="label" htmlFor="name">Ваше имя</label>
              <input
                className="input"
                type="text"
                id="name"
                name="name"
                placeholder="Введите ваше имя"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="formGroup">
            <label className="label" htmlFor="contact">Как с вами связаться</label>
                <input
                  className="input"
                  type="text"
                  id="contact"
                  name="contact"
                  placeholder="Ссылка на соцсеть или почта"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="formGroup">
                <label className="label" htmlFor="characterType">Тип персонажа</label>
                <select
                  className="select"
                  id="characterType"
                  name="characterType"
                  value={formData.characterType}
                  onChange={handleChange}
                  required
                >
                  <option value="half-body">По пояс</option>
                  <option value="portrait">Портрет</option>
                  <option value="full-body">Во весь рост</option>
                </select>
              </div>

              <div className="formGroup">
                <label className="label">Проработанный фон</label>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="background"
                      value="yes"
                      checked={formData.background === "yes"}
                      onChange={handleChange}
                    />{" "}
                    Да
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="background"
                      value="no"
                      checked={formData.background === "no"}
                      onChange={handleChange}
                    />{" "}
                    Нет
                  </label>
                </div>
              </div>

              <div className="formGroup">
                <label className="label" htmlFor="characters">Количество персонажей</label>
                <input
                  className="input"
                  type="number"
                  id="characters"
                  name="characters"
                  placeholder="Введите число"
                  min="1"
                  value={formData.characters}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formGroup">
                <button className="button" type="submit">Отправить</button>
              </div>
            </form>
          </div>
          </div>
        </div>
    );
}

export default Home;