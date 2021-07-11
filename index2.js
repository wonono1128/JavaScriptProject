//시계
const clock = document.querySelector("#clock");
function getTime() {
  const date = new Date();
  const today =  date.getTime();

  const hours = String(
    Math.floor(date.getHours())).padStart(2, "0");
  const minutes = String(
    Math.floor((date.getMinutes()))
  ).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2,"0" );
  clock.innerText = `${hours}시 ${minutes}분 ${seconds}초`;
}

setInterval(getTime, 1000);




//이미지
const image_file = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
  ];
  const img_cg = image_file[Math.floor(Math.random() * image_file.length)];
  console.log(img_cg);
  // const bgimage = document.createElement("img")
  const bgimage = document.body.style.backgroundImage = "url("+`${img_cg}`+")";
  
  document.body.style.backgroundSize = "100%";








  //로컬스토리지 이름
  
 const name_form =document.querySelector("#name_form");  
 const today_form =document.querySelector("#today_form");  
 const work_form =document.querySelector("#work_form");  
 const your_name =document.querySelector("#your_name");
 const name_table =document.querySelector("#name_table");  
 const today_table =document.querySelector("#today_table");  
 const work_table =document.querySelector("#work_table");  
 const name_tr =document.querySelector("#name_tr");  
 const today_tr =document.querySelector("#today_tr");  
 name_form.addEventListener("submit",name_save);


//이름 입력후 엔터시 
 function name_save(event){
  event.preventDefault();
  const New_your_name = your_name.value;
  localStorage.setItem("name"+New_your_name,New_your_name);    //로컬스토리지에 저장
  name_save2(New_your_name);    //아래 동작시킴
 }

 function name_save2(New_your_name){
  your_name.style.display = "none";
  const New_your_name2 = localStorage.getItem("name"+New_your_name,New_your_name);
//입력한 이름 추가
  const name_tr = document.createElement("tr");
  const name_td = document.createElement("td");
  const name_span = document.createElement("span");
  name_table.appendChild(name_tr);
  name_tr.appendChild(name_td);
  name_td.appendChild(name_span);
  name_span.style.color="white";
  name_span.style.fontSize = "30px";
  name_span.style.fontWeight = "bold";
  name_td.style.textAlign = "center";
  name_span.innerText = "hello" + New_your_name2;


//할일 물어보기


  const today_tr = document.createElement("tr");
  const today_td = document.createElement("td");
  const today_span = document.createElement("span");
  today_table.appendChild(today_tr);
  today_tr.appendChild(today_td);
  today_td.appendChild(today_span);
  today_span.style.color="white";
  today_span.style.fontSize = "30px";
  today_span.style.fontWeight = "bold";
  today_td.style.textAlign = "center";
  today_span.innerText = "Whay is your main focus for today?";

//할일 입력  
  const today_tr2 = document.createElement("tr");
  const today_td2 = document.createElement("td");
  const today_input = document.createElement("input");
  today_table.appendChild(today_tr2);
  today_tr2.appendChild(today_td2);
  today_td2.appendChild(today_input);
  today_input.type="text";
  today_input.id="today_work";
  today_input.style.width="500px";


  //로그인시 바로나오기

  const work_key_Save = localStorage.getItem(work_key,work_array);
  
  work_array222 = work_array.filter((event) => event.name !== New_your_name);

if(New_your_name == JSON.parse(work_key_Save)[0].name){
  if(work_key_Save){
    const parsed_work_key_Save = JSON.parse(work_key_Save);
    work_array = parsed_work_key_Save;
    parsed_work_key_Save.forEach(today_save2);
  }
}
 }




 today_form.addEventListener("submit",today_save);
 let work_array = [];
 const work_key = "work_key";
//할일 입력후 엔터시 
 function today_save(event){
  event.preventDefault();
  const New_your_name2 = your_name.value;
  const today_work = document.querySelector("#today_work");
  const New_today_work = today_work.value;
  today_work.value = "";          //빈칸으로 변경
  const New_today_work_object = {
    id : Date.now(),
    text : New_today_work,
    name : New_your_name2,
  }
  work_array.push(New_today_work_object);
  console.log(work_array);
  save_work_array(work_array);
  today_save2(New_today_work_object);    //아래 동작시킴

 }


 function save_work_array(){
  localStorage.setItem(work_key,JSON.stringify(work_array));    //로컬스토리지에 저장
 }

 function today_save2(New_today_work){
  //const New_today_work2 = localStorage.getItem("work_array",work_array);
  const work_tr = document.createElement("tr");
  const chk_td = document.createElement("td");
  const work_td = document.createElement("td");
  const delete_td = document.createElement("td");
  const work_input = document.createElement("input");
  const work_span = document.createElement("span");
  const delete_button = document.createElement("button");

  

  work_table.appendChild(work_tr);
  work_tr.appendChild(chk_td);
  chk_td.appendChild(work_input);
  work_input.type="checkbox";
  
  work_tr.id = New_today_work.id;

  work_tr.appendChild(work_td);
  work_td.appendChild(work_span);
  work_span.innerText= New_today_work.text;
  work_span.style.fontSize = "25px";
  work_span.style.color= "white";
  work_span.style.fontWeight= "bold";

  work_tr.appendChild(delete_td);
  delete_td.appendChild(delete_button);
  delete_button.innerText="삭제";
  delete_button.id ="delete_btn";
  delete_button.style.width="50px";
  delete_button.style.height="20px";
  delete_button.addEventListener("click" , delete_work)
 }

 //삭제버튼 클릭시
 function delete_work(event){
  event.preventDefault();
  const New_today_work2 = localStorage.getItem(work_key,work_array);
  console.log(parseInt(New_today_work2.id));

  const delete_td = event.target.parentElement;
  const delete_tr = delete_td.parentElement

  console.log(delete_tr.id);
  delete_tr.remove();
  console.log("New_today_work2"+event.id);
  console.log("delete_tr"+parseInt(delete_tr.id));

  work_array = work_array.filter((event) => event.id !== parseInt(delete_tr.id));
  save_work_array();
 }

