import { Button } from "../../../shared/Button"
import { ButtonTheme } from "../../../shared/Button/ui/Button"
import { Input } from "../../../shared/Input"
import { InputArea } from "../../../shared/InputArea"
import { InputDate } from "../../../shared/InputDate"
import { Select } from "../../../shared/Select"


export const Home = () => {
    return (
        <div>
            <Button>Click me</Button>
            <Button theme={ButtonTheme.secondary}>Click me</Button>
            <Input text="Input" placeholder="Placeholder" />
            <InputArea text="InputArea" placeholder="Placeholder" />
            <Select text="Select2" placeholder={"placeholder"} options={['Action', 'Action', 'Action']} />
            <Input text="Input" placeholder="Placeholder" type="date" />

            <InputDate />
        </div>
    )
}
