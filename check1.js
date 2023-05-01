function proverit1(){
    pr_otv_zadachi_1 = 'Исследовательский';
    pr_otv_zadachi_2 = 'Творческий';
    pr_otv_zadachi_3 = 'Социальный';
    otv_uch_1 = document.getElementById('z_1').value;
    otv_uch_2 = document.getElementById('z_2').value;
    otv_uch_3 = document.getElementById('z_3').value;
    ball = 0;
    if(otv_uch_1 == pr_otv_zadachi_1){
    ball +=1;
    }
    if(otv_uch_2 == pr_otv_zadachi_2){
    ball +=1;
    }
    if(otv_uch_3 == pr_otv_zadachi_3){
    ball +=1;
    }
    vsego_zadach = 3;
    procent_vip = ball/vsego_zadach * 100;
    document.getElementById('rezultat1').innerHTML = "Задания выполнены верно на "+procent_vip+"%.";
    }
function proverit2(){
    pr_otv_zadachi_1 = '«Молодежный английский сленг»';
    pr_otv_zadachi_2 = '«Современные эффективные способы изучения английского языка»';
    pr_otv_zadachi_3 = '«The great female leaders who changed the course of history»';
    otv_uch_1 = document.getElementById('z_4').value;
    otv_uch_2 = document.getElementById('z_5').value;
    otv_uch_3 = document.getElementById('z_6').value;
    ball = 0;
    if(otv_uch_1 == pr_otv_zadachi_1){
    ball +=1;
    }
    if(otv_uch_2 == pr_otv_zadachi_2){
    ball +=1;
    }
    if(otv_uch_3 == pr_otv_zadachi_3){
    ball +=1;
    }
    vsego_zadach = 3;
    procent_vip = ball/vsego_zadach * 100;
    document.getElementById('rezultat2').innerHTML = "Задания выполнены верно на "+procent_vip+"%.";
    }
function proverit3()
{
    pr_otv_zadachi_1 = 4;
    pr_otv_zadachi_2 = 1;
    pr_otv_zadachi_3 = 5;
    pr_otv_zadachi_4 = 2;
    pr_otv_zadachi_5 = 3;
    otv_uch_1 = document.getElementById('z_7').value;
    otv_uch_2 = document.getElementById('z_8').value;
    otv_uch_3 = document.getElementById('z_9').value;
    otv_uch_4 = document.getElementById('z_10').value;
    otv_uch_5 = document.getElementById('z_11').value;
    ball = 0;

    if(otv_uch_1 == pr_otv_zadachi_1){
    ball +=1;
    }
    if(otv_uch_2 == pr_otv_zadachi_2){
    ball +=1;
    }
    if(otv_uch_3 == pr_otv_zadachi_3){
    ball +=1;
    }
    if(otv_uch_4 == pr_otv_zadachi_4){
    ball +=1;
    }
    if(otv_uch_5 == pr_otv_zadachi_5){
    ball +=1;
    }
    vsego_zadach = 5;
    procent_vip = ball/vsego_zadach * 100;
    document.getElementById('rezultat3').innerHTML = "Задания выполнены верно на "+procent_vip+"%.";
    }
function proverit4(){
    pr_otv_zadachi_1 = 'цель';
    pr_otv_zadachi_2 = 'задачи';
    pr_otv_zadachi_3 = 2;
    pr_otv_zadachi_4 = 1;
    pr_otv_zadachi_5 = 2;
    pr_otv_zadachi_6 = 2;
    pr_otv_zadachi_7 = 1;
    otv_uch_1 = document.getElementById('z_12').value;
    otv_uch_2 = document.getElementById('z_13').value;
    otv_uch_3 = document.getElementById('z_14').value;
    otv_uch_4 = document.getElementById('z_15').value;
    otv_uch_5 = document.getElementById('z_16').value;
    otv_uch_6 = document.getElementById('z_17').value;
    otv_uch_7 = document.getElementById('z_18').value;
    ball = 0;
    if(otv_uch_1.toLowerCase() == pr_otv_zadachi_1){
    ball +=1;
    }
    if(otv_uch_2.toLowerCase() == pr_otv_zadachi_2){
    ball +=1;
    }
    if(otv_uch_3 == pr_otv_zadachi_3){
    ball +=1;
    }
    if(otv_uch_4 == pr_otv_zadachi_4){
        ball +=1;
    }
    if(otv_uch_5 == pr_otv_zadachi_5){
    ball +=1;
    }
    if(otv_uch_6 == pr_otv_zadachi_6){
    ball +=1;
    }
    if(otv_uch_7 == pr_otv_zadachi_7){
        ball +=1;
    }
    vsego_zadach = 7;
    procent_vip = ball/vsego_zadach * 100;
    document.getElementById('rezultat4').innerHTML = "Задания выполнены верно на "+procent_vip+"%.";
    }