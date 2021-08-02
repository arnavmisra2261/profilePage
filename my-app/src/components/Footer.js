import Breadcrumb from 'react-bootstrap/Breadcrumb'

const Footer = () => {
    return (
        <div style = {{margin: "auto", width: "15%"}}>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Gitlab</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Linkedin
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Resume</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}

export default Footer
