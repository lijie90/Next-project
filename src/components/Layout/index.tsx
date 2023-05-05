import { useRouter } from 'next/router';
import { FC } from 'react';
import { routerLayoutMap } from './layout.config';
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const Layout = routerLayoutMap(router.pathname);
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
};

export default Layout;
