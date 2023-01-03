
const ErrorSec = ({ style, errorMsg }) => {
    return (
        <div className={style.ErrorMsg} >
            <span tabIndex={0}>{errorMsg}</span>
        </div>
    )
}
export default ErrorSec


export const ErrorMessage = {
    Email: {
        EmailEmptyError: `${('Please_enter_email')}`,
        EmailAddressErrors: `${("An email address must contain a single @ ")}`,
        EmailInvalidErrors: `${("The domain portion of the email address is invalid")}`,
    },
    Phone: {
        PhoneError: `${('Please enter number')}`,
        PhoneNumberError: `${("Phone number must be numbers only")}`,
        PhoneInvalidError: `${("It is invalid phone number")}`,
    },
    Name: {
        NameEmptyError: `${('Please enter the name')}`,
        NameError: `${('Please provide valid name.')}`,
        NameErrorWithNumber: `${(('Name must contain alpha characters only.'))}`
    },
    Password: {
        PasswordError: `${("Please enter the password")}`,
        PasswordLengthError: `${('Your password must be 8 characters')}`,
        PasswordUppercaseError: `${('Your password must contain at least one uppercase, number digit')}`,
        PasswordNotMatchOne: `${('Your password and confirm password do not match.')}`,
        PasswordNotMatch: `${('Your New password and confirm New password do not match.')}`

    },
    Passcode: {
        PasscodeError: 'Please enter the password',
        PasscodeLengthError: `${('Your password must be between 4 and 30 characters')}`,
        // PasswordUppercaseError: " Your password must contain at least one uppercase, number digit",
        // PasswordNotMatchOne: "Your password and confirm password do not match.",
        // PasswordNotMatch: "Your New password and confirm New password do not match."

    },
    Payment: {
        CardNumberEmpty: "Your card's number is empty.",
        CardNumberIncomplete: "Your card's number is incomplete.",

        CardExpirationEmpty: "Your card's expiration date is empty.",
        CardExpirationIncomplete: "Your card's expiration date is incomplete.",

        CardCVVEmpty: "Your card's cvv is empty.",
        CardCVVIncomplete: "Your card's cvv is incomplete",

        CardHolderNameEmpty: 'Please enter card holder name.',
        CardHolderNotCorrect: ""
    },

}
