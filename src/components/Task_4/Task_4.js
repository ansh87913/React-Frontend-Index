import Axios from "axios";
import { useEffect,useState } from "react";

export function Task()
{
    const [data,setData] = useState([]); 

    useEffect( ()=> {
        Axios.get("https://dummyjson.com/users")
        .then((res)=>{
            if(res.status===200)  
            {
                console.log(res.data.users); 
                setData(res.data.users); 
            }
            else
            {
                Promise.reject();
            }
        })
        .catch((err)=>{
            alert(err);
        })
    })

    const dummyData = ()=>{
        return data.map((val)=>{
            return (
                <tr>
                    <td>{val.id}</td>
                    <td><img src={val.image} style={{height:"50px"}}></img></td>
                    <td>{val.firstName}</td>
                    <td>{val.lastName}</td>
                    <td>{val.gender}</td>
                    <td>{val.email}</td>
                    <td>{val.username}</td>
                    <td>{val.domain}</td>
                    <td>{val.ip}</td>
                    <td>{val.university}</td>
                </tr>
            )
        })
    }

    return(
        <div class="bg-dark text-light">
            <h1 class="text-center">Dummy Data</h1>
            <div>
            <table style={{border:"1px solid white"}} >
            <thead style={{border:"1px solid white"}}>
                <th>Sno</th>
                <th>Profile Pic</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>E-mail</th>
                <th>Username</th>
                <th>Domain</th>
                <th>IP</th>
                <th>University</th>
            </thead>
            <tbody>
                {dummyData()}
            </tbody>
            </table>
            </div>
        </div>
    )
}