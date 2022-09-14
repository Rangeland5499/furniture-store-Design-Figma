
import Product from "../component/product";
const Products = () => {

   
    return ( 
        <div>
            <h1 className="flex text-3xl font-bold justify-center">Our Products</h1>
            <article className="grid grid-cols-4 gap-4 relative w-4/5 m-auto" >
                <Product 
                image={"https://via.placeholder.com/300/F9F1E7/F9F1E7"}
                model={"Sylterine"}
                description={"Stylish cafe chair"}
                price={"2.500.000"}
                />
                {/* <p {price === 2.500.000 ? :  />  }
                    ></p> */}
                    <Product 
                image={"https://via.placeholder.com/300/F9F1E7/F9F1E7"}
                model={"leviosa"}
                description={"Stylish cafe chair"}
                price={"2.500.000"}/>
                <Product 
                image={"https://via.placeholder.com/300/F9F1E7/F9F1E7"}
                model={"Lolita"}
                description={"Stylish cafe chair"}
                price={"2.500.000"}
                />
                <Product 
                image={"https://via.placeholder.com/300/F9F1E7/F9F1E7"}
                model={"Respira"}
                description={"Stylish cafe chair"}
                price={"2.500.000"}/>
             
                
            </article>
            <article className="grid grid-cols-4 gap-4 relative hover:box-content w-4/5 m-auto" >
                 <Product className="bg-slate-300 m-8"
                image={"https://via.placeholder.com/300/F9F1E7/F9F1E7"}
                model={"Gerifo"}
                description={"Stylish cafe chair"}
                price={"2.500.000"}/>
                <Product 
                image={"https://via.placeholder.com/300/F9F1E7/F9F1E7"}
                model={"Muggo"}
                description={"Stylish cafe chair"}
                price={"2.500.000"}/>
                <Product 
                image={"https://via.placeholder.com/300/F9F1E7/F9F1E7"}
                model={"Pingky"}
                description={"Stylish cafe chair"}
                price={"2.500.000"}/>
                <Product 
                image={"https://via.placeholder.com/300/F9F1E7/F9F1E7"}
                model={"Potty"}
                description={"Stylish cafe chair"}
                price={"2.500.000"}/>
            </article>
                
                
            

        </div>
     );
}
 
export default Products;