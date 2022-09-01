import SimpleComponent from "./SimpleComponent";
import React from "react";
import renderer from 'react-test-renderer'

    test('matches dom snapshot',()=>{
        const domTree=renderer.create(<SimpleComponent/>).toJSON()
        expect(domTree).toMatchSnapshot()
    })