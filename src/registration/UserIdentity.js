export default function UserIdentity ({ nextStep, onChange, user}) {
    return (
        <div className="user-id">
            <div className="container">
                <h2>User Identity</h2>
                <label>First Name</label>
                <input
                type="text"
                name="firstName"
                onChange={(e) => onChange= ('firstName', e.target.value)}
                value={user.firstName}
                className="form-control"
                />

                <label>Last Name</label>
                <input
                type="text"
                name="lastName"
                onChange={(e) => onChange= ('lastName', e.target.value)}
                value={user.lastName}
                className="form-control"
                />

                <label>ID Number</label>
                <input
                type="text"
                name="idNumber"
                onChange={(e) => onChange =('idNumber', e.target.value)}
                value={user.idNumber}
                className="form-control"
                />

                <button onClick={nextStep}>Next</button>
            </div>
        </div>
    );
}