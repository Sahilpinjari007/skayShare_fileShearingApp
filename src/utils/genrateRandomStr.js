export const genrateRandomStr = () =>{
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    const charactersLength = characters.length;
    
    for(let i=0; i<6; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}