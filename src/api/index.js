/**
 * 包含应用中所有请求接口的函数：接口请求函数
 */
import ajax from './ajax'

const BASE = ''
//请求登录

export const reqLogin = (username,password) => ajax.post(BASE + '/login', {username,password})


//ajax({
    //     method: 'post',
    //     url: BASE +'/login',
    //     data:{//data是对象，默认使用json格式的请求体携带参数数据
    //         username,
    //         password
    //     }
    //    //data : qs.stringify({username, password})
    // })
//  const user = 'admin'
//  const pwd = 'admin'
//  reqLogin(user,pwd).then(result =>{
//      //const result = response.data
//      console.log('request succeed', result)
//  }, error =>{
//      console.log('request failed'+ error.message)
//  })


//获取书籍列表的请求url
export const reqBookInfos = () => ajax(BASE + '/manage/category/list')

/**
 * 获取商品分页列表
 */
export const reqProducts = (pageNum, pageSize) => ajax( BASE + '/manage/product/list', {
    params: {//包含所有query参数的对象
        pageNum, pageSize
    }
})

export const reqSearchProducts = ({
    pageNum, 
    pageSize, 
    searchName, 
    searchType // 它的值是'productName'或者'productDesc'
}) => ajax( BASE, {
    //method: 'GET'
    params:{
        pageNum,
        pageSize,
        [searchType]:searchName,
    }
})

export const reqUpdateStatus = (productId, status) => ajax (BASE + '/manage/product/updateStatus',{
    method:'POST',
    data:{
        productId,
        status
    }
})