import OutlinedButton from "@/components/shared/Button/OutlinedButton/OutlinedButton";
import PrimaryButton from "@/components/shared/Button/PrimaryButton/PrimaryButton";
import Dropdown from "@/components/shared/Dropdown/Dropdown";
import InputField from "@/components/shared/InputField/InputField";

export default function Home() {

  return (
     <div>
         <PrimaryButton title={'Log In'}/>
         <OutlinedButton title={'Cancel'} />
         <InputField label="Label"/>
         <Dropdown list={["Orange", "Mango", "Apple"]} label="Label" />
     </div>
  );
}
