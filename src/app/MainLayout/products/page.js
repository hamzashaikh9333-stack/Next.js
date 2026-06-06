import React from "react";

const page = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  console.log(data);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center text-yellow-500">
        This is the products page
      </h1>
      <div className="p-4 flex flex-wrap gap-8 justify-center">
        {data.map((item) => (
          <div
            key={item.id}
            className="p-4 border h-100 w-80 flex flex-col gap-8 items-center justify-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-40 w-40 object-cover rounded-md"
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-white text-center">
                {item.title}
              </h2>
              <p className="text-white text-center">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
