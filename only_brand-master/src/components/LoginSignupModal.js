import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import "./LoginSignupModal.css"; // إضافة ملف CSS مخصص

const LoginSignupModal = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => {
    setIsRegistering((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg px-4 sm:px-8 py-8 w-full ">
        <div className="flex justify-center mb-6">
          <img
            src="/images/logo/logo yet.png"
            alt="Logo"
            width={120}
            className=""
          />
        </div>

        <h2 className="text-2xl  font-bold text-center mb-6 text-gray-900">
          {isRegistering ? "إنشاء حساب جديد" : "تسجيل الدخول"}
        </h2>

        <form className="space-y-6">
          {isRegistering ? (
            <>
              <TextField
                fullWidth
                label="اسم المستخدم"
                variant="outlined"
                placeholder="اسم المستخدم"
                className="custom-input"
              />
              <TextField
                fullWidth
                label="البريد الإلكتروني"
                type="email"
                variant="outlined"
                placeholder="البريد الإلكتروني"
                className="custom-input"
              />
              <TextField
                fullWidth
                label="كلمة السر"
                type="password"
                variant="outlined"
                placeholder="كلمة السر"
                className="custom-input"
              />
            </>
          ) : (
            <>
              <TextField
                fullWidth
                label="البريد الإلكتروني"
                type="email"
                variant="outlined"
                placeholder="البريد الإلكتروني"
                className="custom-input"
              />
              <TextField
                fullWidth
                label="كلمة السر"
                type="password"
                variant="outlined"
                placeholder="كلمة السر"
                className="custom-input"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="تذكرني"
              />
            </>
          )}

          <Button
            fullWidth
            type="submit"
            variant="contained"
            color={isRegistering ? "success" : "primary"}
            className="btn-log text-lg font-medium"
          >
            {isRegistering ? "تسجيل الحساب" : "تسجيل الدخول"}
          </Button>

          <Button
            fullWidth
            variant="text"
            color="secondary"
            onClick={toggleForm}
          >
            {isRegistering
              ? "لديك حساب؟ تسجيل الدخول"
              : "ليس لديك حساب؟ إنشاء حساب جديد"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginSignupModal;
