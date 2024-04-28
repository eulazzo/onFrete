// import store from '@store';
import routes from './routes';

routes.beforeEach(async (to, from, next) => {
    if (to.matched.every((record) => !record.meta.requiresAuth)) {
        next();
        return;
    }

    const user = localStorage.getItem('user')
    if (!user) {
        next({ name: 'login', params: { redirect: to?.path } });
        return;
    }
    next();
});

export default routes;
