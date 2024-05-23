 import { useEffect, useState } from "react";
 import { useParams } from "react-router-dom";
 import { getAllMeals } from "../../Apis/index";
 



 const FoodItems = ()=>{
     const {categoryName} = useParams()
     const [meals, setMeals] = useState([])
     useEffect(()=>{
       getAllMeals(categoryName)
       .then((data) => setMeals(data))
      .catch((e) => console.log(e.message));

     },[categoryName])

     return(
         <>
        <div>
            <div className="text-left">
                <p className="text-5xl font-bold text-blue-500">{categoryName}</p>
            </div>
            <section className="mt-12 flex flex-wrap gap-12">
                {meals.map((meal,index) => (
                    <div
                    
                        key={index}
                        className="h-40 w-52 border border-solid border-blue-700 flex flex-col items-center gap-4 shadow-2xl "
                        
                    >
                        <section>
                            <p className="text-sm font-semibold text-blue-900 ">{meal.strMeal}</p>
                        </section>
                        <section>
                            <img src={meal.strMealThumb} className="h-20 w-20"  />
                        </section>
                        
                     </div>
                ))}
            </section>
        </div>

        </>
     )
 }

 export default FoodItems;

