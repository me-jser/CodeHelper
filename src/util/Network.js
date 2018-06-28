let fetch = require('node-fetch')


export function getip() {
    return fetch('http://ip.taobao.com/service/getIpInfo.php?ip=myip', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
}