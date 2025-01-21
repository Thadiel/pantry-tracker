import Link from "next/link";
import RegisterForm from "../comps/regForm"

export default function Home() {
  return (
    <div >
      <p className="mb-5 text-center text-lg "> Create Your account </p>
      <RegisterForm/>
      <p className="mb-5 text-center text-sm"> Already have an account? <strong>Login</strong></p>
    </div>
    
  );
}
