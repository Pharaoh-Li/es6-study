async function loadNovel() {
  const url = "https://duyi-static.oss-cn-beijing.aliyuncs.com/files/novel.txt";
  const resp = await fetch(url);
  const text = await resp.text()
  console.log(text);
  // const reader = resp.body.getReader();
  // const decoder = new TextDecoder();
  // for (;;) {
  //   const { value, done } = await reader.read();
  //   if (done) {
  //     break;
  //   }
  //   const text = decoder.decode(value);
  //   console.log(text);
  // }
}
// loadNovel();
