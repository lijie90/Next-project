import { FC } from 'react';
import Footer from '../Footer';
import Header from '../Header';
//根据不同路由展示不用组合的layout布局
interface LayoutProps {
  children: React.ReactNode;
}

//枚举三种不用情况
export enum LayoutType {
  //默认布局，包含头部，底部
  Default = 'default',
  //空布局，不包含头部，底部
  Blank = 'blank',
  //自定义布局，自定义头部，底部,可引入其他组件
  Self = 'login',
}
const defaultLayoutType: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
const blankLayoutType: FC<LayoutProps> = ({ children }) => {
  return <>{children}</>;
};
//自定义布局可单独拆分出去，引入
const selfLayoutType: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <p>login</p>
      {children}
    </>
  );
};
//布局对应的组件
export const layoutMap: Record<string, any> = {
  [LayoutType.Default]: defaultLayoutType,
  [LayoutType.Blank]: blankLayoutType,
  [LayoutType.Self]: selfLayoutType,
};
//路由对应的布局配置
const routerListMap: Record<string, any> = {
  [LayoutType.Blank]: ['/create.html'],
  [LayoutType.Self]: ['/login'],
};
//路由对应的布局，匹配不到则默认default布局
export const routerLayoutMap = (routerKey: string): any => {
  let resultLayout = layoutMap[LayoutType.Default];
  const routerList = Object.keys(routerListMap);
  routerList.map((key: string) => {
    if (routerListMap[key].includes(routerKey)) {
      resultLayout = layoutMap[key];
    }
  });
  return resultLayout;
};
