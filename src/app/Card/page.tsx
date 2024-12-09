import Image from 'next/image';

export default function Cart() {
    return (
        <div className="font-sans max-w-7xl mx-auto bg-white py-8 px-4">
            <div className="grid md:grid-cols-3 gap-8">

                {/* Cart Items Section */}
                <div className="md:col-span-2">
                    <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
                    <div className="space-y-6">
                        {[{
                            id: 1,
                            name: "Gradient Graphic T-shirt",
                            price: "$145",
                            size: "Large",
                            color: "White",
                            img: "/arrivals/t-shirt1.svg"
                        }, {
                            id: 2,
                            name: "Checkered Shirt",
                            price: "$180",
                            size: "Medium",
                            color: "Red",
                            img: "/arrivals/shirt1.svg"
                        }, {
                            id: 3,
                            name: "Skinny Fit Jeans",
                            price: "$240",
                            size: "Large",
                            color: "Blue",
                            img: "/arrivals/jeens1.svg"
                        }].map((item) => (
                            <div key={item.id} className="flex items-center gap-6 border-b pb-4">
                                <div className="w-24 h-24">
                                    <Image src={item.img} alt={item.name} width={96} height={96} className="object-cover rounded-md" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-lg font-semibold">{item.name}</h2>
                                    <p className="text-sm text-gray-500">Size: {item.size} | Color: {item.color}</p>
                                    <button className="text-sm text-red-500 mt-2">Remove</button>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button className="p-2 border border-gray-300 rounded">-</button>
                                    <span>1</span>
                                    <button className="p-2 border border-gray-300 rounded">+</button>
                                </div>
                                <div className="text-lg font-bold">{item.price}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Order Summary Section */}
                <div className="bg-gray-100 rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                    <ul className="space-y-4 text-lg">
                        <li className="flex justify-between">
                            <span>Subtotal</span>
                            <span className="font-bold">$565</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Discount (-20%)</span>
                            <span className="font-bold text-red-500">-$113</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Delivery Fee</span>
                            <span className="font-bold">$15</span>
                        </li>
                        <li className="flex justify-between font-bold text-xl">
                            <span>Total</span>
                            <span>$467</span>
                        </li>
                    </ul>

                    <div className="mt-6">
                        <input type="text" placeholder="Add promo code" className="w-full p-3 border border-gray-300 rounded mb-4" />
                        <button className="w-full bg-black text-white py-3 rounded">Apply</button>
                    </div>

                    <button className="w-full bg-black hover:bg-blue-700 text-white py-3 rounded mt-4 font-bold">Go to Checkout</button>
                </div>

            </div>
        </div>
    );
}