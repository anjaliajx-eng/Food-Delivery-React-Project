import React from "react";
import { useDispatch } from "react-redux";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { toast } from "react-toastify";
import { AddItem } from "../redux/cartSlice";

function Card({ name, image, id, price, type }) {
    const dispatch = useDispatch();

    return (
        <div className="w-75 h-100 bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300 ">
            <div className="w-full h-[60%] overflow-hidden rounded-lg">
                <img src={image} alt="Food" className="object-cover" />
            </div>

            <div className="text-2xl font-semibold">{name}</div>

            <div className="w-full flex justify-between items-center">
                <div className="text-lg font-bold text-green-500">Rs {price}</div>
                <div className="flex justify-center items-center gap-2 text-green-500 text-lg font-semibold">
                    {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />} <span>{type}</span>
                </div>
            </div>

            <button
                onClick={() => {dispatch(AddItem({ name:name, price:price, image:image, id :id, qty:1 }));
                toast.success("Item added to cart");
            }
                    
                }
                className="w-full p-3 h-10 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition-all duration-200"
            >
                Add to dish
            </button>
        </div>
    );
}

export default Card;
