import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const UpdateEmployee = () => {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
  });
  const { id } = useParams();
  const navigate = useNavigate();

  const { firstName, lastName, emailId } = inputs;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleUpdateEmployee = (e) => {
    e.preventDefault();
    // if (id) {
    // console.log(id, inputs);
    EmployeeService.updateEmployee(id, inputs)
      .then((res) => {
        navigate('/employees');
      })
      .catch((error) => {
        console.log(error);
      });
    // } else {
    // navigate(-1);
    // }
  };

  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((res) => {
        setInputs({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          emailId: res.data.emailId,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <br />
      <br />
      <div className='container'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>Update Employee</h2>
        </div>
        <div className='card-body'>
          <form>
            <div className='form-group mb-2'>
              <label className='form-label'>First Name</label>
              <input
                type='text'
                placeholder='first name'
                name='firstName'
                className='form-control'
                value={firstName}
                onChange={handleChange}
              />
            </div>

            <div className='form-group mb-2'>
              <label className='form-label'>Last Name</label>
              <input
                type='text'
                placeholder='last name'
                name='lastName'
                className='form-control'
                value={lastName}
                onChange={handleChange}
              />
            </div>

            <div className='form-group mb-2'>
              <label className='form-label'>Email</label>
              <input
                type='text'
                placeholder='email'
                name='emailId'
                className='form-control'
                value={emailId}
                onChange={handleChange}
              />
            </div>

            <button
              className='btn btn-success'
              onClick={handleUpdateEmployee}
              style={{ marginRight: '10px' }}
            >
              수정
            </button>
            <Link to='/employees' className='btn btn-danger'>
              취소
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
