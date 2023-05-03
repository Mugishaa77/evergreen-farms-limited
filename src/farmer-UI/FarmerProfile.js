import './Farmer.css';

export default function FarmerProfile (farmer) {
  return (
    <div className="farmer-profile">
       <h1>Stall Details</h1>
      <h2>{farmer.stallName}</h2>
       <h2>Stall Number:{farmer.stallNumber}</h2>

      <h3> Farmer's Contact information</h3>
      <p>Name: {farmer.fullName} </p>
      <p>Email:<a href="mailto:{farmer.emailAddress}"
                title="Email"
                rel="noopener noreferrer"
                className="email-link"></a> {farmer.emailAddress}</p>
      <p>Phone: {farmer.contactNumber}</p>

    </div>
  );
}