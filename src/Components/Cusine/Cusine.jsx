// import getAllCusine from "../../Apis";
// import { useEffect, useState } from "react";

// const Cusine = (props) =>{
//     const [categories, setAllCategories] = useState([])

//     useEffect(()=>{
//      getAllCusine()
//      .then((data)=> setAllCategories(data))
//      .catch((e) => console.log(e.message));
//     },[])
    
//     return(
//             <div className="">
//                 <div className="text-left">
//                 <p className="text-5xl font-bold text-blue-500 ">CATEGORIES</p>
//                 </div>
//                {categories.map((item) => (
//                   <section className="mt-12 flex flex-wrap">
//                     <div className="h-32 w-44  border border-solid border-blue-700 flex flex-col items-center rounded-full  gap-2">
//                     <section><p key={item.idCategory}>{item.strCategory}</p></section>
//                     <section><img src={item.strCategoryThumb} className="h-20 w-20"></img></section>
//                    </div>
                 
//                   </section>
//                     // <p key={item.idCategory}>{item.strCategory}</p>
//                 ))}
//             </div>
//         );
    
// }
// export default Cusine;

import getAllCusine from "../../Apis";
import { useEffect, useState } from "react";

const Cusine = (props) => {
    const [categories, setAllCategories] = useState([]);

    useEffect(() => {
        getAllCusine()
            .then((data) => setAllCategories(data))
            .catch((e) => console.log(e.message));
    }, []);

    return (
        <div className="">
            <div className="text-left">
                <p className="text-5xl font-bold text-blue-500">CATEGORIES</p>
            </div>
            <section className="mt-12 flex flex-wrap gap-12">
                {categories.map((item) => (
                    <div
                        key={item.idCategory}
                        className="h-32 w-44 border border-solid border-blue-700 flex flex-col items-center rounded-full gap-2 shadow-2xl"
                    >
                        <section>
                            <p className="text-md font-semibold text-blue-900 ">{item.strCategory}</p>
                        </section>
                        <section>
                            <img src={item.strCategoryThumb} className="h-20 w-20" alt={item.strCategory} />
                        </section>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Cusine;
