import axios from "axios";

const getUserDetails = async() => {
  await new Promise((r: any)=> setTimeout(r,5000))
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data;
}

//async component
export default async function Home() {
  const getUser = await getUserDetails();
  return (
    <div>
      Hi there
      {getUser.name} <br/>
      {getUser.email}
    </div>
  );
}
