import {
    useState
} from "react";

const useForm = (validate) => {
    const [values, setValues] = useState({
        first_name: '',
        last_name: '',
        organization: '',
        job: '',
        email: '',
        subject: '',
        phone: '',
        message: '',
    })
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleChange = (e) => {
        const {
            name,
            value
        } = e.target
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    return {
        handleChange,
        values,
        handleSubmit,
        errors
    }
};

export default useForm;