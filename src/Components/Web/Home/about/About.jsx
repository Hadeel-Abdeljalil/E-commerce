import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faWrench, faCartShopping, faBicycle, faRoute } from '@fortawesome/free-solid-svg-icons';
export default function About() {
    return (
        <>
            <section className="about container " id="about">
                <div className="row ">

                  {/* <div className="cornar" />*/}
                    <div className="col-lg-5">
                        <h3 className=" ">من نحن!</h3>
                        <p className=''>
                            فلسطين ع البسكليت هي مجموعة من الشابات والشباب الذين يتقاسمون شغف
                            الاستكشاف وركوب الدراجات. تأسست في عام 2016 تحت اسم رام الله رايدرز،
                            ونمت حتى أصبحت الوجهة الأولى لعشاق السفر والدراجات في فلسطين. على
                            مدى العامين الماضيين، انضم أكثر من 3000 شخص إلى جولاتنا وأصبحوا جزء
                            من أسرتنا المتوسعة. في مارس 2017.أصبحت فلسطين ع البسكليت أول مجموعة
                            دراجات هوائية تنظم حدث رياضي خارج حدود فلسطين في جولة الحرية من
                            مدينة القدس المقدسة في الأراضي الفلسطينية المحتلة إلى مدينة العقبة
                            الساحلية في جنوب الأردن. هدفنا الرئيسي هو الاستمرار في نشر ثقافة
                            ركوب الدراجات وجعل فلسطين دولة صديقة للدراجات، حيث تستخدم
                            الدراجات&nbsp;من&nbsp;قبل&nbsp;الجميع.
                        </p>
                    </div>

                    <div className="d-flex col-lg-6 ">
                        <div >
                            <h3 className=" d-flex justify-content-center">ماذا نقدم؟</h3>
                            <ul className="list-unstyled">
                                <li className="d-flex align-items-center pt-2">
                                    <div className="icon-map border rounded-circle d-flex justify-content-center align-items-center p-3">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <span className="pe-3">تأجير الدراجات الهوائية.</span>
                                </li>
                                <li className="d-flex align-items-center pt-2">
                                    <div className="icon-map border rounded-circle d-flex justify-content-center align-items-center p-3">
                                        <FontAwesomeIcon icon={faWrench} />
                                    </div>
                                    <span className="pe-3">صيانة الدراجات.</span>
                                </li>
                                <li className="d-flex align-items-center pt-2">
                                    <div className="icon-map border rounded-circle d-flex justify-content-center align-items-center p-3">
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </div>
                                    <span className="pe-3">بيع الدراجات المستعملة.</span>
                                </li>
                                <li className="d-flex align-items-center pt-2">
                                    <div className="icon-map border rounded-circle d-flex justify-content-center align-items-center p-3">
                                        <FontAwesomeIcon icon={faBicycle} />
                                    </div>
                                    <span className="pe-3"> التدريب على ركوب الدراجات.</span>
                                </li>
                            </ul>
                        </div>
                        <div >
                            <h3 className=" d-flex justify-content-center">ماذا نفعل؟</h3>
                            <ul>
                                <li className="d-flex align-items-center pt-2">
                                    <div className="icon-map border rounded-circle d-flex justify-content-center align-items-center p-3 ">
                                        <FontAwesomeIcon icon={faRoute} />
                                    </div>
                                    <span className="pe-3">رحلات أسبوعية يومي الجمعة والسبت</span>
                                </li>
                                <li className="d-flex align-items-center pt-2">
                                    <div className="icon-map border rounded-circle d-flex justify-content-center align-items-center p-3">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <span className="pe-3">جولات خاصة للمجموعات.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}
