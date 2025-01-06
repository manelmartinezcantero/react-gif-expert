import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Naruto']);

    const onAddCategory = (newCategory) => {
        //console.log(newCategory);
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory
                // setCategories = {setCategories}
                onNewCategory={onAddCategory}
            />

            {/* listado de items */}
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

            {/* gif items */}
        </>
    )
}
