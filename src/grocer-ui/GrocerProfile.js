import './Grocer.css';

export default function GrocerProfile (grocer) {
  return (
    <div className="grocer-profile">

      <h2>{grocer.stallName}</h2>
      <h1>Stall {grocer.stallNumber}</h1>
      <h3>Contact information</h3>
      <p>Name: {grocer.fullName} </p>
      <p>Email: {grocer.emailAddress}</p>
      <p>Phone: {grocer.contactNumber}</p>

    </div>
  );
}