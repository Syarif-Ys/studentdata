import { Link } from "react-router-dom";

export default function StudentTable(){
    return (
        <div className="container">
            <h2>Student Records</h2>
            <div className="table container">
                <Link to="/student/create" class="btn btn-add">Add new Student</Link>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Place</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Khanam</td>
                            <td>Bengaluru</td>
                            <td>1234567</td>
                            <td><a href="" className="btn btn-info">View</a>
                                <a href="" className="btn btn-primary">Edit</a>
                                <a href="" className="btn btn-danger">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}