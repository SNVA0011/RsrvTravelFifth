import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router'
import { siteurl } from '../utils/static'


const PageHead = ({ title, description, keywords, children }) => {
    const router = useRouter() 
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="canonical" href={siteurl + router.asPath} />
                {children}
            </Head>
        </>
    )
}

export default PageHead