import React from 'react'

export default function Services() {
  return (
    <>
      <section className="services d-flex" id="services">
        <div className="container d-flex align-items-center justify-content-around row">
          <a className='col-lg-1'>
            <div className="service ">
              <h1>03</h1>
              <h2>متجرنا</h2>
              <p>
                إمكانية تأجير وتصليح الدراجات الهوائية وبيع المعدات والمستلزمات
                الرياضية.
              </p>
            </div>
          </a>
          <a className='col-lg-1'>
            <div className="service ">
              <h1>02</h1>
              <h2>جولات خارجية</h2>
              <p>كل يوم جمعة وسبت ع مناطق مختلفة من فلسطين.</p>
            </div>
          </a>
          <a className='col-lg-1'>
            <div className="service ">
              <h1>01</h1>
              <h2>جولات أسبوعية</h2>
              <p>نقدم جولات في مدينة رام الله على مدار الأسبوع.</p>
            </div>
          </a>
        </div>
      </section>
    </>
  )
}
