'use client';
import React, { useState } from 'react';
import { Toast } from './Toast';

const ContactForm = () => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    reason: '',
    consent: false,
  };

  const [formData, setFormData] = useState(initialFormData);

  const [showToast, setShowToast] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const isNonEmpty = (value: string) => value.trim().length > 0;

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    let newValue: string | boolean = value;

    if (type === 'checkbox') {
      newValue = (e.target as HTMLInputElement).checked;
    }

    setFormData({
      ...formData,
      [name]: newValue,
    });

    if (
      (type === 'checkbox' && newValue) ||
      (type !== 'checkbox' && value.trim())
    )
      setErrors({
        ...errors,
        [name]: false,
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e.target);

    e.preventDefault();

    let newErrors: { [key: string]: boolean } = {};

    if (!isNonEmpty(formData.firstName)) newErrors.firstName = true;

    if (!isNonEmpty(formData.lastName)) newErrors.lastName = true;

    if (!isNonEmpty(formData.email) || !isValidEmail(formData.email))
      newErrors.email = true;

    if (!isNonEmpty(formData.message)) newErrors.message = true;

    if (!formData.reason) newErrors.reason = true;
    if (!formData.consent) newErrors.consent = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setShowToast(true);
      setFormData(initialFormData);
    }
  };

  return (
    <div className='relative'>
      <Toast
        title='Message Sent!'
        description="Thanks for completing the form. We'll be in touch soon!"
        duration={4000}
        show={showToast}
        onClose={() => setShowToast(false)}
      />
      <form
        onSubmit={handleSubmit}
        className=' bg-primary-200 flex items-center justify-center min-h-screen'
      >
        <div className='bg-white p-8 space-y-4 rounded-2xl w-full  max-w-sm  sm:max-w-md md:max-w-xl'>
          <h1 className='font-bold text-2xl'>Contact Us</h1>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='flex flex-col space-y-1 flex-1'>
              <label htmlFor='firstName'>
                First Name
                <span
                  className={`${
                    errors.firstName ? 'text-red-600' : 'text-primary-600'
                  } font-bold ml-2`}
                >
                  *
                </span>
              </label>
              <input
                type='text'
                name='firstName'
                id='firstName'
                value={formData.firstName}
                onChange={handleChange}
                autoComplete='firstName'
                className={`pl-4
  cursor-pointer
              w-full h-10 rounded-md
              border ${errors.firstName ? 'border-red-500' : 'border-gray-500'}
              hover:border-primary-600
              focus:border-primary-600
              focus:outline-primary-600
              focus:ring-0`}
              />
              {errors.firstName && (
                <span className='text-red-500 text-sm'>
                  This field is required
                </span>
              )}
            </div>
            <div className='flex flex-col space-y-1 flex-1'>
              <label htmlFor='lastName'>
                Last Name
                <span
                  className={`${
                    errors.lastName ? 'text-red-600' : 'text-primary-600'
                  } font-bold ml-2`}
                >
                  *
                </span>
              </label>
              <input
                type='text'
                name='lastName'
                id='lastName'
                value={formData.lastName}
                onChange={handleChange}
                autoComplete='lastName'
                className={` pl-4   cursor-pointer border ${
                  errors.lastName ? 'border-red-500' : 'border-gray-500'
                }
              hover:border-primary-600
              focus:border-primary-600
              focus:outline-primary-600
              focus:ring-0 rounded-md h-10 w-full`}
              />
              {errors.lastName && (
                <span className='text-red-500 text-sm'>
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className='flex flex-col space-y-1'>
            <label htmlFor='email'>
              Email
              <span
                className={`${
                  errors.email ? 'text-red-600' : 'text-primary-600'
                } font-bold ml-2`}
              >
                *
              </span>
            </label>
            <input
              type='string'
              name='email'
              value={formData.email}
              onChange={handleChange}
              id='email'
              autoComplete='email'
              className={`pl-4  cursor-pointer
              w-full h-10 rounded-md
              border ${errors.email ? 'border-red-500' : 'border-gray-500'}
              hover:border-primary-600
              focus:border-primary-600
              focus:outline-primary-600
              focus:ring-0`}
            />
            {errors.email && (
              <span className='text-red-500 text-sm'>
                Please enter a valid email address
              </span>
            )}
          </div>

          <fieldset className=''>
            <legend className='flex mb-1'>
              Query Type
              <span
                className={`${
                  errors.reason ? 'text-red-600' : 'text-primary-600'
                } font-bold ml-2`}
              >
                *
              </span>
            </legend>

            <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
              {['general', 'support'].map((option) => (
                <label
                  htmlFor={option}
                  key={option}
                  className={`border rounded-md p-2 w-full space-x-2 cursor-pointer
        ${
          formData.reason === option
            ? 'bg-primary-100 border-primary-600 bg-primary-200'
            : 'bg-white border-gray-300'
        }
        transition-colors duration-200`}
                >
                  <input
                    type='radio'
                    id={option}
                    name='reason'
                    value={option}
                    checked={formData.reason === option}
                    onChange={handleChange}
                    className='cursor-pointer accent-primary-600'
                  />
                  <span className='cursor-pointer capitalize'>
                    {option === 'general'
                      ? 'General Enquiry'
                      : 'Support Request'}
                  </span>
                </label>
              ))}
            </div>

            {errors.reason && (
              <span className='text-red-500 text-sm'>
                Please select a query type
              </span>
            )}
          </fieldset>
          <div className='flex flex-col'>
            <label htmlFor='message' className='mb-2'>
              Message
              <span
                className={`${
                  errors.message ? 'text-red-600' : 'text-primary-600'
                } font-bold ml-2`}
              >
                *
              </span>
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`p-2 cursor-pointer border ${
                errors.message ? 'border-red-500' : 'border-gray-500'
              }
              hover:border-primary-600
              focus:border-primary-600
              focus:outline-primary-600
              focus:ring-0 rounded-md`}
            ></textarea>
            {errors.message && (
              <span className='text-red-500 text-sm'>
                This field is required
              </span>
            )}
          </div>
          <fieldset>
            <div className='space-x-3 cursor-pointer'>
              <input
                type='checkbox'
                id='consent'
                name='consent'
                checked={formData.consent}
                onChange={handleChange}
                className='accent-primary-600 h-3 w-3'
              />
              <label htmlFor='consent'>
                I consent to being contacted by the team
                <span
                  className={`${
                    errors.message ? 'text-red-600' : 'text-primary-600'
                  } font-bold ml-2`}
                >
                  *
                </span>
              </label>
            </div>
            {errors.consent && (
              <span className='text-red-500 text-sm'>
                To submit this form, please consent to being contacted
              </span>
            )}
          </fieldset>

          <div>
            <button
              className='w-full bg-primary-600 text-center items-center  text-white p-2 rounded-md cursor-pointer'
              type='submit'
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
