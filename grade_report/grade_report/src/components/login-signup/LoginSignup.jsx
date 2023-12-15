export const LoginSignup = () => {
    return(
        <form >
            <label htmlFor="name"></label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email"></label>
            <input type="email" id="email" name="email" />
            <label htmlFor="password"></label>
            <input type="password" id="password" name="password" />
        </form>
    )
}