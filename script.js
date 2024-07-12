async function fun(){
    let r=await fetch("http://localhost:3000/student")
    let c=await r.json()
    let sh= document.getElementById('showdata')
    let d=c.map((e)=>`
    <tr>
       <td>${e.id}</td>
       <td>${e.name}</td>
       <td>${e.age}</td>
       <td>${e.marks}</td>
       <td>${e.city}</td>
       <td> <i class="fa-solid fa-trash" onclick="mydelete(${e.id})" id="btn"></i></td>
       <td> <i class="fa-solid fa-pen-to-square"onclick="myupdate(${e.id})" id="btn1"></i></td>
       
       

    </tr>

     

    `).join("")
    sh.innerHTML=d
    
}
fun()

function addd(){
    let data={
        id:document.getElementById('id').value, 
        name:document.getElementById('stname').value, 
        city:document.getElementById('city').value, 
        marks:document.getElementById('marks').value, 
        age:document.getElementById('age').value, 
    }
    fetch("http://localhost:3000/student",{
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>alert("inserted"))
    .catch(rs=>alert("error"))
}

function mydelete(id){
    fetch(`http://localhost:3000/student/${id}`,{
        method:'DELETE'
    })
    .then(res=>alert("successfully deleted"))
}
function fun2(){
    let d=document.getElementById('theme')
    d.classList.toggle("main")
}
fun2()

var storeid=0
function myupdate(id){
    storeid=id;
    document.getElementById("myfrm").style.display="block"
    document.getElementById('id1').value=id
}

function update(){
    let mydata={
        id:document.getElementById('id1').value,
        name:document.getElementById('name1').value,
        age:document.getElementById('age1').value,
        marks:document.getElementById('marks1').value,
        city:document.getElementById('city1').value,
    }
    fetch(`http://localhost:3000/student/${storeid}`,{
        method:"PUT",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(mydata)
    })
    .then(res=>alert("edit successfully"))
    .catch(res=>alert("error"))
}
function fun2(){
         let div1=document.getElementById("tog")
        div1.classList.toggle("main")
}
async function myupdate(){
    let mydata= await fetch("http://localhost:3000/student")
    let con=await mydata.json()
    let show=document.getElementById('demo')
    let y=con.map((e)=>`
    <input type="text" value="${e.id}"> <br>
    <input type="text" value="${e.name}"> <br>
    <input type="text" value="${e.city}"> <br>
    <input type="text" value="${e.marks}"> <br>
    <input type="text" value="${e.age}"> <br>
    `)
    show.innerHTML=y

    
    
}