import React,{useState,useEffect} from "react";
import { UserAuth } from "../Context/AuthContext";
import { addIp } from "../library/Firebase";
import { useNavigate } from "react-router-dom";
const IpAddressPage = () => {
  const navigation = useNavigate();
  const [displayname,setDisplayname] = useState(null)
  const [ipAddress, setIpAddress] = React.useState("");
  const {profile, setProfile} = UserAuth();
  useEffect(() => {
    const displayName = profile.name;
    setDisplayname(displayName);
  }, [profile.name]);
  //console.log(profile.name)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setIpAddress(value);
    console.log(ipAddress)
  };
  const handleSubmit = async () => {
    const updatedProfile = await addIp(profile, setProfile, ipAddress);
    console.log(updatedProfile)
    setProfile(updatedProfile)
    navigation('/HomePage');
  }
  
  return (
    <div className="ipaddresspage">
        <div className="welcomemsg">
            <h1>
                Welcome {displayname}
            </h1>
        </div>
        <div
        style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "bisque",
            paddingBottom:"150px",
            marginLeft:"10px"
        }}
        >
            <div
                style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flexDirection: "column",
                border: "2px solid white",
                borderRadius: "15px",
                width: "350px",
                height: "250px",
                }}
            >
                <h3
                style={{
                    fontFamily: 'Roboto Mono',
                    fontSize: "1.5rem",
                    color: "black",
                }}
                >
                Enter IP Address:{" "}
                </h3>
                <input
                value={ipAddress}
                onChange={handleChange}
                placeholder=""
                name="ipAddress"
                style={{
                    color: "black",
                    fontSize:"20px",
                    paddingLeft:"5px",
                    borderRadius: "9px",
                    width: "90%",
                    height: "25px",
                }}
                ></input>
                <button class="button-73" role="button" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    </div>
  );
};

export default IpAddressPage;
