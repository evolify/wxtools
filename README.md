# 微信开发中常用的工具，目前主要是网络请求方法的增强，以及对几乎所有的异步操作的Promisify.

#### 使用方法：`把你需要的工具文件拷贝到你的项目中，然后import进去。`

* ###  小程序网络请求

  &emsp;把wx.request封装成了Promise风格的。使用的时候使用get、post等方法即可。支持添加拦截器，可以单独设置header、token、baseUrl等。下面以post方法为例。

  * 引入js文件：

    ```js
    import req from '../../utils/Request.js'
    ```

  * 配置Request，一般在小程序App.js>onLaunch方法中配置

    ``` javascript
      configReq(){
        //配置baseUrl和拦截器，baseUrl例如 /api
        req.baseUrl(config.serverUrl)
          .interceptor(res=>{
            switch(res.data.code){
              case 401: 
                wx.showToast({
                  icon: 'loading',
                  title: '重新登录',
                })
                this.login()
                return false;
              case 0:
                return true;
              default:
                wx.showToast({
                  title: '操作失败',
                })
                return false;
            }
          })
      },
    ```

  * 登录成功后设置token

    ```javascript
    req.token(token)
    ```

  * 发起网络请求

    ```javascript
    req.post('/goods',data,header)
    	.then(res=>res.data.data)
    	.then(data=>{
        	wx.showToast({
                title:'创建成功'
            })
    	})
    ```

* ### 异步操作Promise的使用
&emsp; wx api里面很多操作都是异步的，基本上参数形式都差不多.这里做了Promise封装，方法名称、参数和官方api一致，只是参数里面不用传success、fail回调。以showToast为例，简单对比一下:  
&emsp; 常规用法：
```js
wx.showToast({
  title: '成功',
  icon: 'success',
  duration: 2000,
  success: ()=>{
    console.log('调用成功')
  },
  fail: err=>{
    console.error('调用失败',err)
  }
})
```
&emsp; Promise用法：
```js
import Wx from 'Wx.js'

Wx.showToast({
    title: '成功',
  icon: 'success',
  duration: 2000,
}).then(()=>{
  console.log('调用成功')
}).catch(err=>{
  console.error('调用失败',err)
})
```
&emsp; 其他的api用法都一样，方法、参数、返回值可以参考官方文档。如果有错误或者有缺失的，欢迎提issue.