import React, { useState } from "react";
import { Link } from "react-router-dom";
// Импорт изображений страниц комикса
import page1 from "../img/comic/1.jpg";
import page2 from "../img/comic/2.jpg";
import page3 from "../img/comic/3.jpg";
import page4 from "../img/comic/4.jpg";
import page5 from "../img/comic/5.jpg";
import page6 from "../img/comic/6.jpg";
import page7 from "../img/comic/7.jpg";
import page8 from "../img/comic/8.jpg";
import page9 from "../img/comic/9.jpg";
import page10 from "../img/comic/10.jpg";
import page11 from "../img/comic/11.jpg";
import page12 from "../img/comic/12.jpg";
import page13 from "../img/comic/13.jpg";
import page14 from "../img/comic/14.jpg";
import page15 from "../img/comic/15.jpg";
import page16 from "../img/comic/16.jpg";
import page17 from "../img/comic/17.jpg";
import page18 from "../img/comic/18.jpg";
import page19 from "../img/comic/19.jpg";
import page20 from "../img/comic/20.jpg";
import coverart from "../img/photo_2023-10-12_02-33-44.jpg";
import vk from "../img/vk.png";
import tg from "../img/tg.png";


const Comic = () => {
  // Список страниц
  const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18, page19, page20];
  
  // Текущее состояние (страница)
  const [currentPage, setCurrentPage] = useState(0);

  // Функции листания
  const goToNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container">
        <div className="comic_navigation"><Link to="/"><img className="coverart_config" src={coverart}  alt="Технические шоколадки!!! Жалуйтесь в гослото"></img></Link></div>
      <div className="comicpage">
        <img className="comicpages" src={pages[currentPage]} alt="Технические шоколадки!!!" />
        <div className="controls">
            <button className="scroll-button scroll-left" onClick={goToPreviousPage} disabled={currentPage === 0}>
            (
            </button>
            <div className="pageIndicator"> Страница {currentPage + 1} из {pages.length} </div>
            <button className="scroll-button scroll-right" onClick={goToNextPage} disabled={currentPage === pages.length - 1}>
            )
            </button>
        </div>
      </div>
      <div className="comic_navigation"><a href="https://vk.com/akinikaw" target="_blank"><img className="contacts" src={vk}  alt="Технические шоколадки!!! Жалуйтесь в гослото"></img></a><a href="https://t.me/akinikaw" target="_blank"><img className="contacts" src={tg}  alt="Технические шоколадки!!! Жалуйтесь в гослото"></img></a><Link className="pageIndicator" to={"/Survey"}>Пройдите опрос обратной связи</Link></div>


    </div>
  );
};

export default Comic;