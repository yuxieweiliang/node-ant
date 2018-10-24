fetch默认不携带cookie
fetch发送请求默认是不发送cookie的，不管是同域还是跨域；那么问题就来了，对于那些需要权限验证的请求就可能无法正常获取数据，这时可以配置其credentials项，其有3个值：

omit: 默认值，忽略cookie的发送
same-origin: 表示cookie只能同域发送，不能跨域发送
include: cookie既可以同域发送，也可以跨域发送
credentials所表达的含义，其实与XHR2中的withCredentials属性类似，表示请求是否携带cookie；具体可以参考阮一峰老师的跨域资源共享 CORS 详解中withCredentials一节的介绍；

这样，若要fetch请求携带cookie信息，只需设置一下credentials选项即可，
例如:
> fetch(url, { credentials: 'include' });

另外补充一点：

fetch默认对服务端通过Set-Cookie头设置的cookie也会忽略，若想选择接受来自服务端的cookie信息，也必须要配置credentials选项；