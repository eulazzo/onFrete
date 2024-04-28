import helpers from '../../helpers';
const menuId = 'produto';

export default [
    helpers.createRoute(menuId, 'produto', menuId, () =>
        import('../../../views/Home/index.vue')
    ),
];
