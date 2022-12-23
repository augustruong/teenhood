import React, { useEffect } from 'react';


import './AllPage.css'

export default function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div id='contact-page'>
        <section className='main-header-section' style={{backgroundColor:"#FFF19A"}}>
            <img className='title' src={process.env.PUBLIC_URL + `/images/main/title_contact.png`}/>
        </section>
        <section className='form-wrapper'>
            <form id='contact-form'>
                <h3>TEENHOOD へのご質問など</h3>
                <input type={'text'} placeholder="お名前"/>
                <input type={'email'} placeholder="メールアドレス"/>
                <textarea placeholder="お問い合わせ内容"/>
                <button>Submit</button>
            </form>
        </section>
    </div>
  )
}