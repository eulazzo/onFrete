import cadastro from './cadastro';

export default [
    {
        path: '/cadastro',
        redirect: '/',
        component: () => import('../../layouts/blank-layout/index.vue'),
        children: [...cadastro],
    },
];