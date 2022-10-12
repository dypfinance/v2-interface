export default function validateHelpInfo(values) {
    let errors = {}

    if (!values.email) {
        errors.email = "Email Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email Address is Invalid"
    }
    if (!values.first_name.trim()) {
        errors.first_name = "Name is Required"
    }

    if (!values.last_name.trim()) {
        errors.last_name = "Last name is Required"
    }

    if (!values.topic.trim()) {
        errors.topic = "Topic title is Required"
    }

    if (!values.message.trim()) {
        errors.message = "Message is Required"
    }

    return errors;
}