import { JSX, lazy, LazyExoticComponent } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
// import { LazyPage1 } from '../01-lazyload/pages';
//import Shopping from '../02-component-patterns/pages/Shopping';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}


//const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/pages/LazyPage1'));
//const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/pages/LazyPage2'));
//const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/pages/LazyPage3'));

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'));



export const routes: Route[] = [
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
    {
        path: '/lazyLayout/*',
        to: '/lazyLayout',
        Component: LazyLayout,
        name: 'LazyLayout'
    },
    

];
