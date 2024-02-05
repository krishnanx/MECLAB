import React, {useState,useEffect} from "react"
import {collection,getDocs} from "firebase/firestore"
import {db} from '../../library/Firebase'
import "./receivedata.css"


export const ListName = () => {
    const[name,setName]=useState([])
    useEffect(() => {getName()},[])
    useEffect(() => {console.log(name),[name]})
    const getName = async () => {
        const collectionref = collection(db,'gmail')
        await getDocs(collectionref).then(response=>{
          const nms = response.docs.map(doc => ({data: doc.data(),id: doc.id}))
          setName(nms)
        }).catch(error=>{console.log(error.message)})
    }
    const [data, setData] = useState(null);
    const [pass, setPass] = useState(null);
    const [print,setPrint]= useState(false);  
    const takeGmail = (val1) => {
      setData(val1.target.value)
      setPrint(false)
    }
    const takePass = (val2) => {
      setPass(val2.target.value)
      setPrint(false)
    }
    

  return (
    <div className="Signin_div">
      {
        print?
        <div>
        <h1>{data}</h1>
        <h2>{pass}</h2>
        </div>
        :null
      }
      <div className="firsthalfsignin">
        <div className="textbox">
          <p className="Gmail">Enter your Gmail:</p>
          <input type="text" onChange={takeGmail} className="Input_Gmail"></input>
          <p className="Pass">Enter your Password:</p>
          <input type="text" onChange={takePass} className="Input_pass"></input>
        </div>
      </div>
     
      
      <div className="signinbutton"><button onClick = {() => setPrint(true)}>print value</button></div>
      
      

    </div>
    
   
  )
}
