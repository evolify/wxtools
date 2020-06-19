### 微信开发中常用的工具，目前主要是网络请求方法的增强，以及对几乎所有的异步操作的Promisify.

* ### 安装：

```
yarn add @evolify/wxtools
```

或者

```
npm i @evolify/wxtools
```



* ### 小程序网络请求

&emsp;把wx.request封装成了Promise风格的。使用的时候使用get、post等方法即可。支持添加拦截器，可以单独设置header、token、baseUrl等。下面以post方法为例。

* 引入js文件：

  ```js
  import {request as req} from '@evolify/wxtools'
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
import {Wx} from '@evolify/wxtools'

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

* ### Promisify

  ```js
  import {promisify} from '@evolify/wxtools'
  
  function func({
    param1,
    param2,
    success: ()=>{},
    fail: ()=>{}
  }){
    // do something
    success()
  }
  
  const promisifyFunc = params => promisify(func, params)
  
  // then you can use
  promisifyFunc(data)
  	.then(res=>{
    		// on success
  	})
  	.catch(err=>{
    	// on failed
  })
  // instand of 
  func({
    ...data,
    success: res=>{
      
    },
    fail: res => {
      
    }
  })
  ```

  

- ### 定时任务队列

  &emsp;有些场景，我们需要定义一序列的延时任务，比如就界面动画而言，一些元素依次进场，并且有一定间隔，这时候如果我们直接用setTimeout, 就会遇到毁掉地狱的问题，代码很难看，且难以维护。这里封装了一个工具，可解决此类问题，具体介绍请参考文章：[js定时任务队列](https://blog.evolify.cn/2018/05/24/js定时任务队列/)，用法如下：

  ```js
  import {Schedule} from '@evolify/wxtools'
  
  new Schedule().task(task1)
    .delay(1000).task(()=>this.setData({title:'Shedule'}))
    .delay(500).task(task3)
  ```

  