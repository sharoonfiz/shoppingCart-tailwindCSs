import React, { useContext } from 'react'
import { DataContext } from '../Context/Context'
import '../Components/button.css'

const SingleProduct = ({ items }) => {

    const { state, dispatch } = useContext(DataContext)

    const handleRemoveCart = (id) => {
        dispatch({ type: "REMOVE_CART", payload: id })

    }

    const handleAddCart = (items) => {
        dispatch({ type: "ADD_CART", payload: items })
    }

    //checking items in cart alredy exits or not returning true/false

    let itemsON = state.cart.some((it) => it.id === items.id)

    return (

        <div className='cart-card w-[20rem] m-auto mb-5  rounded-[19px]  transition-all ease-in-out duration-1000 cursor-pointer transform hover:scale-110  ' key={items.id}>
            <img className=' object-cover' src={items.image} alt="" />

            <div className='  ms-[16px] p-3' >
                <h4 className=' text-sky-700' >{items.name} </h4>
                <h4 className=' text-[1.2rem] text-cyan-600 ' >{items.fastDelivery ? "Fast Delivery" : "4 Days Delivery"} </h4>
                <p className=' text-cyan-700 font-semibold ' > Price : {items.price.split(".")[0]} $ </p>

                {

                    (itemsON) ? (


                        <div className="b animate-bounce h-14 w-54 flex justify-center items-center" onClick={() => handleRemoveCart(items.id)} >
                            <button className="i mt-[20px] ms-[-8.6rem]  h-12 w-50 bg-gradient-to-br from-red-400 to-red-600 items-center rounded-[70%] shadow-2xl  cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
                            </button>
                            <a className="text-center mt-[1rem] ms-[-8.6rem] decoration-transparent text-white font-semibold z-10 pointer-events-none flex justify-content items-center"><span className=""><svg className="w-5 h-5 right-1.5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg></span> Remove Cart</a>
                        </div>


                    ) : (


                        <div className="b animate-pulse mx-auto h-14 w-54 flex justify-center items-center" onClick={() => handleAddCart(items)} >
                            <button disabled={!items.inStock} className="i mt-[20px] ms-[-6.6rem]  h-12 w-50 bg-green-600 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
                            </button>
                            <a className="text-center decoration-transparent  mt-[1rem] ms-[-6.6rem] text-white font-semibold z-10 pointer-events-none"> {!items.inStock ? "Out Of Stock" : "Add Cart"}  </a>
                        </div>


                    )
                }

            </div>

        </div >
    )
}

export default SingleProduct