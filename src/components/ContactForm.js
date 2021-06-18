import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import ValidationError from "./ValidationError";
import image from "../images/cocktail (2).png";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name")
    .min(3, `Your name must at be at least ${3} characters`),
  age: yup
    .number()
    .required("Please enter your age")
    .typeError("Please enter your age")
    .min(10, `Your age must be at least ${10}  years`)
    .max(20, `Your age must be not older that ${20}  years`),
  website: yup
    .string()
    .required("Please enter your website")
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    ),
});

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    alert("Success!");
    setSubmitted(true);
    reset(intialValues);
  }
  const intialValues = {
    name: "Your name",
    age: 10,
  };

  console.log(errors);
  return (
    <>
      <div>
        <div class="md:grid md:grid-cols-3 md:gap-6 ">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0 flex flex-col justify-center items-center">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Information about you
              </h3>
              <p class="mt-1 text-sm text-gray-600 inline">
              <svg className="inline w-5 h-5 mr-1 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                This information will be displayed publicly so be careful what
                you share.
              </p>
              <img
                src={image}
                alt="cocktail"
                className="h-72 shake-chunk shake-constant--hover row-span-3 mt-9"
              />
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            {submitted}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                      <label
                        htmlFor="name"
                        className="block text-base font-medium text-indigo-600"
                      >
                        Name
                      </label>
                      <input
                        name="name"
                        placeholder={intialValues.name}
                        type="text"
                        id="name"
                        ref={register}
                        className="p-2 px-3 mt-1 outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-50"
                      />
                      {errors.name && (
                        <ValidationError>{errors.name.message}</ValidationError>
                      )}

                      <label
                        htmlFor="age"
                        className="block text-base font-medium text-indigo-600"
                      >
                        Age
                      </label>
                      <input
                        name="age"
                        placeholder={intialValues.age}
                        id="age"
                        ref={register}
                        className="p-2 px-3 mt-1 outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-50"
                      />
                      {errors.age && (
                        <ValidationError>{errors.age.message}</ValidationError>
                      )}

                      <div className="grid grid-cols-1 gap-6">
                        <div className="col-span-1 sm:col-span-2">
                          <label
                            htmlFor="website"
                            className="block text-base font-medium text-indigo-600"
                          >
                            Website
                          </label>
                          <div className="mt-4 flex rounded-md shadow-sm">
                            <span className="inline-flex items-center px-3 rounded-l-md mt-1 border border-r-0 border-gray-300 bg-gray-100 text-gray-500 text-sm">
                              https://
                            </span>
                            <input
                              name="website"
                              type="text"
                              id="website"
                              ref={register}
                              className="p-2 px-3 mt-1 outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-50"
                            />
                          </div>
                        </div>
                      </div>
                      {errors.website && (
                        <ValidationError>
                          {errors.website.message}
                        </ValidationError>
                      )}

                      <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
                        <input
                          type="submit"
                          className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
