import React, { useContext } from 'react'
import { Badge, Dropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'
import { SiElasticsearch } from 'react-icons/si'
import { DataContext } from '../Context/Context'



const Header = () => {

    const { state: { cart }, dispatch } = useContext(DataContext)
    const navigate = useNavigate()


    return (

        <div className='head h-[5.3rem] bg-blue-300 py-2 flex items-center ' >

            <div className="left flex-1 text-gray-50 ps-4 flex ms-16 ">
                <Link to='/' className=' no-underline ' >

                    <h2 className='logo text-[20px] font-bold   ' >
                        <a href="" className=' no-underline ' >Bazingart   </a>
                    </h2>

                </Link>


            </div>

            <div className="center flex-1 text-fuchsia-100 text-center ">


                <input type="text" className='search-bar relative  mr-[5rem] outline-none  rounded-xl ps-4 bg-blue-300 py-[0.8rem] text-black w-[40rem] ' placeholder='Enter the Product'
                />



            </div>

            <SiElasticsearch className=' text-blue-900 absolute left-[58rem] text-2xl ' />

            <div className="right flex-1 text-center flex items-center justify-center  ">


                <Dropdown   >
                    <Dropdown.Toggle className='cart' style={{ display: 'flex', padding: "0.7rem", marginLeft: "2rem", border: "none", borderRadius: "7rem", width: "8rem", paddingLeft: "1.8rem" }}  >
                        <FaShoppingCart className='icon text-2xl  ' style={{ marginRight: 10 }} />
                        <Badge className='badge' > {cart.length} </Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className=' drop-menu' >

                        {cart.length > 0 ? (
                            <>

                                {cart.map((items) => (
                                    (
                                        <span key={items.id} className=' mb-2  box-border shadow-md w-[21.9rem] h-24 flex justify-between items-center ' >

                                            <img className=' w-[5.8rem] rounded-[999px] h-[5.5rem] ms-[1rem] object-cover  ' src={items.image} alt="" />

                                            <div className="details flex flex-1 px-4 ">
                                                <h4 className=' mt-1 text-[12px] ' >{items.name} </h4>
                                                <p className=' ms-3  text-center  text-[14px] ' >{items.price.split(".")[0]}$ </p>

                                                <FaTrash onClick={() => {
                                                    dispatch({ type: "REMOVE_CART", payload: items.id })
                                                }} className=' cursor-pointer  text-cyan-600 mt-[2.5px] ml-6 ' />



                                            </div>


                                        </span>
                                    )
                                ))}
                                <button className='cart-btn  w-[21rem] h-[2rem] ms-2 rounded-3xl mb-1 bg-slate-100  text-center  hover:bg-cyan-200 transition-all ease-in-out duration-1000 hover: text-sky-500 font-bold '
                                    onClick={() => navigate(`/cart`)} >

                                    GO TO CART
                                </button>

                            </>) : (
                            <span style={{ padding: 10 }} > CART IS EMPTY </span>
                        )}


                    </Dropdown.Menu>
                </Dropdown>

            </div>


        </div >
    )
}

export default Header