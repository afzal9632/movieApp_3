
let i=0;

let data=["https://indiaatoz.in/wp-content/uploads/2021/09/1632828503_maxresdefault.jpg","https://images.hindustantimes.com/img/2022/03/14/550x309/image-via-twitter-71_1647239680230_1647270755766.jpg","https://images.indianexpress.com/2020/10/Beats-Of-Radhe-Shyam-1200.jpg","https://akm-img-a-in.tosshub.com/aajtak/images/story/202204/rrr-1200_2-sixteen_nine.jpg?size=948:533"]  ;

let image=document.createElement("img")
let id= setInterval(function (){
    if(i==data.length)
    {
        i=0
    }
     image.src=data[i]
     document.querySelector("#slideshow").append(image)
     i++
},3000)

let moviedata= []
function movies(n,r,p,i)
{
    this.name=n,
    this.release_date=r,
    this.image=p,
    this.imbd=i
}

let movie=new movies("Kashmier Files","11 March 2022",'https://assets.gadgets360cdn.com/pricee/assets/product/202203/The-Kashmir-Files_1647847812.jpg',9)
moviedata.push(movie)


let movie2=new movies("Heropanti 2","29 April 2022","https://stat2.bollywoodhungama.in/wp-content/uploads/2020/02/Heropanti-2-Poster.jpg",6)
moviedata.push(movie2)

let movie3=new movies("RRR","24 March 2022","https://www.pinkvilla.com/imageresize/_rrr_postponed.jpg?width=752&format=webp&t=pvorg",9)
moviedata.push(movie3)

let movie4=new movies("Radhe Shyam","11 March 2022","https://m.media-amazon.com/images/M/MV5BMzNhOTdlNmUtYzNiYi00MmUxLTg3ZjgtZjk4Y2Y5YTk3ODdiXkEyXkFqcGdeQXVyMTE2MjAzMTU3._V1_.jpg",7)
moviedata.push(movie4)

let movie5=new movies("Sharmaji Namkeen","31 March 2022" , "https://m.media-amazon.com/images/M/MV5BMDBlM2ZjMWEtYmViOS00NmJhLTk2M2YtMjQ3MjIxYWUyMWU3XkEyXkFqcGdeQXVyMTA5MDQxNDQ2._V1_.jpg",8)
moviedata.push(movie5)

let movie6 =new movies("Pushpa","25 December 2021","https://media.finnkino.fi/1012/Event_13299/portrait_medium/Pushpa_1080.jpg?width=412",8)
moviedata.push(movie6)

let movie7=new movies("83","24 December 2021","https://pbs.twimg.com/media/FOWG-a4VgAIrBDq?format=jpg&name=large",7)
moviedata.push(movie7)

let movie8=new movies("Gehraiyaan","11 February 2022","https://upload.wikimedia.org/wikipedia/en/7/7c/Gehraiyaan_film_poster.jpg",6)
moviedata.push(movie8)

let movie9=new movies("Atrangi Re","24 December 2021","https://static.toiimg.com/thumb/msid-73762048,width-219,height-317,imgsize-14010/73762048.jpg",7)
moviedata.push(movie9)



localStorage.setItem("movies",JSON.stringify(moviedata))



let value=document.querySelector("#sort-by").addEventListener("change",sortbyrating);
function sortbyrating()
{
    let sort=document.querySelector("#sort-by").value
    // console.log(sort)
    if(sort=="hrl")
    {
        // console.log(sort)
    moviedata.sort(function(a,b){
        return b.imbd - a.imbd
    })
//   console.log(moviedata) 
    sortbyfn(moviedata)
    }
    if(sort=="lrh")
    {
        moviedata.sort(function(a,b){
            return a.imbd - b.imbd
        })
        sortbyfn(moviedata)
    }
}

function sortbyfn(moviedata)
{
    document.querySelector("#movies").innerText=""
    moviedata.map(function (ele,index){
        let box=document.createElement("div")
        let boximg=document.createElement("div")
        let img=document.createElement("img")
        img.src=ele.image;
       boximg.append(img)
       
       let nam=document.createElement("p")
       nam.innerText=`Name: ${ele.name}`;
    
       let relese=document.createElement("p")
       relese.innerText=`Release Date: ${ele.release_date}`;
    
    
       let imb=document.createElement("p")
       imb.innerText=`IMBD: ${ele.imbd}/10`;
    
       box.append(boximg,nam,relese,imb)
       document.querySelector("#movies").append(box)
    })
}
window.addEventListener("load",function(){
    sortbyfn(moviedata)
})