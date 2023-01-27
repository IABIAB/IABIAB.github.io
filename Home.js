"use strict";

const m_id = document.getElementById('M_id');
const m_pw = document.getElementById('M_pw');
const do_login = document.getElementById('Login_button');
const regist_member = document.getElementById('Regist_button');

function Inspect_id() {
  if(m_id.value.length >0  && m_pw.value.length >= 5 ){
    do_login.disabled = false;
    do_login.style.backgroundColor = "#646EFF";
    do_login.style.borderColor = "black";
  }else{
    do_login.style.backgroundColor = "#64A0FF";
    do_login.disabled = true;
  }
}
function Mypage(){
    location.replace("./MyPage.html");
}
function GetInfoPage(){
    location.replace("./Regist_Member_Page1.html");
}
m_id.addEventListener('keyup', Inspect_id);
m_pw.addEventListener('keyup', Inspect_id);
do_login.addEventListener('click',Mypage);
regist_member.addEventListener('click',GetInfoPage);
