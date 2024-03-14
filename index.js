const cats=["Milo","Otis","Garfield"]
function destructivelyAppendCat(Ralph){
    cats.push(Ralph)
}
function destructivelyPrependCat(Bob){
    cats.unshift(Bob)
}
function   destructivelyRemoveLastCat(Garfield){
    cats.pop(Garfield)
}
function destructivelyRemoveFirstCat(Milo){
    cats.shift(Milo)
}
function appendCat(name){
    return [...cats, name ]
 }
 
 
 function prependCat(name){
     return [name ,...cats ]
 }
 
 function removeLastCat(){
     return cats.slice(0, cats.length - 1);
 }
 
 function removeFirstCat(){
     return cats.slice(1);
 }

