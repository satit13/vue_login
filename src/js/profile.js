export default {
  name: 'Profile',
  data () {
    return {
      TitleName: 'USER PROFILE',
      userID:'',
      usercode:'',
      username:'',
      rolecode:'',
      rolename: '',
      appcode: '',
      appname: '',
      id :0,
      menu_list:[]
    }
  },
  methods: {
    showUser (data) {
      //menu_list =[]
      //this.userID = data.id
      this.usercode = data.usercode
      this.username = data.username
      this.rolecode = data.rolecode
      this.rolename = data.rolename
      this.appcode = data.appcode
      this.appname = data.appname
      //alert(user.appname)
      this.img = require("../assets/rush.png")
      this.id = data.id
      //this.menu_list=[]
       for(var k=0; k< data.menu.length; k++){
            var m = {"id":k , menucode:data.menu[k].menucode, menuname: data.menu[k].menuname, 
                img:require("../assets/so.png")}
            this.menu_list.push(m)
            console.log('menu img =>'+this.menu_list[k].img)
            }
      }
    },
  mounted (user){
    console.log(this.$route.params.user)
    var data = this.$route.params.user
    console.log(data.menu)
    this.showUser(data)
  }
}