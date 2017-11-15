# 微信开发中常用的工具

#### 使用方法：`把你需要的工具文件拷贝到你的项目中，然后import进去。`

* ###  小程序网络请求

  把wx.request封装成了Promise风格的。使用的时候使用get、post等方法即可。支持添加拦截器，可以单独设置header、token、baseUrl等。下面以post方法为例。

  * 引入js文件：```js

  ```
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

