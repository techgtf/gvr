export const Encrypt = (token)=>{
    var modifiedStr1 = token.slice(0, 2) + 'S' + token.slice(2);
    var modifiedStr2 = modifiedStr1.slice(0, 4) + 'R' + modifiedStr1.slice(4)    
    return modifiedStr2;
}

export const Decrypt = (token)=>{
    if(!token){
        return token;
    }else{
        var slice1 = token.slice(0, 2);
        var slice2 = token.slice(3, 4);
        var slice3 = token.slice(5);
    
        var newString = slice1 + slice2 + slice3
        return newString;
    }
    
}
