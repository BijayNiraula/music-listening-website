
const fetchData=async(url,options)=>{
    try{

        const res=await fetch(url,options)
        const data=await res.json();
        return  data;
    }
    catch(e){
        alert("server error occured")
   console.error("wrror when fetchin data from the server")

    }
  

}
export default fetchData;