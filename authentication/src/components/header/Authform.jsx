import React from "react";

const Authform = ({
  title,
  onSubmit,
  email,
  setEmail,
  password,
  setPassword,
  error,
  buttonText,
  toggleText,
  onToggle,
}) => {
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center">
      <form
        onSubmit={onSubmit}
        className="w-96 h-fit p-4 flex flex-col gap-5 border rounded-md shadow-md items-center"
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="w-full">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            id="email"
            className="w-full text-sm bg-slate-300 p-1.5 rounded-md text-white"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full">
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            id="password"
            className="w-full text-sm bg-slate-300 p-1.5 rounded-md text-white"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="text-white rounded-md text-sm w-full flex justify-center items-center p-1.5 bg-black"
        >
          {buttonText}
        </button>
        <button type="button" onClick={onToggle} className="text-sm text-black">
          {toggleText}{" "}
          <span className="font-semibold text-amber-500">here</span>
        </button>
      </form>
    </div>
  );
};

export default Authform;
