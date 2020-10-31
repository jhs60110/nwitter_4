import { dbService } from "fbase";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
    const [nwitt, setNwitt] = useState("");
    const onSubmit = async(event) => {
        event.preventDefault();
       await dbService.collection("nwitts").add({
            nwitt,
            createdAt: Date.now(),
        });
        setNwitt("");
    };
    const onChange = (event)=>{
       const{
           target: {value},
       } = event;
       setNwitt(value);
    };
return(
<div>
    <form onSubmit={onSubmit}>
        <input value={nwitt} onChange={onChange} type="text" placeholder="what's on your mind?" maxLength={120}/>
        <input type="submit" value="Nwitt"/>
    </form>
</div>
);
};
export default Home;