import subscribe from './subscribe';
import unsubscribe from './unsubscribe';
import disconnect from './disconnect';

export default function (client){
  const url = client.request.headers.referer;
  console.log('init');




  client.on('message', function(data) {
    console.log('-|-|-|-|-|-|-|-|-|-|-|-', data)
  });

  // client.socket('ff').emit('messages', 'for your eyes only');








  // 订阅
  subscribe(client);

  // 退订
  unsubscribe(client);

  // 断开连接
  disconnect(client);
}