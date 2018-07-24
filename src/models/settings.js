// import { createAction, NavigationActions, Storage } from '../utils'
// import * as authService from '../services/auth'

export default {
    namespace: 'settings',
    state: {
        menu: [
            [
                {
                    // icon:'ios-arrow-forward',
                    title: '账号',
                    subtitle: '',

                },
            ],
            [
                {
                    title: '头像',
                    img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532368340323&di=e2af760a1aa6b8595280ff10f795765b&imgtype=0&src=http%3A%2F%2Fimg2.100bt.com%2Fupload%2Fqz%2F20140605%2F1304635013124276583373.jpg'
                },
                {
                    // icon:'ios-arrow-forward',
                    title: '昵称',
                    subtitle: '婉儿'
                },
                {
                    // icon:'ios-arrow-forward',
                    title: '性别',
                    subtitle: '女'
                }, {
                    // icon:'ios-arrow-forward',
                    title: '生日',
                    subtitle: '请设置生日'
                }, {
                    // icon:'ios-arrow-forward',
                    title: '岁数',
                    subtitle: '请设置岁数'
                }, {
                    // icon:'ios-arrow-forward',
                    title: '签名',
                    subtitle: '请设置签名'
                }

            ],
            [
                {
                    // icon:'ios-arrow-forward',
                    title: '时间样式',
                    subtitle: '显示剩余天数'
                },
                {
                    // icon:'ios-arrow-forward',
                    title: '倒计时样式',
                    subtitle: '显示秒倒计时'
                },
            ],
            
        ]
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
