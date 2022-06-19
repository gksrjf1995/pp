import { useEffect, useState } from 'react';
import './App.css';
import {useDispatch , useSelector} from "react-redux"
import {createUser , deleteUser} from "./reducer/userslice"


function App() {

  const dispatch = useDispatch();
  const selector = useSelector(state=>state.user);
  const [data , usedata] = useState({
    name : "",
    sex : "",
    age : "",
    
  });
  
  const [Edit , setEdit] = useState(true);
  const [EditTarget , setEditTarget] = useState();

  const changeData = (e) => {
    console.log(data);
    usedata({...data , [e.target.name] : e.target.value});
    
  }



  const DataSubmit = (e) =>{
    e.preventDefault();
    dispatch(createUser(data));
    usedata((current)=>({
      name : "",
      sex : "",
      age : "",
    }));
    setEditTarget(()=>null);
    console.log(EditTarget);
  }

  console.log(selector);
  const DeletData = (id)=>{
    dispatch(deleteUser(id));
    console.log(id);
  }
  
  const EditData = (e)=>{
    setEdit(current=>!current);
    setEditTarget(()=>e);
    usedata((current)=>{return current.map((item)=>{
      return item.id === EditTarget  ? {...data} : item
    })});
    
  }
  return (
    <div className="App">
      <div className='p-10 mt-10'>
        
        <h1 className="italic text-4xl hover:bg-sky-700 transition-colors mb-10">
          SELF CRUD
        </h1>
        <div class="flex justify-around items-center">
          <div class="flex w-auto flex-2 h-14 text-blue-600 font-bold ">
            정보입력
          </div>
          <div className="flex-2 w-auto flex h-auto">
           <form className='w-auto flex flex-col h-auto' onSubmit={(e)=>{DataSubmit(e)}}>
            <input type={"text"}  className="border-2 block text-gray-700 text-sm font-bold p-3 border-rose-500 mb-3  w-auto " placeholder="이름" value={data.name} name="name" onChange={(e)=>changeData(e)}/>
            <input type={"text"}  className="border-2 block text-gray-700 text-sm font-bold p-3 border-rose-500 mb-3  w-auto" placeholder="성별" value={data.sex} name="sex" onChange={(e)=>changeData(e)}/>
            <input type={"text"} className="border-2 block text-gray-700 text-sm font-bold p-3 border-rose-500 mb-3  w-auto"  placeholder="나이" value={data.age} name="age" onChange={(e)=>changeData(e)}/>
            <button type='submit' className="mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  >제출</button>
           </form>
          </div>
          
        </div>
        <div >
          <ul>
            {selector.user.length > 0 ? selector.user.map((item,index)=>
               <div className='mb-5'>
                  <li>{Edit === true && item.id === EditTarget ? <input type={"text"}  className="border-2 block text-gray-700 text-sm font-bold p-3 border-rose-500 mb-3  w-auto " placeholder="이름" value={data.name} name="name" onChange={(e)=>changeData(e)}/>  : <p>성별 : {item.name}</p>} </li>
                  <li>{Edit === true && item.id === EditTarget ? <input type={"text"} className="border-2 block text-gray-700 text-sm font-bold p-3 border-rose-500 mb-3  w-auto"  placeholder="성별" value={data.sex} name="sex" onChange={(e)=>changeData(e)}/> :  <p>성별 : {item.sex}</p>} </li>
                  <li>{Edit === true && item.id === EditTarget ? <input type={"text"} className="border-2 block text-gray-700 text-sm font-bold p-3 border-rose-500 mb-3  w-auto"  placeholder="나이" value={data.age} name="age" onChange={(e)=>changeData(e)}/> :   <p>나이 : {item.age}</p>} </li>

                  <button onClick={(e)=>{DeletData(item.id)}} className='mr-2 mb-3 mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>삭제</button>
                  <button onClick={(e)=>{EditData(item.id)}} className=' mb-3 mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>{Edit === true && item.id === EditTarget ? "수정완료" : "수정" }</button>  
                  

               </div>
            )  : <p>no data</p>}
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default App;
