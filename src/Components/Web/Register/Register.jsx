import React from 'react'
import Input from '../../Shared/Input'
import { useFormik } from 'formik'
import { registerSchema } from '../Validation/validation';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';


export default function Register() {
    const initialValues={
        userName:'',
        email: '',
        password: '',
        image:'',
    };


    const handleFieldChange = (event)=>{
        formik.setFieldValue('image', event.target.files[0])
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

    const onSubmit=async users=>{
        const formData = new FormData();
        formData.append('userName', users.userName);
        formData.append('email', users.email);
        formData.append('password', users.password);
        formData.append('image', users.image);
        
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}auth/signup`,formData);
        if(data.message == 'success'){
            formik.resetForm();
            toast.success('account created successfully, plz verify ur email to login', toastConfig);
        }
        
    }
    
    const formik = useFormik({
        initialValues : initialValues,
        onSubmit,
        validationSchema:registerSchema
    })


    const inputs =[
        {
            type : 'text',
            id:'userName',
            name:'userName',
            title:'User Name',
            placeholder: 'اسم المستخدم',
            value:formik.values.userName,
        },
        {
            type : 'email',
            id:'email',
            name:'email',
            title:'User Email',
            placeholder: 'البريد الإلكتروني',
            value:formik.values.email,
        },
        {
            type : 'password',
            id:'password',
            name:'password',
            title:'User Password',
            placeholder: 'كلمة المرور',
            value:formik.values.password,
        },
        
        {
            type:'file',
            id:'image',
            name:'image',
            title:'User Image',
            onChange:handleFieldChange,
        }
    ]


    const renderInputs = inputs.map((input,index)=>
    <Input
    key={index}
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
/>
    )
    
  return (
    <div className="vh-100 d-flex">
            <div className="sign-img-shadow flex-grow-1 ">
                <div className="sign-img w-100 float-start vh-100"> </div>
            </div>

            <div className="sign-width sign-in-form text-center m-5 ">
                <img src="/images/bicycle.png" alt="bicycle logo" />

                <h1 className="mb-5">أنشئ حسابك</h1>
                <div className="social-icons">
                    <FontAwesomeIcon icon={faGooglePlusG} className="icon m-1 mb-0" />
                    <FontAwesomeIcon icon={faFacebookF} className="icon m-1 mb-0" />
                </div>

                <form onSubmit={formik.handleSubmit} encType='multipart/form-data'>
                    <div className="d-flex align-items-center flex-column">
                        <p className="my-1">التسجيل باستخدام البريد أو الهاتف</p>
                        <div className="text-end d-flex align-items-center flex-column w-50 media-input-style ">
                            {renderInputs}
                            <div className="form-group">
                                <button className="button" type="submit" disabled={!formik.isValid}> إنشاء حساب</button>
                            </div>
                        </div>
                    </div>

                    <div className="register-links">
                        <p>
                            <a href="/login">تسجيل دخول</a>
                        </p>
                        <p>هل تمتلك حساب؟</p>
                    </div>
                </form>
            </div>
        </div>
  )
}
