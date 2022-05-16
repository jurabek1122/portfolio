import Project from './Project'
import Projectdata from './projectdata.json';
import {Row} from 'reactstrap';


const Projects = () => {

    return(
        <Row id='projects' >
            <h1>Projects</h1>
            {Projectdata.map((project) => {
                return (
                    <Project key={project.id} project={project} />
                ) 
            })}
        </Row>
    );
}

export default Projects;