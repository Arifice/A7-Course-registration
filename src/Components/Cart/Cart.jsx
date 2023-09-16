/* eslint-disable react/prop-types */


const Cart = ({selectedcourse,remainingCredit,totalCredit,totalPrice}) => {
    return (
        <div className=""> 
        <h1 className="text-4xl text-blue-600 font-bold m-4">Credit hours remaining : {remainingCredit} Hr</h1>
            <hr className="border-b-4 border-[#1C1B1B33] m-4"/>
            <h1 className="text-center text-4xl  font-bold">Course Name :</h1>
            
            {
                selectedcourse.map((course,idx)=>(
                    <ol key={idx}>
                        <li className="m-4 text-3xl text-[#1C1B1B99] font-semibold">{idx+1}.  {course.name}</li>
                    </ol>
                ))
            }
            <hr className="border-b-4 border-[#1C1B1B33] m-4"/>
            <h1 className="text-4xl text-[#1C1B1BCC] font-bold m-4">Total Credit Hours : {totalCredit} Hr</h1>
            <hr className="border-b-4 border-[#1C1B1B33] m-4"/>
            <h1 className="text-4xl text-[#1C1B1BCC] font-bold m-4">Total Price : {totalPrice} USD</h1>
        </div>
    );
};


export default Cart;