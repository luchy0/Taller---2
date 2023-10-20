
function generarTablita() {

    //se crea la tabla 
    var tabla = document.createElement('table');
    //se obtiene el elemento div
    var divTableContainer = document.getElementById('tableContainer');

    //Añadiendo la tablita en el div
    divTableContainer.appendChild(tabla);

    //se genera la primera fila y se inserta de último
    var fila1 = tabla.insertRow(-1);
    //se genera la primera celda y se inserta en la fila
    var celda1 = fila1.insertCell(0);
    celda1.rowSpan = 3;
    //se crea la imagen 
    var imagenArbolito = crearNodoImagen('../recursos/arbol.png', 'arbolito');
    //adicionarNodoAContenedor('imagenArbolito', 'newColumn');

    //se inserta la imagen en la celda
    celda1.appendChild(imagenArbolito);

    //-------------------
    var celda2 = fila1.insertCell(1);
    var imagenTextoRojo = crearNodoImagen('../recursos/texto en rojo.png', 'Texto en rojito');
    celda2.appendChild(imagenTextoRojo);

    //--------------------
    var celda3 = fila1.insertCell(2);
    var strong1 = document.createElement('strong');
    strong1.innerText = 'Thursday, october 11, 2001';
    celda3.appendChild(strong1);
    celda3.style.textAlign = 'center';
    
    //---------------------
    var celda4 = fila1.insertCell(3);
    var a = document.createElement('a');
    a.innerText = 'text only';
    a.href = '#'
    celda4.appendChild(a);
    celda4.style.textAlign = 'end';
    
    //-------------------------

    var fila2 = tabla.insertRow(-1);
    var celda5 = fila2.insertCell(0);
    celda5.colSpan = 2;
    celda5.style.fontSize = '40px';
    celda5.style.textAlign = 'center';
    celda5.style.padding = '10px';
    var strong2 = document.createElement('strong');
    strong2.innerHTML = 'Sample Web page <br> Table Layout';
    celda5.appendChild(strong2);

    //---------------------------

    var fila3 = tabla.insertRow(-1);
    var celda6 = fila3.insertCell(0);
    celda6.colSpan= 3;
    celda6.style.backgroundColor = '#626495';
    celda6.style.textAlign = 'center';
    celda6.style.paddingTop = '-5px';
    celda6.style.color= 'aliceblue';
    celda6.innerText = 'HOME | DOWNLOAD | SITE INDEX | SEARCH | CONTACT US'

    //--------------------------

    var fila4 = tabla.insertRow(-1);
    var celda7 = fila4.insertCell(0);
    var imagenTitanic = crearNodoImagen('../recursos/poster titanic.png', 'titanikito');
    celda7.appendChild(imagenTitanic);

    //--------------------------

    var celda8 = fila4.insertCell(1);
    celda8.colSpan = 2;
    var p = document.createElement('p');
    p.style.paddingLeft = '5px'
    p.innerHTML = 'This is just a corny way of showing you how a table can<br>organize the layout of a web page. Desingning a prototype<br>by sketching in a piece of paper is agood place to start.<br>You need to, however, have the skills to transfer that<br>concept to HTML. Tables help you organize it.'
    celda8.appendChild(p);

    //--------------------------

    var celda9 = fila4.insertCell(2);
    var imagenFrame = crearNodoImagen('../recursos/frame free.png', 'framecito');
    celda9.appendChild(imagenFrame);


}







