import {Link, useNavigate} from "react-router-dom";
import {BiHomeSmile} from "react-icons/bi"
import {useForm, SubmitHandler} from "react-hook-form";
import {loginUser, loginAccount} from "../../redux/store/reducers/users";
import {ILoginField} from "../../interface/app.interface"
import {useAppDispatch} from "../../redux/hooks/reduxHooks"

const Login = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<ILoginField>()


    const onSubmit:SubmitHandler<ILoginField> = (data) => {
        console.log(data)
        dispatch(loginUser(data)).then((response) => {
            localStorage.setItem('user', JSON.stringify(response))
            dispatch(loginAccount(data))
            navigate("/")
        })
    }

    return (
        <section className="login">
            <div className="login__block">
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="login__form">
                    <h2>Логин</h2>
                    <div className="login__form-block">
                        <input {...register('email',{
                            required: {
                                message: 'Email обязательно к заполнению',
                                value: true
                            },
                            minLength: {
                                message: 'Минимум 10 символа',
                                value: 10
                            },
                            pattern: {
                                message: 'Напишите правильно свой email',
                                value:  /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                            }
                        })} type="email" className="login__form-input" placeholder="Ввести email"/>
                        <p className='register__form-error'>
                            {errors.email && errors.email?.message}
                        </p>
                    </div>

                    <div className="login__form-block">
                        <input  {...register('password', {
                            required: {
                                message: "Пароль обязателен к заполнению",
                                value: true
                            },
                            pattern: {
                                value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                                message: 'Пароль должен содержать не менее 8 символов, заглавную букву, число!'
                            }
                        })} type="password" className="login__form-input" placeholder="Ввести пароль"/>
                        <p className='register__form-error'>
                            {errors.password && errors.password?.message}
                        </p>
                    </div>
                    <div className="login__form-block">
                        <button className="login__form-btn" type={"submit"}>
                            Войти
                        </button>
                    </div>
                    <p className="login__reg">
                        Нет профиля ?
                        <Link className="login__reg-link" to={'/registration'}>
                            пройдите регистрацию
                        </Link>
                    </p>

                </form>
                <div className="login__route">
                    <BiHomeSmile className="login__route-icon"/>
                    <Link className="login__route-link" to={'/'}>
                        Вернуться на главную страницу
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Login;