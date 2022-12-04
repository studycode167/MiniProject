<!-- 
  단일파일 컴포넌트로 상단 메뉴를 담당
  menus라는 배열변수로 만들어 클릭할 때마다 onMovePage 호출됨
  부트스트랩@5.2의 설정을 따라서 만듦
  ms-auto: 왼쪽 마진값 설정
  me-auto: 오른쪽 마진값 설정
 -->

<template>
  <nav classs = "navbar navbar-expend-lg navbar-dark bg-dark">
    <div class = "container-fluid">
      <a class = 'bavvbar-brand' href="/">Blog</a>
      <button
        class ="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav">
        <span class = "navbar-toggler-icon"></span>
      </button>
      <div class = "collapse navbar-collapse" id = "navbarNav">
        <ui
        :class = "{'navbar-nav': true, 'me-auto': menu.me_auto}"
        v-for="menu in category"
        :key="menu.id"
        >
          <li class = "nav-item" v-for ="menu_object in menu.value" :key="menu_object.key">
            <a
              :class = "{'nav-link': true, active: menu == menu.object.key}"
              @click="onMovePage($event, menu_object)"
              href = "#"
              >{{menu_object.value}}</a>    
          </li>
        </ui>
      </div>
    </div>
  </nav>
</template>

<script>
import {ref, computed} from 'vue'


export default {
  setup(){
    const menu = ref('home')  //프록시 객체
    const menus = [
      {key:"home", value:'홈', URL:'#', position:'left'},
      {key:"app", value: '애플리케이션', URL:"#", position:'left'},
      {key: 'me', value: 'Profile', URL:"#", position: 'right'}
    ]
    const left_menus = computed(()=>menus.filter((i)=>i.posiotion == 'left'))
    const right_menus = coomputed(()=> menus.filter((i) => i.position == 'right'))

    const onMovePage = (evt,menu_object)=>{
      if(evt){
        evt.preventDefault()
      }
      return {
        menu,
        menu_category:[ 
          {
            id: 1,
            me_auto : true,
            value: left_menus.value,
          },
          { id:2, me_auto: false, value: right_menus.value },
        ],
        onMovePage
      }
    }
  },
}
</script>
