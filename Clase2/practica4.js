const limit = process.argv[2]
if (isNaN(limit)){
    console.error("Argumento invalido")
    process.exit()      // Termina el proceso para no seguir con la ejecucion posterior
}

for(let i=0; i<= limit ; i++){
    if (i%3 == 0 && i%5 == 0){
        console.log(i + " Fizz Buzz")
    }else
     if (i%3 == 0){
         console.log(i + " Fizz")
    }else if (i%5 == 0){
         console.log(i + " Buzz")
    }
    else{
        console.log(i)
    }
}