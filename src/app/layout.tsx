import Navbar from '@/components/navbar'
import '@/app/globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/footer';
import localFont from 'next/font/local'


// Font files can be colocated inside of `app`
const ProductSans = localFont({
  src: 'fonts/Product Sans Regular.ttf',
  display: 'swap',
})
const DINCondensed = localFont({
  src: 'fonts/DINCondensed-Bold.ttf',
  display: 'swap',
})

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={ProductSans.className} >
      <header >
        <Navbar />
      </header>
      <main className='bg-standy-black'>{children}</main>
      <footer  >
        <Footer />
      </footer>

    </div>

  );
};
export default RootLayout;