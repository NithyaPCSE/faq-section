import {useState} from 'react';
function useCustomHook(initalList){
    const [list,setList]=useState(initalList)
    const bind={
        onClick: (e)=>{
            let ind=e.target.getAttribute('data-index');
            let newlist=initalList.map((item,index)=>
                index==ind ? {...item,default:true} : {...item,default:false}
            );
            setList(newlist);
        }
    }
    return [list,bind];
}

export default useCustomHook;