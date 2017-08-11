<template> 
  <div class="Profile"> 
   <div class="container"> 
      <h1>Title Name</h1> 
      <img src="../assets/rush.png" width="200px" height="200px"> 
      <hr /> 

      <div class="contant_profile" >  
        <p> 
        <div class="label_hd">UserID : </div><div class="label_bd"> {{id}} </div> 
        </p> 
        <p>  
        <div class="label_hd">UserCode : </div><div class="label_bd"> {{usercode}}</div> 
        </p> 
        <p> 
        <div class="label_hd">UserName : </div><div class="label_bd"> {{username}} </div> 
        </p> 
        <p> 
        <div class="label_hd">Role : </div><div class="label_bd"> {{rolecode}} | {{rolename}}</div> 
        </p> 
        <p> 
        <div class="label_hd">App : </div><div class="label_bd"> {{appcode}} | {{appname}}</div> 
        </p> 
      </div> 
      <div class="contant_profile" > 
        <p> Menu : </p> 
        <button class="bt_menu" v-for="menus in menu_list">
				<h1>{{ menus.menucode }}</h1>
				<img :src="menus.img">
		</button>
       
      </div> 
   </div> 
  </div> 
</template> 

<script src="../js/profile.js"></script>

