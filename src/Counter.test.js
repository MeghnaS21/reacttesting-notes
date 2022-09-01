/*import {render,screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Counter from "./Counter"
describe('test counter application',()=>{
    test('check increment is working',()=>{
        render(<Counter></Counter>)
        const counter=screen.getByTestId('counter')
        const buttonList=screen.getAllByRole('button')
        userEvent.click(buttonList[0])
        userEvent.click(buttonList[0]) 
        userEvent.click(buttonList[0])
        expect(counter.textContent).toEqual('3')
    })
    test('check decrement is working',()=>{
        render(<Counter></Counter>)
        const counter=screen.getByTestId('counter')
        const buttonList=screen.getAllByRole('button')
        userEvent.click(buttonList[1])
        userEvent.click(buttonList[1]) 
        userEvent.click(buttonList[1])
        expect(counter.textContent).toEqual('-3')
    })
    test('check counter is working',()=>{
        render(<Counter></Counter>)
        const counter=screen.getByTestId('counter')
        const buttonList=screen.getAllByRole('button')
        userEvent.click(buttonList[1])
        userEvent.click(buttonList[0]) 
        userEvent.click(buttonList[1])
        userEvent.click(buttonList[1])
        userEvent.click(buttonList[0])
        expect(counter.textContent).toEqual('-1')
    })
    
})*/
import renderer from 'react-test-renderer'
import Counter,{increment} from './Counter'
    test('matches dom snapshot',()=>{
        const domTree=renderer.create(<Counter></Counter>)
        
        expect(domTree.toJSON()).toMatchSnapshot()
    })
