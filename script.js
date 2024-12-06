// Oppgave 1 Hello World *10

for (let i = 0; i<10; i++) {
    console.log(i)
    document.writeln(`<p style="color: red;" <br>hello World<br/>`);
    // document.writeln(`<br>${i}<br/>`)
}
// Oppgave 2 1-50

for (let i = 0; i<51; i++) {
    console.log(i)
    document.writeln(`<p style="color: black;"<br>${i}<br/>`)
}

// Oppgave 3 Sum

var sum = 0;

for (let i = 0; i<11; i++) {
    sum = sum+i
    document.writeln(`<br>${sum}<br/>`)
}

// Oppgave 4 Hashtag

var lokk = "#";

for (let i = 0; i<4; i++) {
    console.log(lokk);
    lokk = lokk+"#"
}

// Oppgave 5 Partall

for (let i=0; i<51; i++) {
    if(i%2==0){
        document.writeln(`<br>${i}<br/>`);
    }
}

// Oppgave 6 I konsolen

for (let i = 0; i<101; i++) {
    if(i%3==0 && i%5==0) {
        document.writeln(`<br>${i}<br/>`);
    }
}

// Oppgave 7 Størst tall på skjermen

let nummer = [1, 2, 555, 9, 11];

let largest = nummer[0];

for (let i=0; i<6; i++) {
    if(nummer[i]>largest) {
        largest=nummer[i]
    }
}
document.writeln(Math.max(largest)); 
// Document write last because it prints out the final result after the loop is finished. 
