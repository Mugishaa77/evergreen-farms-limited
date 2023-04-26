export default function UserRole ({ prevStep, nextStep, onChange, user}) {
    return (
        <div className="user-role">
            <div className="container">
                <label>User Role</label>
                <input
                type="text"
                name="role"
                value={user.role}
                className="form-control"
                />
                <select  onChange= {(e) => onChange('role', e.target.value)} required>
          <option value="">Select Role</option>
          <option value="farmer">Farmer(vendor)</option>
          <option value="grocer">Grocer(vendor)</option>
          <option value="customer">Customer(buyer)</option>
        </select>

        <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
            </div>
        </div>
    );


}