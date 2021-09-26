import React from 'react'
import Layout from '../components/Layout'

const Contacts = () => {
    return (
        <Layout> 
            <main className="page">
                <section className="contact-page">
                    <article className="contact-info">
                        <h3>Want To Get In Touch?</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. </p>
                        </article>
                        <article>
                            <form className="form contact-form" action="https://formspree.io/f/xzbyolrl"
                                method="POST">
                                <div className="form-row">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" name="name" id="name" />                              
                                </div>
                                <div className="form-row">
                                    <label htmlFor="email">Your Email</label>
                                    <input type="text" name="email" id="email" />                              
                                </div>
                                <div className="form=row">
                                    <label htmlFor="message">message</label>
                                    <textarea name="message" id="message"></textarea>
                                </div>
                                <button type="submit" className="btn block">Submit</button>
                            </form>
                        </article>
                    </section>
                </main>
        </Layout>
    )
}

export default Contacts
