/* eslint-disable react/prop-types */
import { useState } from 'react';
import './styles.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormPost = (props) => {
  const { clickHiddenForm, showForm } = props;
  const navigate = useNavigate();

  const [formPost, setFormPost] = useState({
    title: '',
    userName: '', // CompanyName or UserName
    rangeSalary: '',
    location: '',
    workPlace: '', // Hybrid or at office
    vacancies: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormPost({ ...formPost, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your server endpoint
      const response = await axios.post('http://localhost:3001', formPost);

      // Handle the response if needed
      console.log('Server Response:', response.data);

      // Reset the form data to its initial state
      setFormPost({
        title: '',
        userName: '', // CompanyName or UserName
        rangeSalary: '',
        location: '',
        workPlace: '', // Hybrid or at office
        vacancies: '',
      });

      alert('Post Successfully!');
      navigate('/');
    } catch (error) {
      // Handle errors
      console.error('Error submitting the form:', error);
    }
  };
  return (
    <>
      <div className='input-container'>
        {showForm && (
          <div className='popup-containter'>
            <form onSubmit={handleSubmit}>
              <div className='title'>
                <label htmlFor='title'>
                  Title: <br />
                  <input
                    type='text'
                    id='title'
                    name='title'
                    value={formPost.title}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className='userName'>
                <label htmlFor='userName'>
                  Name: <br />
                  <input
                    type='text'
                    id='userName'
                    name='userName'
                    value={formPost.userName}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className='rangeSalary'>
                <label htmlFor='rangeSalary'>
                  Salary Range: <br />
                  <input
                    type='text'
                    id='rangeSalary'
                    name='rangeSalary'
                    value={formPost.rangeSalary}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className='location'>
                <label htmlFor='location'>
                  Location: <br />
                  <input
                    type='text'
                    id='location'
                    name='location'
                    value={formPost.location}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className='workPlace'>
                <label htmlFor='workPlace'>
                  Work Place: <br />
                  <input
                    type='text'
                    id='workPlace'
                    name='workPlace'
                    value={formPost.workPlace}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className='vacancies'>
                <label htmlFor='vacancies'>
                  Vacancies: <br />
                  <input
                    type='text'
                    id='vacancies'
                    name='vacancies'
                    value={formPost.vacancies}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className='button-submit'>
                <button onClick={clickHiddenForm}>Cancel</button>
                <button type='submit'>Post</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default FormPost;
