import { Header } from '../Header';
import { Footer } from '../Footer';

export function Container({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
