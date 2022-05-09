let user =JSON.parse(localStorage.getItem("userdata"))



function checkUser(e)
{
    e.preventDefault()
    let email=document.querySelector("#mail").value;
    let pass=document.querySelector("#pass").value;
    console.log(email,pass)
    var count=0; 
    for(let i=0;i<user.length;i++)
     {
    
          if(user[i].email==email && user[i].password==pass)
          {
              alert("Login Successfull!")
              window.location.href="index.html"
              break;
          } 
          else if(user[i].email!=email || user[i].password!=pass)
          {
              count++;
              console.log(count)
              if(count==user.length)
              {
                alert("Invalid Credentials")
              }
          }

     }
     
}