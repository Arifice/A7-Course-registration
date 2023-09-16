import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
const Course = () => {
    const [courses,setcourses]=useState([]);
    const [selectedcourse,setSelectedCourse]=useState([]);
    const [remainingCredit,setRemainingCredit]=useState(20);
    const [totalCredit,setTotalCredit]=useState(0);
    const [totalPrice,setTotalPrice]=useState(0);

    useEffect(()=>{
        fetch('Courses.json')
        .then(res=>res.json())
        .then(data=>setcourses(data));
    },[])

    const handleSelect=(course)=>{
        const isExist=selectedcourse.find(item=>item.id==course.id);
        let credit=parseInt(course.credit);
        let price=parseInt(course.price);
        if(isExist){
            return alert(`OOPs!   This Course is already selected`);
        }
        else{
            selectedcourse.forEach(item=>{
                credit=credit+parseInt(item.credit)
                price=price+parseInt(item.price);
            })
            const remainCredit=20-credit;
            if(credit>20){
                return alert('OOps! You can select maximum 20 credits');
            }
            else{
                setRemainingCredit(remainCredit);
                setTotalCredit(credit);
                setTotalPrice(price);
                setSelectedCourse([...selectedcourse,course]);
            }
            
        }       


    }

    return (
        <div className="flex gap-8">
            
            <div className="grid grid-cols-3 gap-8 w-2/3">                
                {
                    courses.map(course=>(
                        
                            <div key={course.id} className=" p-4 space-y-2 border-2  shadow-lg border-black bg-white">
                                <img className="w-full" src={course.img} alt="" />
                                <h1 className="text-[24px] font-bold">{course.name}</h1>
                                <p className="text-[14px] text-justify">{course.details}</p>
                                <div className="flex justify-around items-center ">
                                    <p className="text-[18px]">Price: {course.price} $</p>
                                        <div>
                                        <img className="w-12" src="https://i.postimg.cc/NFb648GM/frame.jpg" alt="" />
                                        </div>
                                    <p className="text-[18px]">credit: {course.credit}</p>
                                </div> 
                                <div className="flex justify-center">
                                    <button onClick={()=>handleSelect(course)} className="bg-[#2F80ED] px-8 py-2 text-white text-2xl rounded-lg font-semibold">Select</button>      
                                </div>   
                            </div>                 
                    ))
                }    
            </div>

            <div className="w-1/3">
              <Cart selectedcourse={selectedcourse}
              totalCredit={totalCredit}
              totalPrice={totalPrice}
               remainingCredit={remainingCredit}></Cart>
            </div>         
        </div>
        
    );
};

export default Course;