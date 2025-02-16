import { useState } from "react"
import { Button } from "../../../shared/Button"
import { ButtonTheme } from "../../../shared/Button/ui/Button"
import { Input } from "../../../shared/Input"
import { InputArea } from "../../../shared/InputArea"
import { InputDate } from "../../../shared/InputDate"
import { Select } from "../../../shared/Select"
import { Radiobutton } from "../../../shared/Radiobutton"


export const Home = () => {
    const [date, setDate] = useState<Date | null>(null);
    return (
        <div>
            {/* <Button>Click me</Button>
            <Button theme={ButtonTheme.secondary}>Click me</Button> */}
            <Input text="Input" placeholder="Placeholder" />
            <Input text="Input" placeholder="Placeholder" required />
            {/* <InputArea text="InputArea" placeholder="Placeholder" />
            <Select text="Select2" placeholder={"placeholder"} options={['Action', 'Action', 'Action']} />
            <Input text="Input" placeholder="Placeholder" type="date" /> */}



            <InputDate selectedDate={date} onDateChange={setDate} />

            <Radiobutton />
        </div>
    )
}
