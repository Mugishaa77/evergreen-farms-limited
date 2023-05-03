import './Farmer.css';

export default function FarmerProfile (farmer) {
  return (
    <div className="farmer-profile">

      <h2>{farmer.stallName}</h2>
      <h1>Stall {farmer.stallNumber}</h1>
      <h3>Contact information</h3>
      <p>Name: {farmer.fullName} </p>
      <p>Email: {farmer.emailAddress}</p>
      <p>Phone: {farmer.contactNumber}</p>

    </div>
  );
}