import React, { useContext } from 'react'
import Input from '../../Shared/Input'
import { useFormik } from 'formik'
import { loginSchema } from '../Validation/validation';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/FeatureUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import './Login.css'


export default function Login() {
    const initialValues = {
        email: '',
        password: '',
    };
    const navigate = useNavigate();
    let { userToken, setUserToken, userData } = useContext(UserContext);

    if (userToken) {
        navigate(-1);
    }
    const toastConfig = {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    };

    const onSubmit = async users => {

        try {
            const { data } = await axios.post('https://ecommerce-node4-five.vercel.app/auth/signin', users);
            if (data.message == 'success') {
                localStorage.setItem('userToken', data.token);
                setUserToken(data.token);
                //saveCurrentUser();
                toast.success("تم تسجيل الدخول بنجاح", toastConfig);
                navigate('/')
            }
            //console.log(data); 
            else {
                toast.error(" الحساب غير موجود  ", toastConfig);
            }
        } catch (error) {
            console.error("خطأ في الاتصال بالخادم:", error);
            toast.error("خطأ في الاتصال بالخادم", toastConfig);
        }


    }
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit,
        validationSchema: loginSchema
    })
    const inputs = [
        {
            type: 'email',
            id: 'email',
            name: 'email',
            title: 'User Email',
            placeholder: 'البريد الإلكتروني أو رقم الهاتف',
            value: formik.values.email,
        },
        {
            type: 'password',
            id: 'password',
            name: 'password',
            title: 'User Password',
            placeholder: 'أدخل كلمة المرور',
            value: formik.values.password,
        },
    ]
    const renderInputs = inputs.map((input, index) =>
        <Input
            type={input.type}
            id={input.id}
            name={input.name}
            title={input.title}
            value={input.value}
            errors={formik.errors}
            placeholder={input.placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched}
            autocomplete={input.name}
            key={index}

        />
    )
    return (
        <div className='vh-100 d-flex'>
            <div className="sign-img-shadow flex-grow-1 ">
                <div className="sign-img w-100 float-start vh-100"> </div>
            </div>
            <div className="sign-width sign-in-form text-center m-5 ">
                <img src="/images/bicycle.png" alt="bicycle logo" />

                <h1 className="mb-5">تسجيل الدخول </h1>
                <div className="social-icons">
                    <FontAwesomeIcon icon={faGooglePlusG} className="icon m-1 mb-0" />
                    <FontAwesomeIcon icon={faFacebookF} className="icon m-1 mb-0" />
                </div>

                <form onSubmit={formik.handleSubmit}>
                    <div className="d-flex align-items-center flex-column">
                        <p className="my-1">التسجيل باستخدام البريد أو الهاتف</p>
                        <div className="text-end d-flex align-items-center flex-column w-50 media-input-style ">
                            {renderInputs}
                            <Link className='link' to='/sendCode'>نسيت كلمة المرور؟</Link>

                            <div className="form-group">
                                <button
                                    className="button"
                                    type="submit"
                                    disabled={!formik.isValid || Object.values(formik.values).some(value => !value)}>
                                    تسجيل الدخول
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="register-links">
                        <p>
                            <a href="/register"> إنشاء حساب</a>
                        </p>
                        <p>لا تمتلك حساب؟</p>
                    </div>
                </form>
            </div>
        </div>
    )
}