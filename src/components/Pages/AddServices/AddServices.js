import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddServices.css";

const AddServices = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("https://stormy-basin-87659.herokuapp.com/services", data).then((res) => {
      if (res.data.insertedId) {
        alert("Successfully added your new room service.. Thank you for add  extra room. Please! check your all service");
        reset();
      }
    });
  };
  return (
    <div className="addServices">
      <h3 className="text-custom-color text-center mb-5">Add Your New Room Services</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="What's room services name" {...register("name")} />
        <input placeholder="Twin room or double room?" {...register("subName")} />
        <input placeholder="Shift" {...register("shift")} />
        <input placeholder="Image url" {...register("img")} />
        <input placeholder="Price" type="number" {...register("price")} />
        <textarea placeholder="Description" {...register("desc")} rows={4} />
        <input className="add-submit" type="submit" value="Add Your Room" />
      </form>
    </div>
  );
};

export default AddServices;
