/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$().ready(iniciar);

function iniciar() {
    $("#btnE1_1").click(procesarEj1_1);
    $("#btnE1_2").click(procesarEj1_2);
    $("#btnE2").click(procesarEj2);
    $("#btnE3_1").click(procesarEj3_1);
    $("#btnE3_2").click(procesarEj3_2);
    $("#btnE4_1").click(procesarEj4_1);
    $("#btnE4_2").click(procesarEj4_2);
}

var array1 = new Array();
function procesarEj1_1() {
    //$("#pRes1").html("Debugg");
    txt1 = $("#txt1").val();
    if (agregarUsuario(txt1)){
        if(existeUsuario(txt1)) {
            validarUsuario(txt1);
        }
    } else {
         $("#pRes1").html("Usuario demasiado corto");
    }
}
function procesarEj1_2() {
    var str = "";
    for (i=0; i < array1.length; i++) {
        str+=array1[i]+", ";
    }
    $("#pRes1").html(str);
}
function validarUsuario(txt) {
    //$("#pRes1").html("Debugg");
    for (i=0; i < array1.length; i++) {
        if (txt === array1[i]) {
            $("#pRes1").html("Usuario ya existe");
            break;
        } else {
            array1.push(txt);
            $("#pRes1").html("Usuario añadido");
            break;
        }
    }
}
function agregarUsuario(txt) {
    if (txt.length > 3){
        return true;
    }
}

function existeUsuario(txt) {
    if (array1.length === 0) {
        array1.push(txt);
        $("#pRes1").html("Usuario añadido");
    } else {
        return true;
    }
}

function procesarEj2() {
    var cars = ["Saab", "Volvo", "BMW", "Hyundai"];
    var array2 = new Array();
    for (i=0; i < cars.length; i++) {
        car = cars[i];
        array2.push(car.length);
    }
    //$("#pRes2").html(cars);
    $("#pRes2").append(array2);
}

var array3 = new Array();
function procesarEj3_1() {
    num1 = $("#num1").val();
    array3.push(num1);
    $("#pRes3").html("Numero agregado correctamente");
}
var may = 0;
function procesarEj3_2() {
    for (i=0; i < array3.length; i++) {
        if (array3[i] > may){
            may=array3[i];
        }
    }
    $("#pRes3").html(may);
}
var array4 = new Array();
function procesarEj4_1() {
    txt1 = $("#txt3").val();
    array4.push(txt1);
    $("#pRes4").html("String agregado correctamente");
}
function procesarEj4_2() {
    var str = "";
    for (i=0; i < array4.length; i++) {
        str+=array4[i]+", ";
    }
    $("#pRes4").html(str);
}
