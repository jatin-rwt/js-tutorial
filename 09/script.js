function add(a, b, fun){
    let result = a+b;
    fun(result);

    
    
}


add(2, 4, (val) => {
    console.log(val);
    
})