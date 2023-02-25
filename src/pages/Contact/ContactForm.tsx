import React from 'react';
import { useForm } from 'react-hook-form';

interface IFormInputs {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>(); // you can supply default value as second argument
  const watchAllFields = watch(); // when pass nothing as argument, you are watching everything
  const watchFields = watch(['name', 'email', 'message']); // you can also target specific fields by their names

  const onSubmit = (data: IFormInputs) => {
    alert(JSON.stringify(data));
    console.log(data);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 -my-20">
        <div className="flex justify-center items-center border-r border-r-border-main h-[100vh]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col text-text-main gap-4 w-[65%]"
          >
            <div className="flex flex-col">
              <label className="text-text-main pb-2">_name:</label>
              <input
                type="text"
                className="bg-bg-secondary border border-border-main px-4 py-2 hover:border  hover:border-text-main outline-none text-text-secondary rounded-lg "
                {...register('name', { required: true, maxLength: 50 })}
                placeholder="Enter Name"
              />
              {errors.name && (
                <p className="text-denger">{'Name is required'}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label>email</label>
              <input
                type="email"
                {...register('email')}
                className="bg-bg-secondary border border-border-main px-4 py-2 hover:border  hover:border-text-main outline-none text-text-secondary rounded-lg "
                placeholder="Enter Email"
              />
              {errors.name && (
                <p className="text-denger">
                  {'Email is required and Enter valid email'}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label>message</label>
              <textarea
                rows={5}
                {...register('message')}
                className="bg-bg-secondary border border-border-main px-4 py-2 hover:border  hover:border-text-main outline-none text-text-secondary rounded-lg "
                placeholder="Enter Message"
              />
              {errors.message && <p>{'Enter your message please'}</p>}
            </div>

            <div className="pt-6">
              <input
                type="submit"
                value={'submit-message'}
                className="border px-4 py-3 rounded-lg cursor-pointer"
              />
            </div>
          </form>
        </div>
        <div className="text-text-main hidden md:flex flex-col justify-center items-center h-full ">
          <div className="form-message flex">
            <ul>
              <li className="list-decimal">
                <span className="text-pink">const</span>{' '}
                <span className="text-hero-blue">button</span>{' '}
                <span className="text-pink">=</span>{' '}
                <span className="text-hero-blue">document.querySelector</span>
                <span>
                  (<span className="text-yellow">'#sendBtn'</span>)
                </span>
                ;{' '}
              </li>
              <li className="list-decimal"></li>
              <li className="list-decimal">
                <span className="text-pink">const</span>{' '}
                <span className="text-hero-blue">message</span>{' '}
                <span className="text-pink">=</span>
                <span>{' {'}</span>
                <br />
              </li>
              <li className="list-decimal">
                <span className="text-hero-blue pl-4">name</span>:{' '}
                <span className="text-yellow">"{watchAllFields.name}"</span>
              </li>
              <li className="list-decimal">
                <span className="text-hero-blue pl-4">email</span>:{' '}
                <span className="text-yellow">"{watchAllFields.email}"</span>
              </li>
              <li className="list-decimal">
                <span className="text-hero-blue pl-4">message</span>:{' '}
                <span className="text-yellow">"{watchAllFields.message}"</span>
              </li>
              <li className="list-decimal">
                <span className="text-main pl-4">date</span>:{' '}
                <span className="text-yellow">"12-02-23"</span>
              </li>
              <li className="list-decimal">{'}'}</li>
              <li className="list-decimal"></li>
              <li className="list-decimal">
                <span className="text-hero-blue">button.addEventListener</span>
                {'('}
                <span className="text-yellow">"click"</span>, {'()'}
                <span className="text-pink"> {'=>'} </span>
                {'{'}
              </li>
              <li className="list-decimal pl-4">
                <span className="text-hero-blue">form.send(message)</span>
              </li>
              <li className="list-decimal">{'})'}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
