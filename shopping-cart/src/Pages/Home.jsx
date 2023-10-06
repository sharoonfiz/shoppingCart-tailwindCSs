import { useContext } from "react"
import { DataContext } from "../Context/Context"
import SingleProduct from "../Components/SingleProduct";


const Home = () => {

    const { state, dispatch } = useContext(DataContext)

    console.log(state.cart);






    return (
        <div className=" w-full max-w-[1400px] m-auto  py-0 " >

            <div className="gallery grid grid-cols-3 p-9 items-center flex-col flex-wrap mt-16  ">
                {state?.products?.map((items) => (
                    (
                        <SingleProduct key={items.id} items={items} />
                    )
                ))}

            </div>

        </div>
    )
}



export default Home