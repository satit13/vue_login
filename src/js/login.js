import api from '../services/services.js'

export default {
  name: 'login',
  data () {
    return {
      user: '',
      pwd:'',
      username:'',
      rolename:'',
      appname:'',
      status:''
    }
  },
  methods: {
    loginSubmit (user,pwd) {
      //alert('login worked ->'+user+' pass word : '+pwd)
      console.log(user)
      this.callLogin(user,pwd)
    },
    callLogin (user,pwd) {
      // - call api http://venus:9000/login?usercode=tom&password=1234&appid=1
    api.getApi('http://venus:9000/login?usercode='+user+'&password='+pwd+'&appid=1',
      (data)=>{
      
        var d = data.body
        console.log(d)
        //alert(d.status)
        if (d.status =='success'){
            this.username = d.data.username
            this.rolename = d.data.rolename
            this.appname = d.data.appname 
            this.status = d.status

            this.$router.push({ name:'Profile', params:{ user: d.data}})
          }else{
            alert('error login ...!')
          }


        }
      ,
      (response)=>{
          console.log(response)
          var d = response.body
          //alert('error call api '+d.status)
          this.username = "-"
          this.rolename = "-"
          this.appname = "-" 
          this.status = d.message
        }
      )
    }
  }
}