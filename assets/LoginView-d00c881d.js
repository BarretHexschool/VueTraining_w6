import{_ as d,o as c,c as p,d as e,h as a,v as l,i as u}from"./index-edb228bd.js";const{VITE_APP_URL:m}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"2259buyer",BASE_URL:"/VueTraining_w6/",MODE:"production",DEV:!1,PROD:!0},_={data(){return{user:{username:"",password:""}}},methods:{login(){this.$http.post(`${m}/v2/admin/signin`,this.user).then(t=>{const{token:s,expired:r}=t.data;document.cookie=`hexToken=${s}; expires=${new Date(r)}`,this.$router.push("/admin/products")}).catch(t=>{this.alert(t.response.data.message)})},alert(t){window.alert(`${t}`)}}},h={id:"app",class:"login-center container d-flex align-items-center justify-content-center",style:{"min-height":"calc(100vh - 50px)"}},f=e("div",{class:"mb-3"},[e("h4",{class:"text-primary fw-bold"},"歡迎使用 鮮堡漢堡 管理系統")],-1),w={class:"mb-3"},b=e("label",{for:"email",class:"form-label"},"帳號：",-1),x={class:"mb-3"},g=e("label",{for:"password",class:"form-label"},"密碼：",-1),v=e("button",{type:"submit",class:"btn btn-primary w-100 mb-3"},"登入",-1);function V(t,s,r,y,n,i){return c(),p("main",h,[e("form",{class:"col-auto shadow rounded p-4",onSubmit:s[2]||(s[2]=u((...o)=>i.login&&i.login(...o),["prevent"]))},[f,e("div",w,[b,a(e("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":s[0]||(s[0]=o=>n.user.username=o)},null,512),[[l,n.user.username]])]),e("div",x,[g,a(e("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":s[1]||(s[1]=o=>n.user.password=o)},null,512),[[l,n.user.password]])]),v],32)])}const E=d(_,[["render",V]]);export{E as default};
