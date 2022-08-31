import React,{useState} from 'react'


let Card=(props)=>{
    const [Addclass, Addsetclass] = useState("");
    const [btnText,setBtnText]=useState("Add to fav")
    console.log("harsh");
    let addToFavourite=(image)=>{
        setBtnText((prev)=>{
            if(prev==="Add to fav"){
                return "Added"
            }else{
                return "Add to fav"
            }
        })
    Addsetclass((prev)=>{
        if(prev==="active"){
            return ""
        }else{
            return "active";
        }
    })
    }
    return(
        <div className="card">
            {console.log("props",props.details)}
            <img src={props.details.img} />
            <div>{props.details.Heroname}</div>
            <div>{props.details.Strength}</div>
            <button className={Addclass} onClick={()=>{
                addToFavourite(props.details.img)
            }}>{btnText}</button>
        </div>
    )
}
export default Card;