import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    EmployeeService.getEmployees()
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((error) => console.log(error));
  };

  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmployee(employeeId)
      .then((res) => {
        getAllEmployees();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2 className='text-center'>Employee List</h2>
      <Link to='/add-employee' className='btn btn-primary mb-2'>
        사원 등록
      </Link>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th> Employee First Name</th>
            <th> Employee Last Name</th>
            <th> Employee Email Id</th>
            <th> Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.emailId}</td>
              <td>
                <Link
                  className='btn btn-info'
                  to={`/edit-employee/${employee.id}`}
                >
                  수정
                </Link>
                <button
                  className='btn btn-danger'
                  onClick={() => deleteEmployee(employee.id)}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployee;
