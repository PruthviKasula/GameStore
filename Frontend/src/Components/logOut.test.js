import LogOut from '../Components/LogOut.js';
import TestRenderer from 'react-test-renderer';

/*unit test for rendering (Logout feature)*/

  test('render Logout components', ()=>{
    const testRenderer = TestRenderer.create(<LogOut/>);
    const testInstance = testRenderer.root;
    expect(testInstance.findByProps({  test_id_h2: "1"}).children).toEqual(['Click here if you are sure to logout and refresh the page ']);
    expect(testInstance.findByProps({  test_button_id: "6"}).children).toEqual([' Logout ']);
  });
