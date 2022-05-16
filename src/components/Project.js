import {Col} from 'reactstrap';

const Project = ({project}) => {

    return(
        <Col md='4' className='project my-3'>
            <a href={project.url} target="_blank">
                <div className='card-img'>
                    <img src={project.img} />
                </div>
                <h3>{project.name}</h3>
            </a>
            
        </Col>
    );
}

export default Project;