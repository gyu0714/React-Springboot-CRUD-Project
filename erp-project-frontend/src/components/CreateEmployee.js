import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const CreateEmployee = () => {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
  });
  const { firstName, lastName, emailId } = inputs;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSaveEmployee = (e) => {
    e.preventDefault();

    EmployeeService.createEmployee(inputs)
      .then((res) => {
        navigate('/employees');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <br />
      <br />
      <div className='container'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>Add Employee</h2>
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
              onClick={handleSaveEmployee}
              style={{ marginRight: '10px' }}
            >
              저장
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

export default CreateEmployee;
