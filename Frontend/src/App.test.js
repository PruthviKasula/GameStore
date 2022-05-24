import App from './App';
import TestRenderer from 'react-test-renderer';

/*unit test for rendering (root App)*/

// //render App compnent
  test('render App component', ()=>{
    const testRenderer = TestRenderer.create(<App/>);
    const testInstance = testRenderer.root;
    expect(testInstance.findByProps({  test_id_1: "1"}).children).toEqual([' ']);
  });
