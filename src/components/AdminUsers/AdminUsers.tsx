import React, { useEffect, useState} from 'react';
import {useAppDispatch} from "../../redux/hooks/reduxHooks";
import {useSelector} from "react-redux";
import {selectUser} from "../../redux/reduxSelectors/reduxSelectors";
import {getAllUsers, deleteUser} from "../../redux/store/reducers/users";
import {IShippingFields} from "../../interface/app.interface";
import EditUser from "../EditUser";

const AdminUsers = () => {
    const [changeInput, setChangeInput] = useState<IShippingFields | null>(null)


    const dispatch = useAppDispatch()
    const {users, user} = useSelector(selectUser)

    useEffect(() => {
        dispatch(getAllUsers())

    },[user])




    return (
        <div className="admin__info">
            <h2 className="admin__info-title">
                Пользователи
            </h2>
            <table className="admin__table" >
               <tbody>
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
               {
                    users.map((item) => (
                        changeInput !== null && item.id === changeInput.id ?
                            <EditUser changeInput={changeInput} item={item} setChangeInput={setChangeInput} key={item.id}/>
                            : <tr key={item.id} className="admin__table-block">
                          <td className="admin__table-info">
                              {item.id}
                          </td>
                          <td className="admin__table-info">
                              {item.login}
                          </td>
                          <td className="admin__table-info">
                              {item.email}
                          </td>
                          <td className="admin__table-info">
                              {item.phone}
                          </td>

                          <td className="admin__table-info"
                              onClick={() => {
                                  setChangeInput(item)
                              }}
                          >
                              <button className="admin__table-btn">
                                  Изменить
                              </button>
                          </td>
                          <td className="admin__table-info">
                              <button onClick={() => dispatch(deleteUser(item))} className="admin__table-btn">
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

export default AdminUsers;