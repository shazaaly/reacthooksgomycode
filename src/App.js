
import './App.css';
import { ReducerHook, ReducerHookIntro } from './Components/UseReducerHook/ReducerHookIntro';
import { UseReducerInAction } from './Components/UseReducerHook/UseReducerInAction';
import { Counter } from './Components/UseStateHook/Counter';
import { UseEffectHook } from './Components/UseEffectHook/UseEffectHook';
import { InputEx } from './Components/UseStateHook/InputEx';
import { UseRefHook } from './Components/UseRefHooks/UseRefHook';
import { UserContext, user } from './Components/useContextHook/UserContextHook';
import { Login } from './Components/useContextHook/Login';
import { User } from './Components/useContextHook/User';
import { ComputeOnce } from './Components/useMemoHook/ComputeOnce';

function App() {

  return (

    <div className="App">

     <ComputeOnce />

      <Counter />
      <br />
      {/* <h3></h3>Input Example :  */}
      <InputEx />

      {/* <ReducerHookIntro /> */}
      {/* <UseReducerInAction /> */}

      <UseEffectHook />
      <UseRefHook />

      <UserContext.Provider value={user}>

        <Login />
        <User />
      </UserContext.Provider>

     

    



    </div>

  );
}

export default App;
