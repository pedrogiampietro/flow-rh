import { Header } from '../components/Header';

export function Container({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
