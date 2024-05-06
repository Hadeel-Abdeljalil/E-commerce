import * as yup from 'yup'
export const registerSchema =yup.object({
    email: yup.string().email('بريد إلكتروني غير صالح').required('البريد الإلكتروني مطلوب'),
    userName: yup.string().required('اسم المستخدم مطلوب').min(3, 'اسم المستخدم يجب أن يكون على الأقل 3 حروف').max(20, 'يجب أن لا يزيد عدد الحروف عن 20 حرف').matches(/^[a-zA-Z0-9_-]+$/, 'يمكن أن يحتوي اسم المستخدم فقط على أحرف وأرقام وشرطات سفلية وواصلات'),
    password: yup.string().required('كلمة المرور مطلوبة').min(8, 'يجب أن تكون كلمة المرور 8 أحرف على الأقل').matches(/[a-zA-Z]/, 'كلمة المرور يجب أن تحتوي على حرف واحد على الأقل').matches(/[0-9]/, 'يجب أن تحتوي كلمة المرور على الأقل رقماً واحداً'),
  })
  export const loginSchema =yup.object({
    email: yup.string().email('بريد إلكتروني غير صالح').required('البريد الإلكتروني مطلوب'),
    password: yup.string().required('كلمة المرور مطلوبة').min(8, 'يجب أن تكون كلمة المرور 8 أحرف على الأقل').matches(/[a-zA-Z]/, 'كلمة المرور يجب أن تحتوي على حرف واحد على الأقل').matches(/[0-9]/, 'يجب أن تحتوي كلمة المرور على الأقل رقماً واحداً'),
  })

 export const SendCodeSchema  = yup.object({
   email:yup.string().required('البريد الإلكتروني مطلوب'),
})

export const forgotPasswordSchema = yup.object({
   email:yup.string().required('البريد الإلكتروني مطلوب'),
   password:yup.string().required('كلمة السر مطلوبة').min(8,'يجب أن تكون كلمة المرور 8 أحرف على الأقل').max(30,'يجب أن تكون كلمة المرور  30 حرف  كحد أقصى'),
   code:yup.string().required('كود التأكيد مطلوب ').length(4,'يجب أن تكون 4 رموز'),
})

export const orderSchema = yup.object({
   phone:yup.string().required('الهاتف مطلوب'),
   address:yup.string().required('العنوان مطلوب'),
})