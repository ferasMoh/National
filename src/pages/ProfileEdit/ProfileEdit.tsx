import "./ProfileEdit.scss";
import avatarIcon from "../../assets/images/ProfileEdit/avatar.svg";
import { useNavigate } from "react-router-dom";
import UsernameInputEdit from "../../components/UsernameInputEdit/UsernameInputEdit";
import PhoneInputEdit from "../../components/PhoneInputEdit/phoneInputEdit";
import { Button } from "react-bootstrap";

const ProfileEdit = () => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };
  return (
    <div className="profile-edit-page flexCenter">
      <div className="profile-edit flexCenter">
        <div className="profile-edit-title">
          <p>تعديل المعلومات الشخصية</p>
        </div>

        <div className="profile-edit-avatar">
          <img src={avatarIcon} alt="" />
          <div>
            <p>اسم المستخدم</p>
          </div>
        </div>

        <UsernameInputEdit />
        <PhoneInputEdit />
        <Button className="save-changes-button">حفظ التغييرات</Button>
        <span onClick={handleClose}>تراجع</span>
      </div>
    </div>
  );
};

export default ProfileEdit;
