import React from 'react'
import Layout from '../components/Layout'
import Gallery from '../examples/Gallery'

const gallery = () => {
    return (
        <Layout>
            <main className="page">
                <Gallery />
            </main>
        </Layout>
    )
}

export default gallery
