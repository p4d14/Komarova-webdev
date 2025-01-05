import { Link } from "react-router-dom";
import { useState } from "react";
import coverart from "../img/photo_2023-10-12_02-33-44.jpg";

const Survey = () => {
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        rating: "5",
        feedback: "",
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

        // Валидация данных
        if (formData.name.length < 3) {
            alert("Имя должно содержать минимум 3 буквы.");
            return;
        }

        const contactRegex = /^(\S+@\S+\.\S+|https?:\/\/\S+)$/;
        if (!contactRegex.test(formData.contact)) {
            alert("Введите корректный контакт: email или ссылку.");
            return;
        }

        if (formData.feedback.length < 10) {
            alert("Комментарий должен содержать минимум 10 символов.");
            return;
        }

        alert(`Спасибо за ваш отзыв, ${formData.name}!
Контакт: ${formData.contact}
Оценка: ${formData.rating}
Комментарий: ${formData.feedback}`);
    };

    return (
        <div className="containersurvey">
            <div className="comic_navigation">
                <Link to="/">
                    <img className="coverart_config" src={coverart} alt="Обложка" />
                </Link>
            </div>
            <div className="form_body">
                <div className="formbox">
                    <h2 className="title">Опрос удовлетворённости</h2>
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
                            <label className="label" htmlFor="rating">Оценка комикса</label>
                            <select
                                className="select"
                                id="rating"
                                name="rating"
                                value={formData.rating}
                                onChange={handleChange}
                                required
                            >
                                <option value="5">5 - Отлично</option>
                                <option value="4">4 - Хорошо</option>
                                <option value="3">3 - Средне</option>
                                <option value="2">2 - Плохо</option>
                                <option value="1">1 - Очень плохо</option>
                            </select>
                        </div>
                        <div className="formGroup">
                            <label className="label" htmlFor="feedback">Ваши комментарии</label>
                            <br></br>
                            <textarea
                                className="textarea"
                                id="feedback"
                                name="feedback"
                                placeholder="Напишите, что вам понравилось или не понравилось"
                                value={formData.feedback}
                                onChange={handleChange}
                                required
                            ></textarea>
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

export default Survey;