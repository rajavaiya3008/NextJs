'use client'

import { useState } from 'react';

const MultiStepProgress = () => {
    const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const checkoutStep = [1,2,3]

  return (
    <div className="mt-[20px]">
     <ol className="flex items-center w-full mb-4">
        {
            checkoutStep.map((step,i) => <li className={`flex w-full items-center ${currentStep > step ? 'after:border-blue-500' : ''} after:content-[''] after:w-full after:border-2`}>
            <div className={`flex items-center justify-center ${currentStep > step ? 'bg-blue-600 text-white' : 'bg-slate-50 text-gray-800'} w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0`}>
              <span className="text-xl lg:text-2xl font-bold">{currentStep > step ? '✔' : step}</span>
            </div>
          </li>)
        }
        {/* <li className={`flex w-full items-center ${currentStep > 1 ? 'after:border-blue-500' : ''} after:content-[''] after:w-full after:border-2`}>
          <div className={`flex items-center justify-center ${currentStep > 1 ? 'bg-blue-600 text-white' : 'bg-slate-50 text-gray-800'} w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0`}>
            <span className="text-xl lg:text-2xl font-bold">{currentStep > 1 ? '✔' : 1}</span>
          </div>
        </li>
        <li className={`flex w-full items-center ${currentStep > 2 ? 'after:border-blue-500' : ''} after:content-[''] after:w-full after:border-2`}>
          <div className={`flex items-center justify-center ${currentStep > 2 ? 'bg-blue-600 text-white' : 'bg-slate-50 text-gray-800'} w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0`}>
            <span className="text-xl lg:text-2xl font-bold">{currentStep > 2 ? '✔' : 2}</span>
          </div>
        </li>
        <li className={`flex items-center w-full`}>
          <div className={`flex items-center justify-center ${currentStep > 3 ? 'bg-blue-600 text-white' : 'bg-slate-50 text-gray-800'} w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0`}>
            <span className="text-xl lg:text-2xl font-bold">{currentStep > 3 ? '✔' : 3}</span>
          </div>
        </li> */}
      </ol>


      {/* Render form content based on the current step */}
      <form>
        {currentStep === 1 && (
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="username.example"
              required
            />
            <button type="button" onClick={nextStep} className="text-white bg-blue-700 hover:bg-blue-800 mt-4 px-5 py-2.5 rounded-lg">
              Next Step
            </button>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="name@company.com"
              required
            />
            <div className="flex justify-between mt-4">
              <button type="button" onClick={prevStep} className="text-white bg-gray-500 hover:bg-gray-600 px-5 py-2.5 rounded-lg">
                Previous
              </button>
              <button type="button" onClick={nextStep} className="text-white bg-blue-700 hover:bg-blue-800 px-5 py-2.5 rounded-lg">
                Next Step
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="•••••••••"
              required
            />
            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="•••••••••"
              required
            />
            <div className="flex justify-between mt-4">
              <button type="button" onClick={prevStep} className="text-white bg-gray-500 hover:bg-gray-600 px-5 py-2.5 rounded-lg">
                Previous
              </button>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 px-5 py-2.5 rounded-lg">
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default MultiStepProgress;
