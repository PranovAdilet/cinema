import React from 'react';

const AdminUsers = () => {
    return (
        <div className="admin__info">
            <h2 className="admin__info-title">
                Пользователи
            </h2>
            <table className="admin__table" >
                <tr className="admin__table-block">
                    <th className="admin__table-title">
                        ID
                    </th>
                    <th className="admin__table-title">
                        Login
                    </th>
                    <th className="admin__table-title">
                        Email
                    </th>
                    <th className="admin__table-title">
                        Номер телефона
                    </th>
                    <th className="admin__table-title">
                        Изменить
                    </th>
                    <th className="admin__table-title">
                        Удалить
                    </th>
                </tr>
                <tr className="admin__table-block">
                    <td className="admin__table-info">
                        1
                    </td>
                    <td className="admin__table-info">
                        Muslim
                    </td>
                    <td className="admin__table-info">
                        muslim@mail.ru
                    </td>
                    <td className="admin__table-info">
                        +996555555555
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
            </table >
        </div>
    );
};

export default AdminUsers;