const pre = '/ylbt';
export default {
    security: {
      csrf: pre + '/csrf'
    },
    user: {
        signUp: pre + '/user/signUp',
        signIn: pre + '/user/login',
        logout: pre + '/user/logout'
    },
    list: function (path) {
        return pre + '/' + path + '/list'
    },
    select: function (path) {
        return pre + '/' + path + '/select'
    },
    create: function (path) {
        return pre + '/' + path + '/create'
    },
    modify: function (path) {
        return pre + '/' + path + '/modify'
    },
    delete: function (path) {
        return pre + '/' + path + '/delete'
    }
}