export default function validateInfo(values) {

    
    let errors = {}

    if (!values.email) {
        errors.email = "Email Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email Address is Invalid"
    }
    if (!values.name.trim()) {
        errors.name = "Name is Required"
    }

  

    if (!values.job.trim()) {
        errors.job = "Job title is Required"
    }

    if (!values.organization.trim()) {
        errors.organization = "Organisation name is Required"
    }


    if (!values.subject.trim()) {
        errors.subject = "Subject is Required"
    }

    if (!values.message.trim()) {
        errors.message = "Message is Required"
    }

    return errors;
}