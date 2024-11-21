import Card from "../Widgets/Card";
import SignUpImage from "../../assets/signup_illustration.png";
import ComponyLogo from "../../assets/company_logo.png";
import GridContainer from "../Common/GridContainer";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "../Common/InputField";

interface SignUpFormInput {
  email: string;
  password: string;
  confirmPassword: string;
  isTermsAccepted: boolean;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
  } = useForm<SignUpFormInput>({
    defaultValues: {
      email: "",
      confirmPassword: "",
      password: "",
      isTermsAccepted: false,
    },
    mode: "all",
  });
  const onSubmit: SubmitHandler<SignUpFormInput> = (data) => console.log(data);
  // Watch the value of the password field
  const passwordValue = watch("password");
  return (
    <GridContainer
      columns="grid-cols-1"
      gap="gap-0"
      className="md:grid-cols-2 md:gap-4"
    >
      {/* Left Side: Image */}
      <div>
        <div className="h-1/2  md:pt-10 flex items-start justify-center md:items-start md:justify-start rounded-2xl ">
          <div className="flex ">
            <img
              className="w-28 h-28 md:w-40 md:h-40 mr-2"
              src={ComponyLogo}
              alt="logo"
            />

            <h2 className="hidden md:block  text-left ">
              <span className="block mt-9 ">The</span>
              <h1 className="inline-block leading-8 text-2xl md:text-4xl    lg:text-5xl font-bold mb-2 pb-1 border-b-4 border-dashed border-primaryFocusColor text-appPrimary tracking-wide transition-all duration-300 ease-in-out hover:text-orange-700 hover:border-b-primary">
                Simplest
              </h1>

              <h2 className="">way</h2>
              <h2 className="block">to get admin insights</h2>
            </h2>
          </div>
        </div>
        <div className="hidden h-1/2  md:flex items-end justify-center  rounded-2xl ">
          <img src={SignUpImage} className=" object-cover" alt="Sign Up" />
        </div>
      </div>
      {/* Right Side: Form */}
      <div className="flex items-center justify-center px-4 py-0 md:p-4">
        <Card className=" w-auto">
          <div className="flex flex-col items-center justify-center  ">
            <div className="space-y-4 ">
              <h2 className="">Create an account</h2>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <InputField
                  label="Your email"
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  register={register}
                  rules={{
                    required: "Must not be empty",
                    minLength: {
                      value: 10,
                      message: "Must be at least 10 characters",
                    },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  }}
                  error={errors.email}
                  touched={touchedFields.email}
                />
                <InputField
                  label="Your password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  register={register}
                  rules={{
                    required: "Required",
                    minLength: {
                      value: 6,
                      message: "Must be at least 6 characters",
                    },
                  }}
                  error={errors.password}
                  touched={touchedFields.password}
                />
                {/* <div>
                  <h5 className="block mb-2 font-medium ">Password</h5>
                  <input
                    type="password"
                    {...register("password")}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5   "
                  />
                </div> */}
                {/* <div>
                  <h5 className="block mb-2 font-medium ">Confirm password</h5>
                  <input
                    type="confirm-password"
                    {...register("confirmPassword")}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                </div> */}

                {/* Confirm Password Field */}
                <InputField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  placeholder="Re-enter your password"
                  register={register}
                  rules={{
                    required: "Please confirm your password",
                    validate: (value: string) =>
                      value === passwordValue || "Passwords do not match", // Custom validation to match passwords
                  }}
                  error={errors.confirmPassword}
                  touched={touchedFields.confirmPassword}
                />
                <div className="flex flex-col">
                  <div className="flex justify-center !items-center">
                    <InputField
                      name="isTermsAccepted"
                      type="checkbox"
                      register={register}
                      rules={{
                        required: "You must accept it",
                      }}
                      error={errors.isTermsAccepted}
                      touched={touchedFields.isTermsAccepted}
                      className=""
                      isShowErrorMessage={false}
                    />

                    <div className="ml-3 text-sm flex flex-row items-center justify-center ">
                      <h5 className="font-light  ">
                        I accept the{" "}
                        <a
                          className="font-medium text-appPrimary hover:underline"
                          href="#"
                        >
                          Terms and Conditions
                        </a>
                      </h5>
                    </div>
                  </div>
                  {/* Error Message */}
                  {touchedFields && errors && (
                    <p className="text-red-500 text-sm top-0">
                      {errors.isTermsAccepted?.message}
                    </p>
                  )}
                </div>
                <button type="submit" className="btn-primary w-full ">
                  Signup
                </button>
                <h5 className="font-light ">
                  Already have an account?{" "}
                  <a href="#" className="font-medium  hover:underline ">
                    Login here
                  </a>
                </h5>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </GridContainer>
  );
};

export default SignUp;
