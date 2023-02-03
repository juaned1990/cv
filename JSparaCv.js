//**---------mostrar_ocultar_datosPersonales---------------------- */

function mostrar_datosPersonales(){
    document.getElementById("lista1").style.display="block";
  
  }
  
  function ocultar_datosPersonales(){
    document.getElementById("lista1").style.display="none";
  
  }
  
  function mostrar_ocultar_datosPersonales(){
    var texto= document.getElementById("lista1");
  
    if(texto.style.display== "none"){
    mostrar_datosPersonales()
    document.getElementById("boton1").innerHTML="Ocultar";
      
  }
  else{
    ocultar_datosPersonales();
    document.getElementById("boton1").innerHTML="Datos personales";
    }
  } 

//**---------mostrar_ocultar_estudiosRealizados----------------------- 

function mostrar_estudiosRealizados(){
    document.getElementById("lista2").style.display="block";
  
  }
  
  function ocultar_estudiosRealizados(){
    document.getElementById("lista2").style.display="none";
  
  }
  
  function mostrar_ocultar_estudiosRealizados(){
    var texto= document.getElementById("lista2");
  
    if(texto.style.display== "none"){
    mostrar_estudiosRealizados()
    document.getElementById("boton2").innerHTML="Ocultar"
      
  }
  else{
    ocultar_estudiosRealizados();
    document.getElementById("boton2").innerHTML="Estudios Realizados"
    }
  } 

  //**---------mostrar_ocultar_experienciaLaboral----------------------- 

function mostrar_experienciaLaboral(){
    document.getElementById("lista3").style.display="block";
  
  }
  
  function ocultar_experienciaLaboral(){
    document.getElementById("lista3").style.display="none";
  
  }
  
  function mostrar_ocultar_experienciaLaboral(){
    var texto= document.getElementById("lista3");
  
    if(texto.style.display== "none"){
    mostrar_experienciaLaboral()
    document.getElementById("boton3").innerHTML="Ocultar"
      
  }
  else{
    ocultar_experienciaLaboral();
    document.getElementById("boton3").innerHTML="Experiencia Laboral"
    }
  } 

  //**---------mostrar_ocultar_masSobreMI----------------------- 
  function mostrar_masSobreMi(){
    document.getElementById("lista4").style.display="block";
  
  }
  
  function ocultar_masSobreMi(){
    document.getElementById("lista4").style.display="none";
  
  }
  
  function mostrar_ocultar_masSobreMi(){
    var texto= document.getElementById("lista4");
  
    if(texto.style.display== "none"){
    mostrar_masSobreMi()
    document.getElementById("boton4").innerHTML="Ocultar"
      
  }
  else{
    ocultar_masSobreMi();
    document.getElementById("boton4").innerHTML="Más sobre Mi"
    }
  } 


