// – Dates – Unix Epoch – ISO 8601 

 let start_Date = new Date("1970-01-02");

 console.log(start_Date );
 console.log(start_Date *1 );

 let d = new Date();
 setInterval(() => {
    console.log(d);
 }, 3000);

 //------------------------

// const d = new Date("20 feb 2024 17:03:42");
// const d = Date.parse("2024-02-20 17:03:42+02");
// const d = Date.parse("20 feb 2024 17:03:42");
// const d = Date.parse("20 02 2024 17:03:42"); // NAN
// const d = Date.parse("02 20 2024 17:03:42"); 
// const d = Date.now("02 20 2024 17:03:42"); 

