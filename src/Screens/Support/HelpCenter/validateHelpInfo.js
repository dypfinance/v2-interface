export default function validateHelpInfo(values) {
    let errors = {}

    if (!values.email) {
        errors.email = "Email Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email Address is Invalid"
    }
    if (!values.name.trim()) {
        errors.name = "Name is Required"
    }

    if (!values.topic.trim()) {
        errors.topic = "Topic is Required"
    }

    if (!values.social_account.trim()) {
        errors.social_account = "Social Media is Required"
    }

    if (!values.username.trim()) {
        errors.username = "Username is Required"
    }


    if (!values.message.trim()) {
        errors.message = "Message is Required"
    }

    return errors;
}