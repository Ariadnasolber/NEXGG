import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Login attempted with Email: ${email} and Password: ${password}`);
    };

    return (
        <div className="flex items-center justify-start h-screen bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/talon-bg.jpg')" }}>
            <div className="bg-[#0F1015]/60 px-30 shadow-xl w-160 h-screen pt-70 mt-[104px] rounded-tr-lg">
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-300">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="email"
                            className="w-full p-3 placeholder-gray-500 w-[402.24px] h-[50.08px] bg-[#16171b] rounded-sm border-[0.40px] border-[#363636]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            className="w-full p-3 placeholder-gray-500 w-[402.24px] h-[50.08px] bg-[#16171b] rounded-sm border-[0.40px] border-[#363636]"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-md font-medium hover:bg-blue-700 transition duration-200"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}