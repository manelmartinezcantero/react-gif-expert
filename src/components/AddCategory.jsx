import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        //setCategories( categories => [...categories, inputValue]);
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={ onSubmit }>
            <input type="text" placeholder="Buscar texto" value={inputValue} onChange={(event) => onInputChange(event)} />
        </form>
    )
}
