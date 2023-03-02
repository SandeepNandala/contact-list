export const fetchUrl = async () => {
  let users=[]
  const response = await fetch(this.API_URL);
  const data =await response.json();
  console.log(data);
  // users.push(data);
  data.map((user)=>{
    users.push(user);
  })
  return users;
}


// const API_URL='https://jsonplaceholder.typicode.com/users'

// export const fetchUrl=async(url,{body,...customConfig})=>{
 
//     const headers = {
//         'Content-type': 'application/json; charset=UTF-8',
//       };

//       const config = {
//         ...customConfig,
//         headers: {
//           ...headers,
//           ...customConfig.headers,
//         },
//       };

//     if(body){
//         config.body=body;
//     }

//     try {
//         const response = await fetch(url, config);
//         // console.log(response);
//         const data = await response.json();
//         // console.log(data);
    
//         if (data.success) {
//           return {
//             data: data.data,
//             success: true,
//           };
//         }
    
//         throw new Error(data.message);
//       } catch (error) {
//         console.error('fetch error', error);
//         return {
//           message: error.message,
//           success: false,
//         };
//       }
// }

// export const addContact=()=>{

// }

// export const deleteContact=()=>{

// }

// export const updateContact=()=>{

// }