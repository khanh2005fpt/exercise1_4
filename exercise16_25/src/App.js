import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Exercise16 from "./exercise16/Exercise16";
import Exercise17 from "./exercise17/Exercise17";
import Exercise18 from "./exercise18/Exercise18";
import Exercise19 from "./exercise19/Exercise19";
import Exercise20 from "./exercise20/Exercise20";
import DishList from "./exercise21/DishList";
import DishDetail from "./exercise21/DishDetail";
import Home from "./exercise21/Home";
import UsersList from "./exercise21/UserList";
import UserDetail from "./exercise21/UserDetail";
import DishesList from "./exercise21/DishList";
import Exercise22 from "./exercise22/Exercise22";
import Exercise23 from "./exercise23/Exercise23";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/exercise16" element={<Exercise16 />} />
                <Route path="/exercise17" element={<Exercise17 />} />
                <Route path="/exercise18" element={<Exercise18 />} />
                <Route path="/exercise19" element={<Exercise19 />} />
                <Route path="/exercise20" element={<Exercise20 />} />
                <Route path="/exercise21" element={<Home />} />
                <Route path="/exercise21/users" element={<UsersList />} />
                <Route path="/exercise21/users/:id" element={<UserDetail />} />
                <Route path="/exercise21/dishes" element={<DishesList />} />
                <Route path="/exercise21/dishes/:id" element={<DishDetail />} />
                <Route path="/exercise22/*" element={<Exercise22 />} />
                <Route path="/exercise23" element={<Exercise23 />} />





            </Routes>
        </BrowserRouter>
    )
}

export default App;