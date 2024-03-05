import "./UsernameInput.scss";
import usernameIcon from "../../../assets/images/Login/username.svg";

const UsernameInput = ({ setName, register }: any) => {
  return (
    <div className="username-input-component">
      <p>اسم المستخدم</p>
      <input
        type="text"
        placeholder="اسم المستخدم"
        {...register("username", {
          required: "اسم المستخدم مطلوب",
        })}
        onChange={(e) => setName(e.target.value)}
      />
      <img src={usernameIcon} alt="" />
    </div>
  );
};

export default UsernameInput;
