// import { createAction, NavigationActions, Storage } from '../utils'
// import * as authService from '../services/auth'

export default {
    namespace: 'app',
    state: {
        home: 'home-page'
    },
    reducers: {

    },
    effects: {

    },
    subscriptions: {
        setup({ dispatch }) {
            dispatch({ type: 'loadStorage' })
        },
    },
}
