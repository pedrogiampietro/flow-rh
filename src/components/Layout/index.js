import { Header } from '../Header';
import { Footer } from '../Footer';

export function Container({ children }) {
  return (
    <div className="container">
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
}
