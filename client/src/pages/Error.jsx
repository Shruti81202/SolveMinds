import { NavLink } from "react-router-dom";

export const Error = () =>{
    return(
        <>
        <section id="error-page">
            <div className="content">
                <h2 className="header">404</h2>
                <h4>Sorry! Page not found</h4>
                <p>
                Oops the page you are looking for could not be found.
                </p>
                <div className="btns">
                    <NavLink to="/">return home</NavLink>
                    <NavLink to="/contact">report problem</NavLink>
                </div>
            </div>
        </section>
        </>
    );
}