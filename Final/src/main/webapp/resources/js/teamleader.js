
// 22-07-17 HIKARI
// side bar 마이페이지 텍스트 호버 함수
// 해당 함수는 mypage 폴더내의 모든 파일들과 연관있음
let myPage_side_text = document.querySelectorAll(".myli>a");
textHover(myPage_side_text);


let info_before = document.querySelectorAll(".info_before");
let update_before = document.querySelectorAll(".update_before");

let info_after = document.querySelectorAll(".info_after");
let update_after = document.querySelectorAll(".update_after");

let update_submit = document.querySelectorAll(".update_submit");


let formsection = document.querySelectorAll(".formsection");

for(let i=0; i<update_before.length; i++){
    update_before[i].addEventListener('click', function(){
    	console.log("gd");
        display(info_after[i],"block");
        display(update_after[i],"block");
        display(formsection[i],"block");

        display(info_before[i],"none");
        display(update_before[i],"none");
    })
}

for(let i=0; i<update_after.length; i++){
    update_after[i].addEventListener('click', function(){
        display(info_after[i],"none");
        display(update_after[i],"none");
        display(formsection[i],"none");

        display(info_before[i],"block");
        display(update_before[i],"block");

        update_submit.action = "/loginChk";
    	update_submit.submit();

    })
}






// ! =====================함수존=======================
// 22-09-28 SLEEP 탈퇴시 확인 알림창
function MemDeleteBtn() {
	let UserOut = document.querySelector("#UserOut");
    if (confirm("정말 탈퇴하시겠습니까? 탈퇴시 기존 정보는 복구불가입니다.")){
        alert("탈퇴완료되었습니다.");
        UserOut.action = '/UserDelete';
        UserOut.submit();
    }
    else {
        return false;
    }
}


// * 22-09-02 HIKARI 텍스트호버 함수
/**
 * 해당 함수를 적용하려면 querySelectorAll로 li 요소를 가져와야함
 * 호버시 진행될 이벤트를 (param)안에 넣어주면 알아서 적용됨
 * @example textHover(param)
 */
 function textHover(param){
    for(let i=0; i<param.length; i++){
        param[i].addEventListener('mouseover',function(){
            textColor(param[i],"rgba(248,58,37,1)");
            transition(param[i],".5s");
            console.log("ok");
    
            param[i].addEventListener('mouseout',function(){
            textColor(param[i],"rgba(25, 25, 25, 1)");
            transition(param[i],"1s");
            console.log("ok");
            })
        })
    }
}



// * 22-09-02 HIKARI 드롭다운 함수
/**
 * 이벤트 발생시? 어떤 요소가? 어떤 스위치가?
 * @example dropDown(myAlarm,myAlarm_drop,flagMyAlarm);
 */
function dropDown(param,ele,flag){
    param.addEventListener('click',function(){
        if(flag == false){
            //본인 코드 알아서 들감
            display(ele,"block");
            flag =! flag;
        }
        else if(flag == true){
            //본인 코드 알아서 들감
            display(ele,"none");
            flag =! flag;
        }
    })
}


// * 22-08-23 HIKARI 컬러 함수
/**
 * 효과줄 변수 및 컬러 설정
 * @example backColor(Btn,"red")
 */
 function textColor(param,textColor){
    param.style.color=textColor;
}

// * 22-08-23 HIKARI 트랜지션 함수
/**
 * 효과줄 변수입력 및 시간 설정
 * @example transition(Btn,"1s")
 */
 function transition(param,second){
    param.style.transition=second;
    
}

// * 22-08-23 HIKARI 디스플레이 함수
/**
 * 효과줄 변수 및 컬러 설정
 * @example display(sideBar,"none or block")
 */
 function display(param,state){
    param.style.display=state;
}
 //스크롤
 
 
// //수정을 눌렀을 때 input이 disable풀리고 나타나도록
// const corbtn = document.getElementById('corbtn');
// const corbtn2 = document.getElementById('corbtn2');
// const teamnotice_text = document.getElementById('teamnotice_text');
// const teamnotice_form = document.getElementById('teamnotice_form');
// function corbtnclick(){
//     corbtn.style.display = 'none';
//     corbtn2.style.display = 'block';
////     teamnotice_text.disabled = false;
// }
// 
// function corbtnclick2(){
//     corbtn.style.display = 'block';
//     corbtn2.style.display = 'none';
////     teamnotice_text.disabled = true;
//     
//     teamnotice_form.submit();
// }
 