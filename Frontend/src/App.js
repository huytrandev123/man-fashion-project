import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout';
import { Fragment } from 'react'; // Fragment chỉ là thẻ chứa và ko có thật trong DOM

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        // Mặc định : DefaultLayout 
                        // Nếu có layout -> lấy layout
                        // Nếu layout = null -> fragment
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment
                        } else if (route.type) { 
                            if(route.type === 'Polo') { 
                                Layout = route.type === 'Polo'
                            } else if(route.type === 'Shirt') {
                                Layout = route.type === 'Shirt'
                            } else if (route.type === 'Pants') { 
                                Layout = route.type === 'Pants'
                            }
                        } 
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        {/* Page là children của Layout --> nên dc lưu vào phần content của DefaultLayout */}
                                        <Page />
                                    </Layout>
                                }
                            />
                        );

                        // TH : Chỉ đích danh layout === null , thì lấy 1 mình layout đó (ko có Header vs Sidebar) . Và ngược lại thì cho nó = DefaultLayout
                        // const Layout = route.layout === null ? Fragment : DefaultLayout;
                        // const Page = route.component;
                        // return (
                        //     <Route
                        //         key={index}
                        //         path={route.path}
                        //         element={
                        //             <Layout>
                        //                 {/* Page là children của Layout --> nên dc lưu vào phần content của DefaultLayout */}
                        //                 <Page />
                        //             </Layout>
                        //         }
                        //     />
                        // );

                        // TH : truyền layout vào ==> sẽ lấy layout dc truyền
                        // const Page = route.component;
                        // let Layout = DefaultLayout // Mặc định sẽ là DefaultLayout
                        // if(route.layout) {  // nếu có layout
                        //     Layout = route.layout // layout sẽ = layout dc truyền
                        // } else if (route.layout === null) {
                        //     Layout = Fragment // ngược lại layout = fragment
                        // }
                        // return (
                        //     <Route
                        //         key={index}
                        //         path={route.path}
                        //         element={
                        //             <Layout>
                        //                 {/* Page là children của Layout --> nên dc lưu vào phần content của DefaultLayout */}
                        //                 <Page />
                        //             </Layout>
                        //         }
                        //     />
                        // );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
