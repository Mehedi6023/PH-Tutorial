import Lottie from 'lottie-react';
import { useContext } from 'react';
import registerAnimation from '../assets/register.json';
import { AuthContext } from '../context/AuthContext';
const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((userCredential) => console.log(userCredential.user))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="hero bg-base-200 grow">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            style={{ width: '200px' }}
            animationData={registerAnimation}
            loop={true}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="fieldset">
              <h1 className="text-3xl text-center font-bold mb-6">
                Register Now !
              </h1>
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
                name="email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
                name="password"
              />
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
