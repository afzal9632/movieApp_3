let data=JSON.parse(localStorage.getItem("userdata")) || [];

function udata(n,m,e,p)
{
    this.name=n,
    this.contact=m,
    this.email=e,
    this.password=p
}


function userdata(e){
   e.preventDefault()

   let nam=document.querySelector("#name").value;
   let contact=document.querySelector("#contact").value
   let mail=document.querySelector("#email").value;
   let pass=document.querySelector("#password").value
   let obj=new udata(nam,contact,mail,pass)
   data.push(obj)
    
   localStorage.setItem("userdata",JSON.stringify(data))

// document.querySelector("#form").value=null
   document.querySelector("#name").value=null;
   document.querySelector("#contact").value=null;
   document.querySelector("#email").value=null;
   document.querySelector("#password").value=null;
}