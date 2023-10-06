import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../Context/Context'
import { FaTrash } from 'react-icons/fa'

const Cart = () => {

    const { state: { cart }, dispatch } = useContext(DataContext)
    const [subTotal, setSubTotal] = useState()
    console.log(cart);

    useEffect(() => {

        setSubTotal(cart.reduce((acc, value) => acc + Number(value.price) * value.qty, 0))

    }, [cart])

    console.log(subTotal);




    return (
        <div className=' w-full min-h-screen bg-cyan-700 flex py-[2rem] px-[3rem]' >

            {(cart.length === 0) ? (<> <h1 className=' w-[100rem]  ml-[25.3rem] mt-[11rem] text-cyan-300 text-6xl  ' > Your Cart is Empty </h1> </>) : null}

            <div className='w-[70%]'  >


                {cart?.map((item) => (
                    (
                        <div className=" bg-cyan-500 w-[907px] mt-[2rem] h-[200px] rounded-2xl shadow-2xl pt-[14px] transition-all ease-in-out duration-1000 cursor-pointer transform hover:scale-105 " key={item.id} >
                            <div key={item.id} className=' w-[877px] m-auto bg-white mb-8  h-[170px] shadow-inner rounded-xl flex items-center overflow-hidden ' >

                                <img className=' w-[200px] h-[200px] shadow-xl ' src={item?.image} alt="" />

                                <div className="detail flex  ">

                                    <h3 className=' ms-7 text-cyan-300 ' >{item.name} </h3>

                                    <p className=' ms-4 w-[100px] mt-[0.5rem]  text-cyan-700 font-semibold ' > {item.price * item.qty} $ </p>

                                </div>


                                <select className=' w-[90px] bg-gray-800 text-white me-10  rounded-xl px-3 cursor-pointer ' value={item.qty}
                                    onChange={(e) => {
                                        dispatch({
                                            type: "CHANGE_CART_QTY",
                                            payload: {
                                                id: item.id,
                                                qty: e.target.value,
                                            }
                                        })
                                    }}

                                >
                                    {[...Array(item.inStock).keys()].map((num) => (
                                        (
                                            <option key={num + 1}> {num + 1} </option>
                                        )
                                    ))}

                                </select>


                                <FaTrash key={item.id} onClick={() => {
                                    dispatch({ type: "REMOVE_CART", payload: item.id })
                                }} className=' flex justify-center items-center text-blue-600  text-xl cursor-pointer ' />
                            </div>

                        </div>

                    )
                ))}

            </div>


            {cart.length >= 1 ?
                (

                    <div className='  w-[30%] h-[580px] ms-24 p-12  bg-slate-50' >

                        <h3> sub Total : {subTotal}  </h3>

                    </div>
                )
                : null}





        </div>
    )
}

export default Cart