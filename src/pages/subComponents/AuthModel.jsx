import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const AuthModal = ({ isOpen, closeModal }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate()

  function handleLoginButton(stateVal){
    if(stateVal){
      closeModal()
      navigate('/community')

    }
  }
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#191f30] rounded-lg p-6 w-[80%] max-w-[400px] shadow-xl text-white"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-center mb-4">
              {isLogin ? "Login" : "Signup"}
            </h2>
            <p className="text-sm text-center mb-6">
              Please {isLogin ? "login" : "sign up"} with your details
            </p>

            <div className="flex justify-center mb-4">
              <button
                className={`px-4 py-2 mx-2 ${
                  isLogin ? "bg-purple-700" : "bg-gray-800"
                } rounded`}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button
                className={`px-4 py-2 mx-2 ${
                  !isLogin ? "bg-purple-700" : "bg-gray-800"
                } rounded`}
                onClick={() => setIsLogin(false)}
              >
                Signup
              </button>
            </div>

            <input
              type="text"
              placeholder="username"
              className="w-full p-2 mb-4 rounded bg-gray-800"
            />
            <input
              type="password"
              placeholder="password"
              className="w-full p-2 mb-4 rounded bg-gray-800"
            />
            <button className="w-full py-2 mb-4 rounded bg-purple-600 hover:bg-purple-700" onClick={()=>handleLoginButton(true)}>
              {isLogin ? "Login" : "Signup"}
              {/* {navigate('/profile')} */}
            </button>

            {/* Horizontal Line with "Or" in the center */}
            <div className="flex items-center my-4">
              <hr className="flex-1 border-gray-500" />
              <p className="px-4 text-sm text-gray-400">Or</p>
              <hr className="flex-1 border-gray-500" />
            </div>

            {/* Google Auth Button */}
            <button className="w-full flex items-center justify-center gap-2 py-2 mb-2 border border-gray-500 rounded hover:bg-gray-700 transition-colors">
              <FcGoogle size={20} />
              Continue with Google
            </button>

            {/* Close button with hover */}
            <button
              onClick={closeModal}
              className="text-sm text-gray-400 hover:text-white mt-4 block mx-auto transition-colors"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
