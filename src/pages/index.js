import React from "react"
import Layout from "../components/Layout"
import {Link} from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { FaCity, FaGulp,FaSwimmingPool } from 'react-icons/fa';
import SEO from "../components/SEO"
export default function Home() {
  return (
    <Layout>
      <SEO title="Home " />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpg"
            alt="venus-hotel"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth">
            </StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Venus Hotel</h1>
              <h4>Lorem Ipsum is simply dummy text</h4>
            </div>
          </div>
        </header>
        <section className="about-page">
            <article>
                <h2>History of Our Hotel</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
                    <p>The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    <Link to="/about" className="btn">
                        Read More
                    </Link>
            </article>
            <StaticImage 
                src="../assets/images/about.jpg" 
                alt="hotel" 
                className="about-img"
            />
        </section>
        <section className="featured-photo">
          <h5>Experience these Beaut!</h5>
          <div className="photos-list">
              <div>
                <h3><FaCity />Great Location</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, omnis?</p>
              </div>
              <div>
                <h3><FaGulp />Free Meals</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, omnis?</p>
              </div>
              <div>
                <h3><FaSwimmingPool /> Swimming Pool</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, omnis?</p>
              </div>
              <div>
                <Link to="/gallery" className="btn"> And More</Link></div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
