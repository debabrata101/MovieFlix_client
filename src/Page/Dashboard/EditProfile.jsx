import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const EditProfile = () => {
  const data = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;

    const name = from.name.value;
    const age = from.age.value;
    const mobileNumber = from.mobileNumber.value;

    const userData = { name, age, mobileNumber, email: data?.email };

    fetch(`http://localhost:5000/user/${data.email}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Profile Update !");
      });
  };

  return (
    <div>
      <h1 className="text-3xl mb-7">Edit Profile </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
        <div className="flex flex-col">
          <label htmlFor="">User Name</label>
          <input
            type="text"
            name="name"
            defaultValue={data?.name}
            className="py-2 px-1 bg-slate-50 "
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">User email</label>
          <input
            type="text"
            value={data?.email}
            disabled
            name="email"
            className="py-2 px-1 bg-slate-50 "
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">User Age</label>
          <input type="text" name="age" className="py-2 px-1 bg-slate-50 " />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">User Mobile</label>
          <input
            type="text"
            name="mobileNumber"
            className="py-2 px-1 bg-slate-50 "
          />
        </div>
        <div className="flex flex-col">
          <input
            type="submit"
            value="Update Profile"
            className="py-2 px-1 bg-slate-950 text-white "
          />
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
