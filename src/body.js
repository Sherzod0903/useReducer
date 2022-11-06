import React ,{memo} from "react";


const Body=({data,dataCall})=>{
console.log('child render');

return(
    <div>

        <h1>{data.title}</h1>
        <h1>{dataCall('Home').title}</h1>
        <h1>{dataCall('Contacts').title}</h1>

</div>
)

}

export default memo(Body);