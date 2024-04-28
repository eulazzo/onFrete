// import store from '@store';
import routes from './routes';

routes.beforeEach(async (to, from, next) => {
    if (to.matched.every((record) => !record.meta.requiresAuth)) {
        next();
        return;
    }

    // if (!store.getters['Autenticacao/estaAutenticado']) {
    //     next({ name: 'login', params: { redirect: to?.path }, });
    //     return;
    // }

    const paginasQueVaoParaInicio = ['login'];
    if (paginasQueVaoParaInicio.includes(to.name)) {
        next({ name: 'dashboard' });
        return;
    }
    next();
});

export default routes;
