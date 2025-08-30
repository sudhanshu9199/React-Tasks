import React from 'react'
import {nanoid} from 'nanoid';
import {useForm} from 'react-hook-form';
import { useContext } from 'react';
import { todoContext } from '../Wrapper';
const Create = () => {
    const [todo, settodo] = useContext(todoContext);
    const {
        register, reset, handleSubmit, formState: {errors}
    } = useForm();

    let SubmitHandler = (data) => {
        console.log(data);
        data.isCompleted = false;
        data.id = nanoid();

        settodo([...todo, data]);
        reset();
    };
  return (
    <div>
        <h1 className="text-5xl font-bold">Create Task</h1>

        <form onSubmit={handleSubmit(SubmitHandler)} className="p-5 flex flex-col gap-10 ">
            <input {...register('title', {required: 'Title not be empty.'})} type="text" placeholder='Enter task...'/>
            <small>{errors?.title?.message}</small>

              <button className="bg-emerald-600 py-2 px-5 text-3xl font-bold text-green-100 cursor-pointer active:scale-90">
          Create
        </button>
        </form>
    </div>
  )
}

export default Create