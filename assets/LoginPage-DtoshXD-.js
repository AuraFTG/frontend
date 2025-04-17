import{r as c,u as b,j as e,L as p}from"./index-Do5gd_Kn.js";const f=a=>{const[s,o]=c.useState(""),[l,d]=c.useState(""),[r,n]=c.useState({}),m=b(),[i,x]=c.useState(!1),h=()=>{const t={};return s?/\S+@\S+\.\S+/.test(s)||(t.email="Email inválido"):t.email="El email es requerido",l?l.length<6&&(t.password="La contraseña debe tener al menos 6 caracteres"):t.password="La contraseña es requerida",n(t),Object.keys(t).length===0};return{email:s,setEmail:o,password:l,setPassword:d,errors:r,isLoading:i,handleSubmit:async t=>{if(t.preventDefault(),m("/"),h()){x(!0);try{await new Promise(u=>setTimeout(u,1e3)),a&&a(s,l)}catch(u){console.error("Error al iniciar sesión:",u)}finally{x(!1)}}}}},g=({onSubmit:a})=>{const{email:s,setEmail:o,password:l,setPassword:d,errors:r,isLoading:n,handleSubmit:m}=f(a);return e.jsxs("div",{className:"w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{className:"mt-6 text-3xl font-extrabold text-gray-900",children:"Iniciar sesión"}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600",children:["¿No tienes una cuenta?"," ",e.jsx(p,{to:"/auth/register",className:"font-medium text-blue-600 hover:text-blue-500",children:"Regístrate"})]})]}),e.jsxs("form",{className:"mt-8 space-y-6",onSubmit:m,children:[e.jsxs("div",{className:"space-y-4 rounded-md",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Correo electrónico"}),e.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,value:s,onChange:i=>o(i.target.value),className:`mt-1 block w-full px-3 py-2 border ${r.email?"border-red-500":"border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500`,placeholder:"correo@ejemplo.com"}),r.email&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:r.email})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Contraseña"}),e.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,value:l,onChange:i=>d(i.target.value),className:`mt-1 block w-full px-3 py-2 border ${r.password?"border-red-500":"border-gray-300"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500`,placeholder:"********"}),r.password&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:r.password})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"}),e.jsx("label",{htmlFor:"remember-me",className:"ml-2 block text-sm text-gray-900",children:"Recordarme"})]}),e.jsx("div",{className:"text-sm",children:e.jsx("a",{href:"#",className:"font-medium text-blue-600 hover:text-blue-500",children:"¿Olvidaste tu contraseña?"})})]}),e.jsx("div",{children:e.jsx("button",{type:"submit",disabled:n,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300",children:n?e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Procesando..."]}):"Iniciar sesión"})})]})]})};function y(){const a=(s,o)=>{console.log("Login con:",s,o)};return e.jsx("section",{className:"flex justify-center py-4",children:e.jsx(g,{onSubmit:a})})}export{y as default};
