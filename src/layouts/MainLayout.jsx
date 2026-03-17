import Navbar from '../components/navigation/Navbar';
import Footer from './Footer';

export default function MainLayout({ children }) {
  return (
    <div id="top">
      <a href="#main-content" className="sr-only">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
