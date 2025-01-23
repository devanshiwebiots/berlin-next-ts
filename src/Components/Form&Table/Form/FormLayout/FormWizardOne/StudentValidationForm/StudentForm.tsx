import { Next, Previous } from "@/Constant";
import { useAppDispatch } from "@/Redux/Hooks";
import { handleStudentBackButton, handleStudentNextButton } from "@/Redux/Reducer/FormLayout/StudentWizardSlice";
import { StudentFormPropsType } from "@/Types/FormType";
import { Button, Form } from "reactstrap";
import FinishForm from "../Common/FinishForm";
import { StudentTab1 } from "./StudentTab1";
import { StudentTab2 } from "./StudentTab2";
import { StudentTab3 } from "./StudentTab3";

const StudentForm: React.FC<StudentFormPropsType> = ({ handleImageLabelClick, imageUrl, getUserData, studentValidationForm, level, fileInputRef }) => {
  const dispatch = useAppDispatch();
  return (
    <Form onSubmit={(e) => e.preventDefault()} className='form-wizard'>
      {level === 1 && <StudentTab1 studentValidationForm={studentValidationForm} getUserData={getUserData} />}
      {level === 2 && <StudentTab2 studentValidationForm={studentValidationForm} getUserData={getUserData} fileInputRef={fileInputRef} handleImageLabelClick={handleImageLabelClick} imageUrl={imageUrl} level={level} />}
      {level === 3 && <StudentTab3 studentValidationForm={studentValidationForm} getUserData={getUserData} />}
      {level === 4 && <FinishForm />}
      <div>
        <div className='text-end pt-3'>
          {level > 1 && (
            <Button color='secondary' onClick={() => dispatch(handleStudentBackButton())}>
              {Previous}
            </Button>
          )}
          <Button color='primary' className={`ms-1 ${level === 4 ? "disabled" : ""}`} onClick={() => dispatch(handleStudentNextButton())}>
            {Next}
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default StudentForm;
