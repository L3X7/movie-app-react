import React, { useState, useEffect } from "react";


const TopTenMovies = (props) => {

    const itemsMok = [{ id: 1, name: 'Pokemon' }, { id: 2, name: 'Avatar' },{ id: 3, name: 'Pocahontas' }, { id: 4, name: 'Rey leon' },{ id: 5, name: 'Winnie Pooh' },{ id: 6, name: 'El libro de la selva' }];
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(itemsMok);
    }, [setItems]);

    return (
        <div className="bg-slate-700">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-18 sm:px-6 lg:max-w-full lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-white">Top ten movies</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
                    {
                        items.length > 0 ? (
                            items.map((item) => (
                                <div className="group relative" key={item.id}>
                                    <div className="w-10/12 min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-white">
                                                <a href="#">
                                                    <span aria-hidden="true" className="absolute inset-0"></span>
                                                    {item.name}
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ): (
                            <h1>Loading posts...</h1>
                        )
                        
                    }
                </div>
            </div>
        </div>
    );
}

export default TopTenMovies;