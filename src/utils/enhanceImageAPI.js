
import axios from 'axios'
const key = import.meta.env.VITE_API_KEY
const base_Url="https://techhk.aoscdn.com/"
console.log(key)

export const enhancedImageAPI = async (file)=>{
    try {
        const taskID = await upload(file);
        console.log("Img Uploaded")
        // /api/tasks/visual/scale/{task_id} --get
        
        const enhancedData = await pollEnhancedImg(taskID);

        return enhancedData
        
    } catch (err) {
        console.log(err.message)
        
    }
}

const upload = async (file)=>{
    const formData = new FormData()
    formData.append("image_file",file)

    const {data}=await axios.post(`${base_Url}/api/tasks/visual/scale`,formData,{
        headers:{
            "Content-Type":"multipart/form-data",
            "X-API-KEY":key
        }
    })
    if(!data?.data?.task_id){
        throw new Error("Failed to upload Img! Task ID not found")
    }

    return data.data.task_id;


}

const fetchImg = async (taskID)=>{
    const {data}=await axios.get(`${base_Url}/api/tasks/visual/scale/${taskID}`,{
        headers:{
            "X-API-KEY":key
        }
    })
    if(!data?.data){
        throw new Error("Failed to fetch Image")
    }
    return data.data

}

const pollEnhancedImg = async (taskID,retries=0)=>{
    const result = await fetchImg(taskID);
    if(result.state===4){
        console.log("Processing...")

    if(retries>=20){
        throw new Error("Maximum tries reach.Please try after some time!!");
    }
    await new Promise((resolve)=>setTimeout(resolve,2000))

    return pollEnhancedImg(taskID,retries+1)
    }
    return result
}