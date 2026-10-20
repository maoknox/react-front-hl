import { JSX, lazy, LazyExoticComponent } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
// import { LazyPage1 } from '../01-lazyload/pages';
//import Shopping from '../02-component-patterns/pages/Shopping';
import { NoLazy } from '../01-lazyload/pages/NoLazy';
import { RegisterFormik } from '../03-forms/pages/RegisterFormik';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}
RegisterFormik

//const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/pages/LazyPage1'));
//const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/pages/LazyPage2'));
//const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/pages/LazyPage3'));

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'));
const LazyRegisterPage = lazy(() => import(/* webpackChunkName: "LazyRegisterPage" */ '../03-forms/pages/registerPage'));
const LazyFormikPage = lazy(() => import(/* webpackChunkName: "LazyRegisterPage" */ '../03-forms/pages/FormikBasicPage'));
const LazyFormikYupPage = lazy(() => import(/* webpackChunkName: "LazyRegisterPage" */ '../03-forms/pages/FormikYupPage'));
const LazyFormikComponents = lazy(() => import(/* webpackChunkName: "LazyRegisterPage" */ '../03-forms/pages/FormikComponents'));
const LazyFormikAbstraction = lazy(() => import(/* webpackChunkName: "LazyRegisterPage" */ '../03-forms/pages/FormikAbstraction'));
const LazyRegisterFormik = lazy(() => import(/* webpackChunkName: "LazyRegisterPage" */ '../03-forms/pages/RegisterFormik'));
const LazyDynamicForm = lazy(() => import(/* webpackChunkName: "LazyRegisterPage" */ '../03-forms/pages/DynamicForm'));


export const routes: Route[] = [
    {
        to: '/register-formik-dynamic',
        path: 'register-formik-dynamic',
        Component: LazyDynamicForm,
        name: 'Register Formik Dynamic'
    },
    {
        to: '/register-formik',
        path: 'register-formik',
        Component: LazyRegisterFormik,
        name: 'Register Formik'
    },
    {
        to: '/formik-abstraction',
        path: 'formik-abstraction',
        Component: LazyFormikAbstraction,
        name: 'Formik absraction'
    },
    {
        to: '/formik-components',
        path: 'formik-components',
        Component: LazyFormikComponents,
        name: 'Formik components'
    },
    {
        to: '/page-formik',
        path: 'page-formik',
        Component: LazyFormikPage,
        name: 'Formik Page'
    },
    {
        to: '/formikyup-page',
        path: 'formikyup-page',
        Component: LazyFormikYupPage,
        name: 'Formik Yup Page'
    },
    {
        to: '/registerpage',
        path: 'registerpage',
        Component: LazyRegisterPage,
        name: 'Register Page'
    },
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
