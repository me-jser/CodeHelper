<template>
    <div>123</div>
</template>
<script>
let ranCommand = require('../../util/FolderOperations').runCommand
let testGit = require('../../util/FolderOperations').testGit

export default {
  name: "showFolder",
  data() {
    return {};
  },
  methods: {},
  mounted(){
    testGit()
  }
};
</script>
<style>
</style>
