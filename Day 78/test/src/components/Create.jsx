import React from "react";
import { nanoid } from "nanoid";
import "/src/index.css";
import { useForm } from "react-hook-form";
  import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

const Create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  let SubmitHandler = (data) => {
    // e.preventDefault();
    console.log(data);
    data.isCompleted = false;
    data.id = nanoid();
    // const newTodo = {
    //     id: nanoid(),
    //     // title: title,
    //     isCompleted: false,
    // };
    // settodos([...todos, newTodo]);
    // settitle('');
    settodos([...todos, data]);
    toast.success('Succesfully! Todo')
    reset();
  };
  

  return (
    <div>
      <h1 className="text-5xl font-bold">Create Task</h1>
      <form
        onSubmit={handleSubmit(SubmitHandler)}
        className="p-5 flex flex-col gap-10 "
      >
        <input
          {...register("title", {
            required: "title can't be empty",
          })}
          type="text"
          placeholder="Enter task..."
          className="border-3 w-1/1 font-medium text-3xl p-2.5 border-emerald-600 rounded-2xl"
        />
        {/* {errors && errors.title && errors.title.message && (<small>{errors.title.message}</small>) } */}
          <small>{errors?.title?.message}</small>

        <button className="bg-emerald-600 py-2 px-5 text-3xl font-bold text-green-100 cursor-pointer active:scale-90">
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
