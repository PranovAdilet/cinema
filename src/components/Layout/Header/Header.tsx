import {Link, NavLink, useNavigate, useLocation} from "react-router-dom";
import {BsFillCameraReelsFill} from 'react-icons/bs'
import { useSelector} from "react-redux";
import {changeSearch} from '../../../redux/store/reducers/cinema'
import {changeSeriesSearch} from '../../../redux/store/reducers/series'
import {selectUser} from '../../../redux/reduxSelectors/reduxSelectors'
import {ChangeEvent, useEffect} from "react";
import {getAllUsers, logOutAccount} from "../../../redux/store/reducers/users";
import {changeCartoonsSearch} from "../../../redux/store/reducers/cartoons";
import { DebouncedFunc } from 'lodash';
import _ from 'lodash';
import {useAppDispatch} from "../../../redux/hooks/reduxHooks";
import {BsBookmark} from "react-icons/bs";

const Header = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const {user, users} = useSelector(selectUser)

    useEffect(() => {
       dispatch(getAllUsers())
    }, [])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (location.pathname === "/films"){
            dispatch(changeSearch(e.target.value))
        }
        if (location.pathname === "/series"){
            dispatch(changeSeriesSearch(e.target.value))
        }

        if (location.pathname === "/cartoons"){
            dispatch(changeCartoonsSearch(e.target.value))
        }
    }
    const debounceSearch: DebouncedFunc<typeof handleChange> = _.debounce(handleChange, 500)



    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <Link to={'/'}>
                        <h1 className="header__logo">
                            <BsFillCameraReelsFill/>
                            I-R Cinema
                        </h1>
                    </Link>
                    <ul className="header__menu ">

                        <li className="header__item header__item_films">
                            <NavLink className="header__link " to={'/films'}>
                                Фильмы
                            </NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink className="header__link" to={'/series'}>
                                Сериалы
                            </NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink className="header__link" to={'/cartoons'}>
                                Мультфильмы
                            </NavLink>
                        </li>
                    </ul>

                    <div className="header__right">
                        <input className="header__search" type="search" placeholder='Поиск' onChange={debounceSearch}/>
                        <Link to={'/admin-panel'}>
                            Админ панель
                        </Link>
                                <div className="header__auth">
                                    {
                                        user.email ? <img className="header__avatar" src={user.avatar} alt=""/> :
                                            <div onClick={() => navigate("/login")} className="header__noUser">
                                                <img className="header__noUser-img" src="https://abrakadabra.fun/uploads/posts/2021-12/thumbs/1640528700_45-abrakadabra-fun-p-serii-chelovek-na-avu-52.jpg" alt=""/>
                                                <p className="header__noUser-text"> Войти</p>
                                            </div>
                                    }
                                    <div className="header__profile">
                                        <div className="header__profile-left">
                                            <Link to="/favorites" className="header__profile-block">
                                                <span className="header__profile-icon"><BsBookmark/></span>
                                                <p className="header__profile-link">Смотреть позже</p>
                                            </Link>
                                            <Link to="/favorites" className="header__profile-block">
                                                <span className="header__profile-icon"><BsBookmark/></span>
                                                <p className="header__profile-link">Смотреть позже</p>
                                            </Link>
                                            <Link to="/favorites" className="header__profile-block">
                                                <span className="header__profile-icon"><BsBookmark/></span>
                                                <p className="header__profile-link">Смотреть позже</p>
                                            </Link>
                                            <Link to="/favorites" className="header__profile-block">
                                                <span className="header__profile-icon"><BsBookmark/></span>
                                                <p className="header__profile-link">Смотреть позже</p>
                                            </Link>
                                            <Link to="/favorites" className="header__profile-block">
                                                <span className="header__profile-icon"><BsBookmark/></span>
                                                <p className="header__profile-link">Смотреть позже</p>
                                            </Link>


                                        </div>
                                        <div className="header__profile-right">
                                        {
                                            user.email ?
                                                <>
                                                    <h4 className="header__profile-right-title">Выбор профиля</h4>
                                                    <div className="header__profile-right-emails">
                                                        <div className="header__profile-right-email">
                                                            <img className="header__avatar" src={user.avatar} alt=""/>
                                                            <p className="header__profile-login">{user.login.length > 4 ? user.login.slice(0,5) + "..." : user.login}</p>
                                                        </div>
                                                        <div className="header__profile-right-email">
                                                            <img className="header__avatar" src={user.avatar} alt=""/>
                                                            <p className="header__profile-login">{user.login.length > 4 ? user.login.slice(0,5) + "..." : user.login}</p>
                                                        </div>
                                                        <div className="header__profile-right-email">
                                                            <p className="header__profile-new">+</p>
                                                            <p className="header__profile-login">Новый</p>
                                                        </div>
                                                    </div>
                                                    {
                                                        user.email ? <div className="header__profile-right-info">
                                                            <p className="header__profile-right-text">Редактировать профиль</p>
                                                            <p className="header__profile-right-text">Настройки</p>
                                                            <p className="header__profile-right-text">Помощь</p>
                                                            <p className="header__profile-right-text"
                                                               onClick={() => {
                                                                   dispatch(logOutAccount())
                                                                   localStorage.removeItem('user')
                                                                   navigate('/')
                                                               }}>Выйти</p>
                                                        </div> : <h3>Войдите или зарегистрируйтесь</h3>
                                                    }
                                                </>
                                                :  <div className="header__auth">

                                               <div className="header__auth-block">
                                                   <button onClick={() => navigate("/login")} className="header__auth-btn">Войдите</button>
                                                   <p >или</p>
                                                   <button onClick={() => navigate("/registration")} className="header__auth-btn">Зарегистрируйтесь</button>
                                               </div>
                                            </div>
                                        }
                                        </div>


                                    </div>
                                </div>

                    </div>
                </nav>
            </div>
            <div className="header__line"/>
        </header>
    );
};

export default Header;