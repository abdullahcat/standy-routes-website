// pages/_app.tsx

import RootLayout from '@/app/layout';
import { AppProps } from 'next/app';
import '@/app/globals.css'
import Head from 'next/head';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <RootLayout>

            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
                <link rel="apple-touch-icon" sizes="57x57" href="/favicon_package/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/favicon_package/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/favicon_package/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/favicon_package/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/favicon_package/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/favicon_package/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/favicon_package/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/favicon_package/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon_package/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/favicon_package/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon_package/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon_package/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon_package/favicon-16x16.png" />
                <link rel="manifest" href="/favicon_package/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/favicon_package/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <Component {...pageProps} />
        </RootLayout>
    );
};

export default MyApp;