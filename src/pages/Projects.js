import airport from '../images/fzl-airport.png';
import ivy from '../images/ivy.png';
import smarton from '../images/smarton.png';
import asan from '../images/asan.png';
import { ProjectCard } from '../components/ProjectCard';
import { SimpleTitle } from '../components/SimpleTitle';

export const Projects = () => {
    return (
        <div className="container my-5">
            <SimpleTitle title='Proyektlər' />
            <div className="row mt-5">
                <div className="col-md-4 col-sm-6 col-12">
                    <ProjectCard
                        img={airport}
                        title='Füzuli airport'
                    />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                    <ProjectCard
                        img={ivy}
                        title='IVY garden hotel'
                    />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                    <ProjectCard
                        img={smarton}
                        title='Smarton'
                    />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                    <ProjectCard
                        img={asan}
                        title='Asan xidmət'
                    />
                </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <ProjectCard
                            img={airport}
                            title='Füzuli airport'
                        />
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <ProjectCard
                            img={ivy}
                            title='IVY garden hotel'
                        />
                    </div>
            </div>
        </div>
    );
}

