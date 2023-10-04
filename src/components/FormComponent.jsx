import { useForm } from "../hook/useForm"

export const FormComponent = () => {
    const initialForm = {
        userName: '',
        email: '',
        password: ''
    }
    const { formState, onInputChange } = useForm(initialForm)
    const {userName,email,password}=formState

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">User name</label>
                    <input type="text" className="form-control" name="userName" placeholder='enter ur username' value={userName} onChange={onInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" placeholder='enter ur email' value={email} onChange={onInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" placeholder='here is where password goes...' value={password} onChange={onInputChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
