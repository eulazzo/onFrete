export default {
    createRoute(menuId, name, path, component, acessoCliente = true) {
        return {
            meta: { menuId: menuId, acessoCliente: acessoCliente },
            name: name,
            path: path,
            component: component,
        };
    },
};
