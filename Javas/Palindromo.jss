/*function Palindromo(Oracion){
    var espacios = Oracion.replaceAll(" ",'');
    var minusculas = espacios.toLowerCase();
    var separar = minusculas.split('');
    var reves = separar.reverse();
    var unido = reves.join('');
    console.log(minusculas);
    console.log(unido)
    if(minusculas == unido){
        return true
    } else {
        return false
    }
}*/

function Palindrome(Sentence){
    const NoSpecial = Sentence.replace(/[^\w]/g, ''); //Esta sintaxis ayuda a quitar los caractéres especiales. se abre con / y dentro de los paréntesis cuadrados [] y se coloca ^. \w engloba todos los las letras, números y guión bajo. Se cierran paréntesis y se pone /. La g significa global, para que aplique a todo el string.
    //const NoSpecial = Sentence.replace(/[^a-zA-Z0-9]/g, ''); Otra manera de escribirlo. Aquí estamos diciendo que todo lo que no sea a-z (minúsculas), A-Z (mayúsculas) y 0-9 (números) sea remplazado.
    var lowerCase = NoSpecial.toLowerCase();
    var separate = lowerCase.split();
    var reverse = separate.reverse();
    var join = reverse.join('');

    if( lowerCase == reverse){
        return true
    } else {
        return false
    }
    console.log(lowerCase)
}
