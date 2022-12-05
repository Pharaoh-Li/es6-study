const ajax = (
    url,
    data = {},
    method = 'get',
    header,
    async = true,
    timeout = 60 * 1000,
    success,
    fail,
) => {
    const addUrl = (url, param) => {
        if (param && Object.keys(param).length) {
            url += (url.indexOf('?') === -1 ? '?' : '&')
            Object.keys(param).forEach(key => {
                url += encodeURIComponent(key) + '=' + encodeURIComponent(param[key])
            })
        }
        return url
    }
    const requestUrl = method === 'get' ? this.addUrl(url, data) : url;
    const sendData = method === 'get' ? null : data;
    const xhr = new XMLHttpRequest();
    if (header && Object.keys(header).length) {
        Object.keys(header).forEach(key => {
            xhr.setRequestHeader(key, header[key])
        })
    }
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            try {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    const response = xhr.responseText
                    success(response);
                } else {
                    const error = xhr.status + xhr.responseText;
                    fail(error);
                }
            } catch (e) {
                fail(e)
            }
        }
    }
    xhr.open(method, requestUrl, async);
    xhr.timeout = timeout;
    xhr.ontimeout = () => {
        console.log('timeout');
    }
    xhr.send(sendData);
}