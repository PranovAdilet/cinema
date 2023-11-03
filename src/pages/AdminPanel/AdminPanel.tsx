import React, { useState} from 'react';
import {Link} from "react-router-dom";
import AdminFilms from "./AdminFilms/AdminFilms";
import AdminUsers from "./AdminUsers/AdminUsers";


const AdminPanel = () => {

    const [filmsShow, setFilmsShow] = useState('films');

    return (
        <section className="admin">
            <aside className="admin__aside">
                <h2 className="admin__aside-title">
                    Admin Panel
                </h2>
                <ul className="admin__aside-list">
                    <li className="admin__aside-item" onClick={() => setFilmsShow('films')}>
                        Films
                    </li>
                    <li className="admin__aside-item" onClick={() => setFilmsShow('users')}>
                        Users
                    </li>
                </ul>
                <Link className="login__route-link" to={'/'}>
                    Главная страница
                </Link>
            </aside>
            {
                filmsShow === 'films' ?
                    <AdminFilms/>
                    :
                    <AdminUsers/>
            }
        </section>
    );
};

export default AdminPanel;