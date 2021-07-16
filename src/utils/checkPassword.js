export function checkPassword(password, rePassword) {
    if (password !== rePassword) {
        return false;
    }
    
    if (password.trim().length <= 7) {
        return false;
    }

    return true;
}