import React, {ChangeEvent} from 'react';
import {deleteUser, editUser} from "../redux/store/reducers/users";
import {IShippingFields} from "../interface/app.interface";
import {useAppDispatch} from "../redux/hooks/reduxHooks";
import InputMask from "react-input-mask";

interface IProps{
    item: IShippingFields,
    changeInput: IShippingFields
    setChangeInput: (user: IShippingFields | null) => void
}

const EditUser = ({item, changeInput, setChangeInput }: IProps) => {

    const dispatch = useAppDispatch()

    const inputLoginHandler =  (e: ChangeEvent<HTMLInputElement>, item: IShippingFields) => {
        if (changeInput?.id === item.id){
            setChangeInput({
                ...changeInput,
                login: e.target.value
            })
        }
    }
    const inputEmailHandler =  (e: ChangeEvent<HTMLInputElement>, item: IShippingFields) => {
        if (changeInput?.id === item.id){
            setChangeInput({
                ...changeInput,
                email: e.target.value
            })
        }
    }
    const inputPhoneHandler =  (e: ChangeEvent<HTMLInputElement>, item: IShippingFields) => {
        if (changeInput?.id === item.id){
            setChangeInput({
                ...changeInput,
                phone: e.target.value
            })
        }
    }

    return (
        <tr key={item.id} className="admin__table-block">
            <td className="admin__table-info">
                {item.id}
            </td>
            <td className="admin__table-info">
                <input
                    type="text"
                    // onChange={(e) => inputLoginHandler(e, item)}
                value={changeInput.login} className="admin__table-input"/>
            </td>
            <td className="admin__table-info">
                <input
                    type="email"
                   // onChange={(e) => inputEmailHandler(e, item)}
                    value={changeInput.email} className="admin__table-input"
                />
            </td>
            <td className="admin__table-info">
                <InputMask
                    type="tel"
                    mask={`+\\9\\96(999)99-99-99`}

                    // onChange={(e) => inputPhoneHandler(e, item)}
                value={changeInput.phone} className="admin__table-input"/>
            </td>

            <td className="admin__table-info"
                onClick={() => {
                    dispatch(editUser(changeInput))
                    setChangeInput(null)
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
    );
};

export default EditUser;