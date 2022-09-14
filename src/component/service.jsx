const Service = ({icon,service,text}) => {
    return ( 
        <div>
            <img src={icon} alt="" />
                <div>
                    <p className="font-bold">{service}</p>
                    <p>{text}</p>
                </div>
            
            
        </div>
     );
}
 
export default Service;