import React, { useEffect, useState } from 'react';
import axiosClient from '../utils/axios-client';
import dataUrl from '../Common/dataUrl/dataUrlShowInfo.json';


function useHandleGetDataShow(getRoute) {

    const [data , setDate] = useState(null);
    const [url , setUrl] = useState(null);
    useEffect(() => {
            let getUrl = dataUrl.find((Item) => Item.nameEnpoint === getRoute);
            if(getUrl){
                    setUrl(getUrl.Url);  
                  
            }else {
                    setUrl("https://jsonplaceholder.typicode.com/posts");
            }
    },[getRoute])
    useEffect(() => {
        if(!url){
            return;
        }
        const handleGetdata = async() => {
        try {
            const getData = await axiosClient.get(url);
            if(getData) {
                    setDate(getData);
            }
        }
        catch (error) {
                console.error("Lỗi lấy dữ liệu "+error);
        }
    }
    handleGetdata();
},[url])
    return [data]
      
    
}
export default useHandleGetDataShow;

