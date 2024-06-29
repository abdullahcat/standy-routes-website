import Navbar from '@/components/navbar'
import '@/app/globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/footer';
import localFont from 'next/font/local'


// Font files can be colocated inside of `app`
const ProductSans = localFont({
  src: [
    {
      path: 'fonts/Product Sans Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: 'fonts/Product Sans Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: 'fonts/ProductSans-Thin.ttf',
      weight: '100',
      style: 'normal'
    },
  ],
  display: 'swap',
});
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

      <main className='bg-white light'>{children}</main>
      <footer  >
        <Footer />
      </footer>

    </div>

  );
};
export default RootLayout;