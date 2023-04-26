export default function UserAddressInfo ({ nextStep, prevStep, onChange, user}) {
    return (
        <div className="user-address">
            <div className="container">
                <h2>User Address Information</h2>
                <label>Phone Number</label>
                <input
                type="text"
                name="phoneNumber"
                onChange={(e) => onChange=('phoneNumber', e.target.value)}
                value={user.phoneNumber}
                className="form-control"
                />

                <label>Email Address</label>
                <input
                type="text"
                name="email"
                onChange={(e) => onChange=('email', e.target.value)}
                value={user.email}
                className="form-control"
                />

                <label>Password</label>
                <input
                type="text"
                name="password"
                onChange={(e) => onChange=('password', e.target.value)}
                value={user.password}
                className="form-control"
                />

                <button onClick={prevStep}>Back</button>
                <button onClick={nextStep}>Next</button>

            </div>
        </div>
    )
}