async function loadNovel() {
  const url = "https://duyi-static.oss-cn-beijing.aliyuncs.com/files/novel.txt";
  const resp = await fetch(url);
  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  for (;;) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    const text = decoder.decode(value);
    // console.log(text);
  }
}
// loadNovel();

//1.实例化请求对象
const url = "https://duyi-static.oss-cn-beijing.aliyuncs.com/files/novel.txt";
const http = new XMLHttpRequest();
http.open('get', url);
http.onreadystatechange = function() {
    if(http.readyState === 4) {
        if (http.status === 200 || http.status === 304) {
            const result = http.responseText
            // console.log(result);
            console.log(1);
            // document.body.innerText = result
        }
    }
}
http.send()
const ajax = (url, methods = 'get', params = {}) => {
    const xhr = new XMLHttpRequest();
    http.open();
    
}