import {MdEmail} from "react-icons/md"
import {Link} from "react-router-dom";
import {BiPhoneCall,BiVolumeMute} from "react-icons/bi"


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <ul className="footer__list">
                        <li className="footer__list-item"><Link to={"/"} className="footer__link white">О нас</Link></li>
                        <li className="footer__list-item"><Link to={"/"} className="footer__link">О компании</Link></li>
                        <li className="footer__list-item"><Link to={"/"} className="footer__link">Вакансии</Link></li>
                        <li className="footer__list-item"><Link to={"/"} className="footer__link">Программа бета-тестирования</Link></li>
                        <li className="footer__list-item"><Link to={"/"} className="footer__link">Информация для партнеров</Link></li>
                        <li className="footer__list-item"><Link to={"/"} className="footer__link">Размещение рекламы</Link></li>
                        <li className="footer__list-item"><Link to={"/"} className="footer__link">Пользовательское соглошение</Link></li>
                        <li className="footer__list-item"><Link to={"/"} className="footer__link">Политика конфидециальности</Link></li>
                        <li className="footer__list-item"><Link to={"/"} className="footer__link">Комплаенс</Link></li>
                    </ul>
                    <ul className="footer__list">
                        <li className="footer__list-item"><Link to={"/"} className="footer__link white">Разделы</Link></li>
                        <li className="footer__list-item"><Link to={"/"} className="footer__link">Мой Иви</Link></li>
                        <li className="footer__list-item"><Link to={"/"} className="footer__link">Фильмы</Link></li>
                        <li className="footer__list-item"><Link to={"/"} className="footer__link">Сериалы</Link></li>
                        <li className="footer__list-item"><Link to={"/"} className="footer__link">Мультфильмы</Link></li>
                        <li className="footer__list-item"><Link to={"/"} className="footer__link">ТВ-каналы</Link></li>
                        <li className="footer__list-item"><Link to={"/"} className="footer__link">Что посмотреть</Link></li>
                        <li className="footer__list-item"><Link to={"/"} className="footer__link">Активация сертификатов</Link></li>
                    </ul>
                    <ul className="footer__list">
                        <li className="footer__list-item"><Link to={"/"} className="footer__link white">Служба поддержки</Link></li>
                        <li className="footer__list-item"><Link to={"/"} className="footer__link">Мы всегда готовы вам помочь. <br/>Наши операторы онлайн 24/7</Link></li>
                        <button className="footer__btn">Написать в чат</button>
                        <div className="footer__block-btns">
                            <button className="footer__btns"><MdEmail/> </button>
                            <button className="footer__btns"><BiPhoneCall/></button>
                        </div>
                        <li >ask.ivi.ru <br/><span className="footer__link">Ответы на вопросы</span></li>

                    </ul>
                    <div className="footer__list footer__end">
                        <div className="footer__con-icon">
                            <Link to={"/"}>
                                <BiVolumeMute className="footer__icon"/>
                            </Link>
                        </div>
                        <p className="footer__link">
                            Смотрите фильмы, сериалы и <br/> мультфильмы без рекламы
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;