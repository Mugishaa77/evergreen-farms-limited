import './Grocer.css';

export default function GrocerProfile (grocer) {
  return (
    <div className="grocer-profile">
         <h1>Stall Details</h1>
      <h2>{grocer.stallName}</h2>
      <h2>Stall Number:  {grocer.stallNumber}</h2>

      <h3>Grocer's Contact information</h3>
      <p>Name: {grocer.fullName} </p>
      <p>Email:<a href="mailto:{grocer.emailAddress}"
                title="Email"
                rel="noopener noreferrer"
                className="email-link"> {grocer.emailAddress}</a></p>
      <p>Phone: {grocer.contactNumber}</p>

    </div>
  );
}