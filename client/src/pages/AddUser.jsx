export function AddUser(){

    const handleSubmit= async (e)=>{
        e.preventDefault()


        // save all value in user data object
        const userData={
            FirstName: e.target.FirstName.value,
            LastName: e.target.LastName.value,
            IdNumber: e.target.IdNumber.value,
            Password: e.target.Password.value,
            Role: e.target.role.value,
            Email: e.target.email.value,
            Phone: e.target.tel.value,
            Address: e.target.Address.value,
            DateBirth: e.target.DateBirth.value,
            AccountStatus:"active",
        };

        try {
            const response = await fetch('http://localhost:5000/addUser',{
                    method:'POST',
                    headers:{
                            'content-Type':'application/json',
                    },
                    body:JSON.stringify(userData),
                });

                if (response.ok){
                    console.log('User added successfully!');
                }else {
                    console.log('Failed to add user');
                }
        } catch(error){
            console.error('Error:', error);
        }

    };


    return(
        <div className="addUser-container">
            <form className="addUser-form" onSubmit={handleSubmit}>
                <h2>Add New User</h2>
                <label>First Name:</label>
                <input type="text" id="FirstName" name="FirstName" required/>

                <label>Last Name:</label>
                <input type="text" id="LastName" name="LastName" required/>

                <label>ID Number:</label>
                <input type="number" id="IdNumber" name="IdNumber" required/>

                <label>Password:</label>
                <input type="password" id="Password" name="Password" required/>

                <label>Phone:</label>
                <input type="tel" id="tel" name="tel" required/>

                <label>Email:</label>
                <input type="email" id="email" name="email" required/>

                <label>Address:</label>
                <input type="text" id="Address" name="Address" required/>

                <label>Date Of Birth:</label>
                <input type="date" id="DateBirth" name="DateBirth" required/>

                <label>Role:</label>
                <select id="role" name="role" required defaultValue="">
                    <option disabled value="">Select a Role</option>
                    <option value="admin">Admin</option>
                    <option value="doctor">Doctor</option>
                    <option value="patient">Patient</option>
                </select>

                <button type="submit">Add User</button>
                <button type="reset">Clear Form</button>

            </form>
        </div>
    )
}