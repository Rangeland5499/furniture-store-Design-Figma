const Product = ({image,model,description,price}) => {
    return ( 
        <div>
            
        <article className="md:container lg:mx-200" >

            <img src={image} alt="" />
            <div className=" bg-slate-200 mb-8">
            <h2 className=" font-bold">{model}</h2>
            <p>{description}</p>
            <p className=" font-bold">Rp {price}</p>
            

            </div>

        </article>
        

    </div>
     );
}
 
export default Product;