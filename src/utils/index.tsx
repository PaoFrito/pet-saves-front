export const timeout = (delay: number) => {
    return new Promise( res => setTimeout(res, delay) );
}

export const validateEmail = (email:string):boolean => {
    if(email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) === null)
        return false
    else
        return true
}