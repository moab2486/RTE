export function getObjectFromArray(dataArray: any[], inputDataType: string){
    for(var i = 0;  i < dataArray.length; i++){
        var value = Object.values(dataArray[i])
        if(value.includes(inputDataType)){
            return dataArray[i]
        }
    }
}

export function formYotubeLink(inputData: string){
    const toArray = inputData.split('/');
    const getLast = toArray[toArray.length-1];
    const link = "https://www.youtube.com/embed/" + getLast;
    return link;
}

export function validateLink(inputData: string){
    try{
        new URL(inputData);
        return true;
    }catch{
        return false;
    }
}

export function validateYoutubeLink(inputData: string){
    try{
        var link = new URL(inputData);
        if(link){
            const toArray = link.hostname.split('.');
            const checker_a = toArray.includes("youtube");
            const checker_b = toArray.includes("youtu");
            if(checker_a === true || checker_b === true){
                return true;
            }
        } 
    }catch{
        return false;
    }
}

export function validateFile(inputData: string){
    let arr = inputData.split('.');
    let ext = arr[arr.length-1].toString();
    if(ext === "jpg" || ext === "png" || ext === "jpeg"){
        return true
    }else{
        return false
    }
}