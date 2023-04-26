export default function Confirmation ({ prevStep, user }) {
    return (
        <div className="confirmation">
            <div className="container">
                <h2>Confirm your details here</h2>
                <p>First Name: {user.firstName}</p>
                <p>Last Name: {user.lastName}</p>
                <p>ID Number: {user.idNumber}</p>
                <p>Phone Number: {user.phoneNumber}</p>
                <p>Email: {user.email}</p>
                <p>Password: {user.password}</p>
                <p>Role: {user.role}</p>

                <button onClick={prevStep}>Back</button>
                <button >Submit & Finish</button>

            </div>
        </div>
    );

}