const patchDataAsync = async(url:string, dataToPost:any) =>{
    try{
        const res = await fetch(url,{
            method:"PATCH",
            headers:{
                "Content-Type":'application/json',
            },
            body:JSON.stringify(dataToPost)
        }) 
        return await res.json();
    }catch(Error){
        console.log(`Error: ${url} failed to send`)
    }
}

export { patchDataAsync };