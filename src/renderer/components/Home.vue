<template>
    <div id="wrapper">
        内网地址: {{IP}}
        外网IP： {{publicIp}}
    </div>
</template>

<script>
import { getip } from "../../util/Network.js";
let ip = require("ip");
export default {
  name: "home-page",
  data() {
    return {
      IP: ip.address(),
      publicIp: '',
      nodeVersion: "",
      npmVersion: "",
      webpackVersion: "",
      eslint: ""
    };
  },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    },
    getIpInfo() {
    getip()
        .then(res => res.json())
        .then(json => {
           this.publicIp.ip = json.data.ip;
        })
        .catch(err => {
          console.log("公网IP获取错误:" + err);
           
        });

    }
  },
  mounted() {
    this.getIpInfo();
  }
};
</script>


