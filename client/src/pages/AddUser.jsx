export function AddUser(){
    return(
        <div className="addUser-container">
            <form className="addUser-form">
                <h2>Add New User</h2>
                <label>First Name:</label>
                <input type="text" id="FirstName" name="FirstName" required/>

                <label>Last Name:</label>
                <input type="text" id="LastName" name="LastName" required/>

                <label>ID Number:</label>
                <input type="number" id="IdNumber" name="IdNumber" required/>

                <label>Password:</label>
                <input type="Password" id="Password" name="Password" required/>

                {/*<label>Verify Password:</label>*/}
                {/*<input type="Password" id="VerifyPassword" name="VerifyPassword" required/>*/}

                <label>Phone:</label>
                <input type="tel" id="tel" name="tel" required/>

                <label>Email:</label>
                <input type="email" id="email" name="email" required/>

                <label>Address:</label>
                <input type="text" id="Address" name="Address" required/>

                <label>Date Of Birth:</label>
                <input type="date" id="DateBirth" name="DateBirth" required/>

                <label>Role:</label>
                <select id="role" name="role" required>
                    <option value="" disabled selected>Select a Role</option>
                    <option value="Admin">Admin</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Patient">Patient</option>
                </select>

                <button type="submit">Add User</button>
                <button type="reset" value="reset">Clear Form</button>

            </form>
        </div>
    )
}