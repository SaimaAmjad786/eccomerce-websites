
import Link from "next/link";
import TopBar from "../components/navbar";
import Header from "../components/header";

function AccountPage() {
  return (
    <div>
      <TopBar />
      <Header />
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <header className="bg-gray-100 py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-blue-900">My Account</h1>
            <p className="text-sm text-gray-500">
              Home / Pages / <span className="text-pink-500">My Account</span>
            </p>
          </div>
        </header>

        {/* Main Section */}
        <main className="container mx-auto px-4 flex flex-col items-center">
          <div className="bg-white shadow-md rounded-lg p-8 mt-12 max-w-md w-full">
            <section role="form" aria-labelledby="login-title">
              <h2 id="login-title" className="text-xl font-semibold text-center text-gray-800">
                Login
              </h2>
              <p className="text-center text-gray-600 text-sm mb-6">
                Please login using account details below.
              </p>

              {/* Form */}
              <form className="space-y-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400"
                />
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400"
                />
                <div className="text-right">
                  <Link href="/forgot-password">
                    <li className="text-sm text-gray-500 hover:text-pink-500">Forgot your password?</li>
                  </Link>
                </div>
                <button
                  type="submit"
                  className="bg-pink-500 text-white w-full py-3 rounded-lg font-semibold hover:bg-pink-600"
                >
                  Sign In
                </button>
              </form>
            </section>
            <p className="text-center text-gray-600 text-sm mt-6">
              Don&apos;t have an account?{" "}
            </p>
          </div>
          
        </main>
      </div>
    </div>
  );
}

export default AccountPage;
