import PopupCart from '../Components/ShoppingCartUT';
import TestRenderer from 'react-test-renderer';

/*unit test for rendering (shopping cart UI)*/

// //render App compnent
  test('render shopping cart component', ()=>{
    const testRenderer = TestRenderer.create(<PopupCart/>);
    const testInstance = testRenderer.root;
    expect(testInstance.findByProps({  test_id_1: "11"}).children).toEqual(['Double-Click to View shopping cart items ']);
    expect(testInstance.findByProps({  test_id_2: "22"}).children).toEqual(['Shopping Itmes:']);
    expect(testInstance.findByProps({  test_id_3: "33"}).children).toEqual(['Total Fees:$']);
    expect(testInstance.findByProps({  test_id_4: "44"}).children).toEqual(['Checkout ']);
  });