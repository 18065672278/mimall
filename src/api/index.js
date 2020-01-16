import axios from 'axios'
//增加默认的请求路径
//服务搭起来后可删除
axios.defaults.baseURL = 'http://localhost:3000';

axios.interceptors.response.use((res) => {
  return res.data;//在这里统一拦截结果，把结果处理成res.data
})

//获取轮播图数据,返回的是一个promise对象
export let getSliders = () => {
  return axios.get('/sliders')
}
export let getNavs = () => {
  return axios.get('/navs')
}
export let getIndexBlock = () => {
  return axios.get('/indexBlock')
}
export let getAll = () => {
  return axios.all([getSliders(),getNavs(),getIndexBlock()])
}
export let getGoodsDetail = (id) =>{
  return axios.get(`/goodsDetail?id=${id}`)
}
