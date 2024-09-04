import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link, useLocation } from 'react-router-dom';

function BreadcrumbExample() {
    const location = useLocation();
    let curentLink = '';
    const crumbs = location.pathname.split('/')
        .filter(crumbs => crumbs !== '')
        .map(crumbs => {
            curentLink += `/${crumbs}`
            return (
                <Breadcrumb.Item href={curentLink} key={crumbs} active style={{ color: 'black' }}>{crumbs}</Breadcrumb.Item>
            )
        })

    return (
        <Breadcrumb>
            <Breadcrumb.Item href='/' key="/" style={{ color: 'black' }}>Trang chu</Breadcrumb.Item>
            {crumbs}
            {/* <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
        </Breadcrumb>
    );
}

export default BreadcrumbExample;