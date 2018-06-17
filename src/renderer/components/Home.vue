<template>
    <div id="wrapper">
        内网地址: {{IP}}
        外网IP： {{publicIp}}
    </div>
</template>

<script>
    const publicIp = require('public-ip');
    let ip = require("ip");
    export default {
        name: 'home-page',
        data() {
            return {
                IP: ip.address(),
                publicIp: '',
                nodeVersion: '',
                npmVersion: '',
                webpackVersion: '',
                eslint: ''
            }
        },
        methods: {
            open(link) {
                this.$electron.shell.openExternal(link)
            },
            getIpInfo() {
                publicIp.v4().then(ip => {
                    this.publicIp = ip
                }).catch(e => {
                    console.log(e);
                });
            }
        },
        mounted() {
            this.getIpInfo()
        }
    }
</script>


