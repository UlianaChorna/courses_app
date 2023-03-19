import API_URL from "./config";

const getAllCourses = async () => {
  var options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  };
  const response = await fetch(API_URL + "core/preview-courses", options);
  return await response.json();
};

const getCourseById = async (courseId) => {
  var options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  };
  const response = await fetch(
    API_URL + "core/preview-courses/" + courseId,
    options
  );
  return await response.json();
};

const getToken = () => {
  let token = JSON.parse(localStorage.getItem("token")) || null;
  if (!token) {
      token =  auth().then(data => data.token);
      localStorage.setItem("token", JSON.stringify(token)); 
  } 
  return token;
}

const auth = async () => {
  const response = await fetch(
    API_URL + "auth/anonymous?platform=subscriptions"
  );

  return await response.json();
};

export { getAllCourses, getCourseById };
