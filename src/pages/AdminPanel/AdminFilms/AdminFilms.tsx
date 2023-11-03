import React from 'react';


const AdminFilms = () => {

    // const dispatch = useDispatch()
    //
    // const {data} = useSelector( s => s.cinema)
    //
    // useEffect(() => {
    //     dispatch(getCinema())
    // })

    return (
        <div className="admin__info">
            <h2 className="admin__info-title">
                Все фильмы
            </h2>
            <table className="admin__table" >
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

            </table >
        </div>
    );
};

export default AdminFilms;