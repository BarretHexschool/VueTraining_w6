import{_ as s,o as u,c as i,d as o,t as c}from"./index-f40caf4c.js";const{VITE_APP_URL:n,VITE_APP_PATH:a}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"2259buyer",BASE_URL:"/VueTraining_w6/",MODE:"production",DEV:!1,PROD:!0},p={data(){return{product:{}}},methods:{getProduct(){const{id:r}=this.$route.params;this.$http.get(`${n}/v2/api/${a}/product/${r}`).then(t=>{this.product=t.data.product}).catch(t=>{alert(t)})}},mounted(){this.getProduct()}},d=["src"];function l(r,t,_,h,e,P){return u(),i("div",null,[o("h2",null,c(e.product.title),1),o("img",{src:e.product.imageUrl,class:"img-fluid",alt:""},null,8,d),o("p",null,c(e.product.price)+" 元 ",1)])}const f=s(p,[["render",l]]);export{f as default};