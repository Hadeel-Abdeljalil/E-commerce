import React from 'react'

export default function ContactInfo() {
  return (
    <>
       <section className="contact">
        <div className="container h-100 row">
          <div className="about-us w-25 col-lg-4">
            <h4> من نحن</h4>
            <p>          فلسطين ع البسكليت أول مجموعة دراجات هوائية تنظم حدث رياضي خارج حدود فلسطين في جولة الحرية من مدينة القدس المقدسة في الأراضي الفلسطينية المحتلة إلى مدينة العقبة الساحلية في جنوب الأردن. هدفنا الرئيسي هو الاستمرار في نشر ثقافة ركوب الدراجات وجعل فلسطين دولة صديقة للدراجات، حيث تستخدم الدراجات من قبل الجميع.
            </p>
          </div>
          <div className="useful-links w-25 col-lg-4">
            <h4 className='text-center'>روابط مفيدة</h4>
            <ul>
              <li>
                <i className="fa-regular fa-greater-than" />
                <a href="#">اتصل بنا</a>
              </li>
              <li>
                <i className="fa-regular fa-greater-than" />
                <a href="#">من نحن</a>
              </li>
              <li>
                <i className="fa-regular fa-greater-than" />
                <a href="#">خدماتنا</a>
              </li>
              <li>
                <i className="fa-regular fa-greater-than" />
                <a href="#">المتجر</a>
              </li>
            </ul>
          </div>
          <div className="overlay w-25 col-lg-4">
            <div className="contact-details contact-details-map">
              <h4 className='text-center'>اتصل بنا</h4>
              <ul >
                <li>
                  <i className="fa fa-envelope contact-icon " />
                  <span><a href="mailto:http://cyclingpalestine@gmail.com">cyclingpalestine@gmail.com</a></span>
                </li>
                <li>
                  <i className="fa fa-phone contact-icon " />
                  <span><a href="tel:+970568642671">970-568642671+</a></span>
                </li>
                <li>
                  <i className="fa-brands fa-youtube " />
                  <span><a href="https://www.youtube.com/channel/UCsYE7Di2EmiVD-dtDxH0ayQ"> فلسطين ع البسكليت</a></span>
                </li>
                <li>
                  <i className="fa-brands fa-facebook-f " />
                  <span><a href="https://www.facebook.com/cyclingpalestine">Cycling Palestine</a></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
