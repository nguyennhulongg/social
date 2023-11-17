type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinishLogin = (value: any) => {
  console.log(value);
};

const FollowBar = () => {
  return (
    <div className="col-span-1 hidden lg:block bg-[#13161a] rounded-2xl">
      <div className="">
        <h2 className="text-[#EEEEEE] font-bold text-[20px] py-4 px-6">
          Who to follow
        </h2>
        <div className="flex flex-col gap-6 mt-4"></div>
      </div>
    </div>
  );
};

export default FollowBar;
