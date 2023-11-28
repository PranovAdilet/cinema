import {Link, NavLink, useNavigate} from "react-router-dom";
import {BsFillCameraReelsFill} from 'react-icons/bs'
import { useSelector} from "react-redux";
import {selectUser} from '../../../redux/reduxSelectors/reduxSelectors'
import { useEffect, useState} from "react";
import {getAllUsers, logOutAccount} from "../../../redux/store/reducers/users";
import {useAppDispatch} from "../../../redux/hooks/reduxHooks";
import {BsBookmark} from "react-icons/bs";
import SearchContent from "../../Search__content";
import { IoIosSearch } from "react-icons/io";
import {IShippingFields} from "../../../interface/app.interface";

const Header = () => {
    const [activeUser, setActiveUser] = useState<IShippingFields | null>()
    const [searchState, setSearchState] = useState(false)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {user, activeUsers} = useSelector(selectUser)

    useEffect(() => {
        if (user.email){
            setActiveUser({...user, password: "", id: Math.floor(Math.random())})
        }else if (activeUsers.length) {
            setActiveUser(activeUsers[activeUsers.length - 1])
        }else {
            setActiveUser(null)
        }

       dispatch(getAllUsers())
    }, [])

    const signOutHandler = () => {
        dispatch(logOutAccount(user))
        const updatedActiveUser =
            activeUsers.length > 1 ? activeUsers[activeUsers.length - 1] : null;
        console.log(updatedActiveUser)
        setActiveUser(updatedActiveUser);
        navigate('/');
    }

    console.log(activeUsers)
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
                        <div onClick={() => setSearchState(true)} className="header__right-search">
                            <IoIosSearch className="header__right-search-icon"/>
                            <input placeholder="Поиск" className="header__search" type="search"/>
                        </div>
                        {
                            searchState && <SearchContent setSearchState={setSearchState}/>
                        }
                        <Link to={'/admin-panel'}>
                            Админ панель
                        </Link>
                                <div className="header__auth">
                                    {
                                        activeUser && activeUser.email ? <img className="header__avatar" src={activeUser.avatar} alt=""/> :
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
                                            activeUser && activeUser.email ?
                                                <>
                                                    <h4 className="header__profile-right-title">Выбор профиля</h4>
                                                    <div className="header__profile-right-emails">
                                                        {
                                                            activeUsers.map((item) => (
                                                                <div key={item.id} onClick={() => setActiveUser(item)} className="header__profile-right-email">
                                                                    <img className="header__avatar" src={item.avatar} alt=""/>
                                                                    <p className="header__profile-login">{item.login.length > 4 ? item.login.slice(0,5) + "..." : item.login}</p>
                                                                </div>
                                                            ))
                                                        }
                                                        <div onClick={() => navigate('/login')} className="header__profile-right-email">
                                                            <p className="header__profile-new">+</p>
                                                            <p className="header__profile-login">Новый</p>
                                                        </div>
                                                    </div>
                                                    {
                                                        activeUser ? <div className="header__profile-right-info">
                                                            <p className="header__profile-right-text">Редактировать профиль</p>
                                                            <p className="header__profile-right-text">Настройки</p>
                                                            <p className="header__profile-right-text">Помощь</p>
                                                            <p className="header__profile-right-text"
                                                               onClick={() => signOutHandler()}>Выйти</p>
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