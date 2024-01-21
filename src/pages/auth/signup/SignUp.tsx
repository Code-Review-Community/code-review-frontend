import { Layout } from '../../../components';

const SignUp = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center py-32">
        <form className="w-[368px] m-[30px] pt-[30px] mt-0 flex flex-col">
          <span className="text-center text-[36px] font-semibold">
            회원가입
          </span>
          <div className="flex flex-col justify-center gap-2 mt-[40px]">
            <label htmlFor="nickname" className="text-[18px] font-semibold">
              닉네임
            </label>
            <input
              id="nickname"
              type="text"
              className="basicBorder px-[15px] py-[15px]"
            />
          </div>
          <div className="flex flex-col justify-center gap-2 mt-[10px]">
            <label htmlFor="age" className="text-[18px] font-semibold">
              나이
            </label>
            <input
              id="age"
              type="number"
              className="basicBorder px-[15px] py-[15px]"
            />
          </div>
          <div className="flex flex-col gap-2 mt-[10px]">
            <label htmlFor="gender" className="text-[18px] font-semibold">
              성별
            </label>
            <div
              id="gender"
              className="flex justify-between basicBorder px-[60px] py-[15px]"
            >
              <div className="flex items-center gap-2">
                <input
                  id="man"
                  name="gender"
                  value={'man'}
                  type="radio"
                  className="basicBorder px-[15px] py-[15px]"
                />
                <label htmlFor="men">남성</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="woman"
                  name="gender"
                  value={'woman'}
                  type="radio"
                  className="basicBorder px-[15px] py-[15px]"
                />
                <label htmlFor="woman">여성</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-2 mt-[10px]">
            <label htmlFor="area" className="text-[18px] font-semibold">
              지역
            </label>
            <input
              id="area"
              type="text"
              className="basicBorder px-[15px] py-[15px]"
            />
          </div>
          <div className="flex flex-col justify-center gap-2 mt-[10px]">
            <label
              htmlFor="experienceLevel"
              className="text-[18px] font-semibold"
            >
              개발 연차
            </label>
            <input
              id="experienceLevel"
              type="text"
              className="basicBorder px-[15px] py-[15px]"
            />
          </div>
          <div className="flex flex-col justify-center gap-2 mt-[10px]">
            <label htmlFor="jobRole" className="text-[18px] font-semibold">
              개발 직군
            </label>
            <input
              id="jobRole"
              type="text"
              className="basicBorder px-[15px] py-[15px]"
            />
          </div>
          <button className="basicBorder mt-[40px] px-auto py-[15px] bg-[#555555] text-white text-[16px] font-semibold">
            가입하기
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default SignUp;