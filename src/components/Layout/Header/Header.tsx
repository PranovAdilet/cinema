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

                        {
                            user.email ?
                                <div className="header__auth">
                                    <p onClick={() => {
                                        dispatch(logOutAccount())
                                        localStorage.removeItem('user')
                                        navigate('/')
                                    }}>Выйти</p>
                                </div>:
                                <div className="header__auth">
                                    <Link to={'/login'}>Логин</Link>
                                    /
                                    <Link to={'/registration'}>Регистрация</Link>
                                </div>
                        }
                        <Link to={'/admin-panel'}>
                            Админ панель
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;