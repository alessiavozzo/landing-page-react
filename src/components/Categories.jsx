import '../assets/js/categories';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './css/Categories.css';
import categories from '../assets/js/categories';

function getColumns(array, columnElements) {
    let result = [];
    for (let i = 0; i < array.length; i += columnElements) {
        let slicedArray = array.slice(i, i + columnElements);
        result.push(slicedArray);
    }
    return result;
}

function Categories() {
    let categoryColumns = getColumns(categories, 3);
    /*  console.log(categoryColumns); */

    return (
        <section id="categories" className='pt-5'>
            <Container fluid="xl">
                <div className="pick mb-2">
                    Scegli la categoria di corsi dalla quale vuoi iniziare
                </div>

                {/* title */}
                <h2 className='mb-4'>
                    Categorie Popolari
                </h2>

                {/* see all btn */}
                <a href="#" className='btn see-all-btn rounded-5' aria-label="Guarda tutte le categorie">Guarda tutto</a>

                <Row className='g-3'>
                    {categoryColumns.map(column => (
                        <Col className='col-12 col-xl-4 d-flex flex-column flex-xl-row gap-2'>
                            {column.map(category => (
                                <Card>
                                    {category.title}
                                </Card>
                            ))}
                        </Col>
                    ))}

                </Row>

            </Container>
        </section>
    )
};

export default Categories;