const deleteDataAsync = async(url:string) =>{
    try{
        const res = await fetch(url,{
            method:"DELETE",
        })
        return await res.json();
    } catch(e){
        console.log(`Error: Failed to delete ${url}`)
    }
}

export {deleteDataAsync}