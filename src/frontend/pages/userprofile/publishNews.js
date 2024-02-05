import React from "react";
import Header from "../../components/header";
import AddBlogs from "./addBlogs";
import Footer from "../../components/footer";
import { Container } from "react-bootstrap";


function PublishNews(){

    return(
<>
        <Header/>
        <section className="spad">
            <h1 className="text-center">PUBLISH HOTEL NEWS/PR</h1>

            <Container>
            <AddBlogs/>


            </Container>
        </section>
        <Footer/>
        </>
    );
}
export default PublishNews;