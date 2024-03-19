import axios from "axios";
import { getAllPosts, getAllBusiness,getAllAds } from "./PostSlice";

export const getAllPostApi = async (dispatch) => {
  try {
    const postdata = await axios.get(
      "https://662d2715-eef9-460e-a9c3-92de3a9787ac.mock.pstmn.io/getuser"
      
      
      
      
      
      
      //  "https://3f35b81f-9595-4b8f-82be-7b78f7e7c01a.mock.pstmn.io/getuser"
      // "https://d4233567-bea1-4923-bdf2-0fc4e7bd1b7e.mock.pstmn.io/getuser"
// "https://3f35b81f-9595-4b8f-82be-7b78f7e7c01a.mock.pstmn.io/getuser"
      // "https://6e1ae861-0adc-46bd-9e81-adf2a1d5c63a.mock.pstmn.io/getuser"
      
      // "https://56edda76-4823-4caa-bf8e-7f639e526705.mock.pstmn.io/getuser"
      
    );

    dispatch(getAllPosts(postdata.data));
    console.log("people:",postdata);
  } catch (err) {
    console.log(err);
  }
};
// export const getAllAdsApi = async (dispatch) => {
//   try {
//     const postdata = await axios.get(
//       // "https://d4233567-bea1-4923-bdf2-0fc4e7bd1b7e.mock.pstmn.io/getuser"
// // "https://3f35b81f-9595-4b8f-82be-7b78f7e7c01a.mock.pstmn.io/getuser"
//       // "https://6e1ae861-0adc-46bd-9e81-adf2a1d5c63a.mock.pstmn.io/getuser"
      
//       // "https://56edda76-4823-4caa-bf8e-7f639e526705.mock.pstmn.io/getuser"
      
//     );

//     dispatch(getAllAds(postdata.data));
//     console.log(postdata);
//   } catch (err) {
//     console.log(err);
//   }
// };

export const getBusinessApi = async (dispatch) => {
  try {
    const newpost = await axios.get(
      "https://1b696d70-34ca-47a8-94e2-d7f42ec09210.mock.pstmn.io/getuser"
      // "https://c46d00ae-c388-4261-b74d-3e7908f80400.mock.pstmn.io/getuser"
      // "https://1b696d70-34ca-47a8-94e2-d7f42ec09210.mock.pstmn.io/getuser"
      // "https://b996bed5-9374-41dd-83ca-48cfaad76e6d.mock.pstmn.io/getuser"
      //  "https://jsonplaceholder.typicode.com/posts"
      // "https://7bf32e83-fa0a-44fc-ab66-ec6b5a508a04.mock.pstmn.io/getuser"
      // "https://a4937654-759c-49ca-8e51-ac86c42abb9a.mock.pstmn.io/getuser"
    );

    dispatch(getAllBusiness(newpost.data));
    console.log(newpost);
  } catch (err) {
    console.log(err);
  }
};  

export const getAdsApi = async (dispatch) => {
  try {
    const adspost = await axios.get(
      "https://ad128757-0a40-4c8b-af50-211b071f7352.mock.pstmn.io/getuser"

      // "https://c46d00ae-c388-4261-b74d-3e7908f80400.mock.pstmn.io/getuser"
// "https://095b5d81-d616-4d5a-a612-1acd4a0a178f.mock.pstmn.io/getuser"
// "https://da9c2ea5-16dc-4421-bfc5-a13e13f05130.mock.pstmn.io/getuser"
    );

    console.log("adspost",adspost);
    dispatch(getAllAds(adspost.data));
  } catch (err) {
    console.log(err);
  }
}; 

