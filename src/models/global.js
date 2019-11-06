export default {
  // 当前 Model 的名称
  namespace: 'global',
  // 该 Model 当前的状态
  state: {age:21},
  // Action 处理器，处理同步动作，用来算出最新的 State
  reducers: {
    'change'(state, { payload:{age} }) {
      return {...state,age};
    },
  },
  // Action 处理器，处理异步动作 call-执行异步操作 put-发出一个 Action，类似于 dispatch
  effects: {
    *add({payload}, { call, put }) {
      // yield call(delay, 1000);
      yield put({ type: 'change',payload:{age:payload} });
    },
  },
  // 订阅
  // subscriptions: {
  //   keyboardWatcher({ dispatch }) {
  //     key('⌘+up, ctrl+up', () => { dispatch({type:'add'}) });
  //   },
  // },
};
