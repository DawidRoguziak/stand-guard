import {configure} from "vee-validate";


export default function setupVeeValidate() {
    configure({
        validateOnBlur: false,
        validateOnChange: false,
        validateOnInput: false,
        validateOnModelUpdate: false,
    });
}