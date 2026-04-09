import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";

export default function ContactForm() {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.elements.name.value;
        const number = form.elements.number.value;

        dispatch(
            addContact({
                id: nanoid(),
                name,
                number,
            })
        );

        form.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" required />
            <input name="number" required />
            <button type="submit">Add</button>
        </form>
    );
}