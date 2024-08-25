import Navbar from '@/components/navbar';
import '@/app/globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/footer';
import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '700'], // Specify the weights you need
  style: ['normal', 'italic'],   // Optional: Include styles if needed
  subsets: ['latin'],            // Optional: Specify subsets (e.g., latin, latin-ext)
  display: 'swap',               // Optional: Control the font display strategy
});


interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={poppins.className}>
      <main className="bg-white light">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
