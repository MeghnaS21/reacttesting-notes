import Login,{validateEmail} from "./Login";
import {screen,render,fireEvent} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
beforeAll(()=>console.log('test executin starts'))
afterAll(()=>console.log('test execution has stopped'))

describe('test the login component',()=>{
    test('render the login form and check the button',async ()=>{
        render(<Login></Login>)
        const buttonList=await screen.findAllByRole('button')
        expect(buttonList).toHaveLength(2)
    })
    test('email input should accept email type and email is xyz@gmail.com',()=>{
        render(<Login></Login>)
        const emailElement=screen.getByPlaceholderText('enter email')
        userEvent.type(emailElement,"xyz@gmail.com")
        expect(emailElement.value).toMatch('xyz@gmail.com')
    })
    test('email input should be of type email',()=>{
        render(<Login></Login>)
        const emailElement=screen.getByPlaceholderText('enter email')
        expect(emailElement).toHaveAttribute('type','email')
    })
    test('password input should be of type password',()=>{
        render(<Login></Login>)
        const passwordElement=screen.getByPlaceholderText('enter password')
        expect(passwordElement).toHaveAttribute('type','password')
    })
    test('should display error ',()=>{
        render(<Login></Login>)
        const email=screen.getByPlaceholderText('enter email')
        const password=screen.getByPlaceholderText('enter password')
        const buttonList=screen.getAllByRole('button')
        userEvent.type(email,'xyz@gmail.com')
        userEvent.type(password,'admin123')
        fireEvent.click(buttonList[0])
        const errMessage=screen.getByText('email is not valid')
        expect(errMessage).toBeInTheDocument()
    })
    test(' display success if the email is right',()=>{
        render(<Login></Login>)
        const email=screen.getByPlaceholderText('enter email')
        const password=screen.getAllByPlaceholderText('enter password')
        const buttonList=screen.getAllByRole('button')
        userEvent.type(email,'admin@gmail.com')
        userEvent.type(password,'admin123')
        userEvent.click(buttonList[0])
        const successMsg=screen.getByTestId('successmsg')
        expect(successMsg).toBeInTheDocument()
    })

})