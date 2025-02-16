import { useState } from "react"
import { Button } from "../../../shared/Button"
import { ButtonTheme } from "../../../shared/Button/ui/Button"
import { Input } from "../../../shared/Input"
import { InputArea } from "../../../shared/InputArea"
import { InputDate } from "../../../shared/InputDate"
import { Select } from "../../../shared/Select"
import { RadioButton } from "../../../shared/Radiobutton"


export const Home = () => {

    // const [date, setDate] = useState<Date | null>(null);

    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleRadioChange = (value: string) => {
        setSelectedOption(value);
    };


    return (
        <div>
            <Button>Click me</Button>
            <Button theme={ButtonTheme.secondary}>Click me</Button>
            <Input text="Input" placeholder="Placeholder" />
            <Input text="Input" placeholder="Placeholder" required />
            <InputArea text="InputArea" placeholder="Placeholder" />
            <Select text="Select2" placeholder={"placeholder"} options={['Action', 'Action', 'Action']} />
            <Input text="Input" placeholder="Placeholder" type="date" />


            <RadioButton
                label="Опция 1"
                name="option1"
                isChecked={selectedOption === 'option1'}
                onChangeCustom={(checked) => checked && handleRadioChange('option1')}
            />
            <RadioButton
                label="Опция 2"
                name="option1"
                isChecked={selectedOption === 'option2'}
                onChangeCustom={(checked) => checked && handleRadioChange('option2')}
            />
            <RadioButton
                label="Опция 3"
                name="option1"
                isChecked={selectedOption === 'option3'}
                onChangeCustom={(checked) => checked && handleRadioChange('option3')}
            />

            {/* <InputDate selectedDate={date} onDateChange={setDate} /> */}

        </div>
    )
}
