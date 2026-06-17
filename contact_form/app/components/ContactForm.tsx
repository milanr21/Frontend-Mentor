'use client';
import React, { useState } from 'react';
import { ErrorMessage } from './ui/ErrorMessage';
import { FormData, FormErrors } from '../types';
import Toast from './ui/Toast';

const ContactForm = () => {
  const initialFormData: FormData = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    queryType: '',
    consent: false,
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const [showToast, setShowToast] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

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

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: FormErrors = {
      firstName: !isNonEmpty(formData.firstName),
      lastName: !isNonEmpty(formData.lastName),
      email: !isNonEmpty(formData.email) || !isValidEmail(formData.email),
      message: !isNonEmpty(formData.message),
      queryType: !formData.queryType,
      consent: !formData.consent,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => !error)) {
      setShowToast(true);
      setFormData(initialFormData);
    }
  };

  return (
    <div className='w-full max-w-xl px-4'>
      <Toast
        title='Message Sent!'
        description="Thanks for completing the form. We'll be in touch soon!"
        duration={4000}
        show={showToast}
        onClose={() => setShowToast(false)}
      />
      <form
        onSubmit={handleSubmit}
        className='bg-white p-8 space-y-4 rounded-2xl w-full'
      >
        <h1 className='font-bold text-2xl'>Contact Us</h1>
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='flex flex-col space-y-1 flex-1'>
            <label htmlFor='firstName'>
              First Name <span className='text-primary-600 font-bold'>*</span>
            </label>
            <input
              type='text'
              name='firstName'
              id='firstName'
              value={formData.firstName}
              onChange={handleChange}
              autoComplete='given-name'
              aria-invalid={errors.firstName}
              aria-describedby={
                errors.firstName ? 'firstName-error' : undefined
              }
              className={`pl-4 cursor-pointer w-full h-10 rounded-md border ${
                errors.firstName ? 'border-danger' : 'border-neutral-500'
              } hover:border-primary-600 focus:border-primary-600 focus:outline-primary-600 focus:ring-0`}
            />
            <ErrorMessage
              id='firstName-error'
              message={errors.firstName ? 'This field is required' : undefined}
            />
          </div>
          <div className='flex flex-col space-y-1 flex-1'>
            <label htmlFor='lastName'>
              Last Name <span className='text-primary-600 font-bold'>*</span>
            </label>
            <input
              type='text'
              name='lastName'
              id='lastName'
              value={formData.lastName}
              onChange={handleChange}
              autoComplete='family-name'
              aria-invalid={errors.lastName}
              aria-describedby={errors.lastName ? 'lastName-error' : undefined}
              className={`pl-4 cursor-pointer w-full h-10 rounded-md border ${
                errors.lastName ? 'border-danger' : 'border-neutral-500'
              } hover:border-primary-600 focus:border-primary-600 focus:outline-primary-600 focus:ring-0`}
            />
            <ErrorMessage
              id='lastName-error'
              message={errors.lastName ? 'This field is required' : undefined}
            />
          </div>
        </div>
        <div className='flex flex-col space-y-1'>
          <label htmlFor='email'>
            Email <span className='text-primary-600 font-bold'>*</span>
          </label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            id='email'
            autoComplete='email'
            aria-invalid={errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`pl-4 cursor-pointer w-full h-10 rounded-md border ${
              errors.email ? 'border-danger' : 'border-neutral-500'
            } hover:border-primary-600 focus:border-primary-600 focus:outline-primary-600 focus:ring-0`}
          />
          <ErrorMessage
            id='email-error'
            message={
              errors.email ? 'Please enter a valid email address' : undefined
            }
          />
        </div>

        <fieldset className='space-y-1'>
          <legend className='flex mb-1'>
            Query Type <span className='text-primary-600 font-bold'>*</span>
          </legend>
          <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
            {(['general', 'support'] as const).map((option) => (
              <label
                htmlFor={option}
                key={option}
                className={`border rounded-md p-2 w-full flex items-center gap-2 cursor-pointer ${
                  formData.queryType === option
                    ? 'bg-primary-200 border-primary-600'
                    : 'bg-white border-neutral-500'
                } transition-colors duration-200`}
              >
                <input
                  type='radio'
                  id={option}
                  name='queryType'
                  value={option}
                  checked={formData.queryType === option}
                  onChange={handleChange}
                  className='accent-primary-600'
                />
                <span className='cursor-pointer capitalize'>
                  {option === 'general' ? 'General Enquiry' : 'Support Request'}
                </span>
              </label>
            ))}
          </div>
          <ErrorMessage
            message={
              errors.queryType ? 'Please select a query type' : undefined
            }
          />
        </fieldset>
        <div className='flex flex-col'>
          <label htmlFor='message' className='mb-1'>
            Message <span className='text-primary-600 font-bold'>*</span>
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            rows={5}
            aria-invalid={errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={`p-2 cursor-pointer border ${
              errors.message ? 'border-danger' : 'border-neutral-500'
            } hover:border-primary-600 focus:border-primary-600 focus:outline-primary-600 focus:ring-0 rounded-md`}
          ></textarea>
          <ErrorMessage
            id='message-error'
            message={errors.message ? 'This field is required' : undefined}
          />
        </div>
        <fieldset>
          <div className='flex items-center gap-3 cursor-pointer'>
            <input
              type='checkbox'
              id='consent'
              name='consent'
              checked={formData.consent}
              onChange={handleChange}
              aria-invalid={errors.consent}
              aria-describedby={errors.consent ? 'consent-error' : undefined}
              className='accent-primary-600 h-4 w-4'
            />
            <label htmlFor='consent' className='cursor-pointer'>
              I consent to being contacted by the team{' '}
              <span className='text-primary-600 font-bold'>*</span>
            </label>
          </div>
          <ErrorMessage
            id='consent-error'
            message={
              errors.consent
                ? 'To submit this form, please consent to being contacted'
                : undefined
            }
          />
        </fieldset>

        <button
          className='w-full bg-primary-600 text-center text-white p-3 rounded-md cursor-pointer hover:bg-neutral-900 transition-colors'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
