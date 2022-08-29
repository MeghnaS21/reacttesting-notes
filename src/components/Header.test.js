
import {render,screen} from '@testing-library/react'
import Header from './Header'
test('check whether it has data props',()=>{
    render(<Header data='some data'></Header>)
    const element=screen.getByText('some data')
    expect(element).toBeInTheDocument()
})
test('check whether that heading has classname',()=>{
    render(<Header data='some data'></Header>)
    const element=screen.getByRole('heading')
    console.log(element)
    expect(element).toHaveAttribute('class')
})