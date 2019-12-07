import axios from 'axios'

//设置超时时间
axios.defaults.timeout = 10000;
axios.withCredentials = true;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

export const request = {
  GET: function(url) {
    return new Promise((resolve, reject) =>{
        axios.get(url).then(res =>{
            resolve(res.data);
        }).catch(err =>{
            reject(err);
        })
    });
  },
  POST: function (url, params) {
    return new Promise((resolve, reject) =>{
        axios.post(url, params).then(res =>{
            resolve(res.data);
        }).catch(err =>{
            reject(err);
        })
    });
  }
}


// 响应拦截器（处理响应数据）
axios.interceptors.response.use(
  response => {
    if(response.data.code == '200' || response.data.code == '400'){
        return Promise.resolve(response);
    }else{
        //这个地方可以由后台编辑状态码区分不同情况，做不同的逻辑处理
        return Promise.reject(response);
    }
  },
  error => {
    return Promise.reject(error.response);
  }
)