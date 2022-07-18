function responsive_1(){    
    document.getElementById("hot-trending").style.height = screen.height * 0.4 + "px"; // vcl phai co px nha
    document.getElementById("right-side-spotlight").style.height = screen.height * 0.4 + "px"; // vcl phai co px nha
    document.getElementById("top-section").style.height = screen.height *0.6 + "px";
}
/*  #1 spotlight - changing animation
        -designed by : phuongzoro
        -any changes require permissions and please BACK UP before manipulating codes.
        
        ----------------------------Begin #1-----------------------------
        -----------------------------------------------------------------
        -----------------------------------------------------------------
*/ 
//variable : 
let count_1 = 0;
let count_2 = 0;
let time_out_1a = 5000;
let time_out_1b = 5000;
let switch_m =0;
let switch_r =0;
let color_gr = "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(2,0,36,1) 50%, rgba(255,255,255,1) 100%)";
var spotlight_list = [
    ["https://www.leagueoflegends.com/static/open-graph-2e582ae9fae8b0b396ca46ff21fd47a8.jpg","League of Legends"],
    ["https://jeuxpourtous.org/wp-content/uploads/2021/08/Halo-la-date-de-sortie-possible-dInfinite-divulguee.jpg","Halo"],
    ["https://images4.alphacoders.com/115/thumb-1920-1151718.jpg","Guadians of Galaxy"],
    ["https://anphat.com.vn/media/news/8191_tat_tan_tat_ve_back_4_blood_sieu_pham_game_zombie_2021_va_cau_hinh_de_choi__2_.jpg","Back 4 Blood"],
    ["https://phongvu.vn/cong-nghe/wp-content/uploads/2021/06/tetra-preorder-standard-edition-epic-image-hero-carrousel-3840x2160-3840x2160-430977812.jpeg","Far cry 6"]
];
function changing_1(){ 
    document.getElementById("main-spotlight-img").setAttribute("src",spotlight_list[count_1][0]);
    document.getElementById("title-of-main-spotlight").innerHTML=spotlight_list[count_1][1];
    let x=0;
    while (x<5) {
        document.getElementById("htl" + x).style.background ="transparent";
        x++;
    }
    document.getElementById("htl" + count_1).style.background =color_gr;
    }
function spotlight_animation_1() {
    setTimeout(() => changing_1(), time_out_1a);
    count_1++;
    setTimeout(() => spotlight_animation_1(), time_out_1a);
    time_out_1a=5000;
    if (count_1==5) {count_1 =0;}
}
var side_spotlight_list =[
    ["https://s3.gaming-cdn.com/images/products/7154/orig/it-takes-two-pc-game-steam-cover.jpg","It takes two"],
    ["https://cdn.shopify.com/s/files/1/0747/3829/products/mL5342_1024x1024.jpg?v=1620815233", "Resident evil 8"],
    ["https://cdn.shopify.com/s/files/1/0747/3829/products/mL5650_1024x1024.jpg?v=1630785953", "Deathloop"],
];
function changing_2(){ 
    document.getElementById("right-side-spotlight-img").setAttribute("src",side_spotlight_list[count_2][0]);
    document.getElementById("title-of-side-spotlight").innerHTML=side_spotlight_list[count_2][1];
    let x=0;
    while (x<3) {
        document.getElementById("ng" + x).style.background ="transparent";
        x++;
    }
    document.getElementById("ng" + count_2).style.background =color_gr;
}
function spotlight_animation_2() {
    setTimeout(() => changing_2(), time_out_1b);
    count_2++;
    setTimeout(() => spotlight_animation_2(), time_out_1b);
    if (count_2==3) {count_2 =0;}
}
// main spotlight button switcher part
function onclick_htl0() {
    switch_m =0;
    switch_button();
}
function onclick_htl1() {
    switch_m =1;
    switch_button();
}
function onclick_htl2() {
    switch_m =2;
    switch_button();
}
function onclick_htl3() {
    switch_m =3;
    switch_button();
}
function onclick_htl4() {
    switch_m =4;
    switch_button();
}
function switch_button() {
    let x=0;
    document.getElementById("main-spotlight-img").setAttribute("src",spotlight_list[switch_m][0]);
    document.getElementById("title-of-main-spotlight").innerHTML=spotlight_list[switch_m][1];
    while (x<5) {
        document.getElementById("htl" + x).style.background ="transparent";
        x++;
    }
    document.getElementById("htl" + switch_m).style.background =color_gr;
    time_out_1a=10000;
    count_1 = switch_m;
}
//side - newgame - button switch 
function onclick_ng0() {
    switch_r =0;
    switch_button_r();
}
function onclick_ng1() {
    switch_r =1;
    switch_button_r();
}
function onclick_ng2() {
    switch_r =2;
    switch_button_r();
}
function switch_button_r() {
    let x=0;
    document.getElementById("right-side-spotlight-img").setAttribute("src",side_spotlight_list[switch_r][0]);
    document.getElementById("title-of-side-spotlight").innerHTML=side_spotlight_list[switch_r][1];
    while (x<3) {
        document.getElementById("ng" + x).style.background ="transparent";
        x++;
    }
    document.getElementById("ng" + switch_r).style.background =color_gr;
    time_out_1b=10000;
    count_1 = switch_r;
}
/*  #1 spotlight - changing animation
        -designed by : phuongzoro
        -any changes require permissions and please BACK UP before manipulating codes.
        
        ----------------------------END #1-----------------------------
        -----------------------------------------------------------------
        -----------------------------------------------------------------
*/ 

