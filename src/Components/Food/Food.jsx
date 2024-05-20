import Eat   from '../../Images/Food.png'
const Food = ()=>{
    return(
        <>
        <div className="h-46 w-full border border-solid border-black flex justify-center items-center gap-36">
            <div>
                <p className='text-2xl font-mono font-bold'>Search your Favouraite Cuisine</p>
              <input type="search" className='h-12 w-96 outline-none border-2 border-solid border-blue-500 p-2 rounded-md'></input>
            </div>
            <div>
             <img src={Eat} className='h-[500px] w-96'></img>
            </div>
        </div>
        
        </>
    )
}

export default Food;