<script>
export default{
  data: () => ({
        rid: '',
        room: '',
        roomRules: [
          v => !!v || '房间名称不能为空',
          v => v.length <= 10 || '房间名称限制为10个字符，不能包含空格。',
        ],
        name: '',
        nameRules: [
          v => !!v || '昵称不能为空',
          v => v.length <= 10 || '昵称长度最多为15个字符，不能包含空格',
        ],
  }),
  methods: {
        checkin(){
          if ( this.room && this.name && this.rid ) {
              window.location = '/chat.html?rid='+this.rid+'&room='+this.room+'&name='+this.name;
          }
        }
  },
  created() {
        let urlParams = new URLSearchParams(window.location.search);
        this.rid = urlParams.get('rid') ?? (Math.random() + 1).toString(36).toUpperCase().substring(7);
        this.room = urlParams.get('room')
        this.name = urlParams.get('name');
  },
}
</script>

<template>
<div id=header>
    <h1 class=logo>谝&nbsp;聊</h1>
</div>
<v-container id="profile">
<v-form id="form">
  <v-row>
    <v-col
      md="20"
    >
      <v-text-field
        v-model="room"
        :rules="roomRules"
        label="聊天房名称"
      ></v-text-field>
    </v-col>
  </v-row>

  <v-row>
    <v-col
      md="20"
    >
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="昵称"
        required
      ></v-text-field>
    </v-col>

  </v-row>

  <v-row>
    <v-col md="20" >
          <v-btn color="primary" elevation="4" @click="checkin">开始聊天</v-btn>
    </v-col>
  </v-row>
</v-form>
</v-container>
</template>

<style>
#header{margin:.5em 0;text-align:center;padding:.5em 0;}
#header .logo{font-size:1rem;}
#profile{width:390px;}
</style>
