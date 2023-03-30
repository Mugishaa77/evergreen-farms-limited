import { Outlet, useNavigate } from 'react-router-dom';

export default function FarmerProducts (){

    const navigate = useNavigate ();

    return (<div className="farmer-products">
        Products
        <button onClick ={() => navigate("/farmer-dashboard/farmer-products/create-product")} >
            Create</button>
            <Outlet />
    </div>)
    
}