import API_URL from "./config";

const getAllCourses = async (token) => {
    var options = {  
             method: 'GET',
             headers: {
               'Authorization': 'Bearer ' + token
             }
            }
  const response = await fetch(API_URL +  "core/preview-courses", options)
  return  await response.json();
};
const getCourseById = async (courseId,token) => {
    var options = {  
             method: 'GET',
             headers: {
               'Authorization': 'Bearer ' + token
             }
            }
  const response = await fetch(API_URL +  "core/preview-courses/" + courseId, options)
  return  await response.json();
};

const getToken = async () => {
    const response = await fetch(API_URL + "auth/anonymous?platform=subscriptions")
   
    return  await response.json();
  };

//   const getOptions = () => {
//     const token = getToken().then(data => { return data.token})
//     console.log(token)
//     var options = {  
//      method: 'GET',
//      headers: {
//        'Authorization': 'Bearer ' + token
//      }
//    }
//    return options;
//   }

export  {getAllCourses,getToken,getCourseById};