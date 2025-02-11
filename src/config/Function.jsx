// Importing environment variables
import * as CONFIG from 'root/config';
import Request from 'root/config/Request';

export const getTypologyByCategory =async (category)=>{
    var response=await Request('admin/category-typology?categories_id='+category,'GET');
    return response;
   
}


export const getSubTypologyByTypology =async (typology)=>{
    var response=await Request('admin/typology-sub-typology?typologies_id='+typology,'GET');
    return response;
   
}


export const projectStatusList =async ()=>{
    var response=await Request('admin/project-status-list','GET');
    return response;
   
}
export const getAllSubTypologyByTypology =async (typoid)=>{
    var response=await Request('admin/typology-sub-typology?typologies_id='+typoid,'GET');
    return response;
   
}
export const getCityBystate =async (state)=>{
    var response=await Request('admin/state/city/'+state,'GET');
    return response;
   
}



export const getLocalityByCity =async (city)=>{
    var response=await Request('admin/cities/locality/'+city,'GET');
    return response;
   
}



export const getSubtypology =async (typologies_id)=>{
    var response=await Request('admin/typology-sub-typology?typologies_id='+typologies_id,'GET');
    return response;
   
}


export const getAmenities =async (page = 1)=>{
    var response=await Request('admin/amenities?page='+page,'GET');
    return response;
   
}