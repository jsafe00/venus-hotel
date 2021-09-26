import React from 'react'
import Layout from '../components/Layout'
import {StaticImage} from 'gatsby-plugin-image'
import {Link} from 'gatsby'

const About = () => {
    return (
        <Layout> 
            <main className="page">
                <section className="about-page">
                    <article>
                        <h2>Lorem Ipsum</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
                            <p>The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                            <Link to="/contact" className="btn">
                                contact
                            </Link>
                    </article>
                    <StaticImage 
                        src="../assets/images/about.jpg" 
                        alt="hotel" 
                        className="about-img"
                    />
                </section>
            </main>
        </Layout>
    )
}

export default About
