export const ValidarInput = (input) =>{
    const length = input.length;
    if (length>2){
        return true
    }else{
        return false
    } 

}

export const ValidadColor =(input) =>{
    const length = input.length;
    if (length===0){
        return false
    }else{
        return true
    } 
}