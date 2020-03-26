<template>
<div>
    <mt-field label="username" placeholder="用户名" v-model="username"></mt-field>
<mt-field label="email" placeholder="邮箱" type="email" v-model="email"></mt-field>
<mt-field label="password" placeholder="密码" type="password" v-modal="password"></mt-field>
<mt-field label="phone" placeholder="手机号码" type="tel" v-model="phone"></mt-field>
<mt-field label="website" placeholder="个人网站" type="url" v-model="website"></mt-field>
<mt-field label="number" placeholder="电话号码" type="number" v-model="number"></mt-field>
<mt-field label="birthday" placeholder="生日" type="date" v-model="birthday"></mt-field>
<mt-field label="introduction" placeholder="简介" type="textarea" rows="4" v-model="introduction"></mt-field>
<button class="button-class" @click="$router.back(-1)">返回</button>
</div>
</template>
<script>
// import {Field} from 'mint-ui'
import 'mint-ui/lib/style.css'
export default {
  data () {
    return {
      username: '',
      email: '',
      password: '',
      phone: '',
      website: '',
      number: '',
      birthday: '',
      introduction: ''

    }
  }
}
</script>
<style scoped>
.button-class{
    color:rgb(92, 47, 255);
    height:20px;
    width:30vw;

}
</style>
