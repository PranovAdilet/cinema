import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {selectFilms} from "../../redux/reduxSelectors/reduxSelectors";
import {getCinema} from "../../redux/store/reducers/cinema";
import {useAppDispatch} from "../../redux/hooks/reduxHooks";
import {newStatus} from "../../App";



const AdminFilms = () => {

    const dispatch = useAppDispatch()

    const {data, filter} = useSelector( selectFilms)

    useEffect(() => {
        dispatch(getCinema({...filter, status: newStatus}))
    }, [])

    return (
        <div className="admin__info">
            <h2 className="admin__info-title">
                Все фильмы
            </h2>
            <table className="admin__table" >
                <tbody>
                <tr className="admin__table-block">
                    <th className="admin__table-title">
                        ID
                    </th>
                    <th className="admin__table-title">
                        Название
                    </th>
                    <th className="admin__table-title">
                        Год
                    </th>
                    <th className="admin__table-title">
                        Жанр
                    </th>
                    <th className="admin__table-title">
                        Статус
                    </th>
                    <th className="admin__table-title">
                        Изменить
                    </th>
                    <th className="admin__table-title">
                        Удалить
                    </th>
                </tr>
                {
                    data.map((item) => (
                        <tr key={item.id} className="admin__table-block">
                            <td className="admin__table-info">
                                {item.id}
                            </td>
                            <td className="admin__table-info">
                                {item.title}
                            </td>
                            <td className="admin__table-info">
                                {item.year}
                            </td>
                            <td className="admin__table-info">
                                {item.genre}
                            </td>
                            <td className="admin__table-info">
                                {item.status}
                            </td>
                            <td className="admin__table-info">
                                <button className="admin__table-btn">
                                    Изменить
                                </button>
                            </td>
                            <td className="admin__table-info">
                                <button className="admin__table-btn">
                                    X
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>

            </table >
        </div>
    );
};

export default AdminFilms;